import { allComunidades } from "./comunidadesData";

/**
 * Obtiene las comunidades de una parroquia específica con estadísticas agregadas
 * @param nombreParroquia - Slug de la parroquia (ej: "sanPablo", "carmenGuzho")
 * @returns Comunidades ordenadas con totales calculados
 */
export const getComunidadesByParroquia = (nombreParroquia: string) => {
  
  const comunidadesFiltradas = [...allComunidades]
    .filter(comunidad => comunidad.parroquia === nombreParroquia)
    .sort((a, b) => a.numComunidad - b.numComunidad)
    .map(comunidad => ({
      numComunidad: comunidad.numComunidad,
      matrimonios: comunidad.matrimonios.flatMap(m => m.nombres),
      solteros: comunidad.solteros.flatMap(s => s.nombres),
      solteras: comunidad.solteras.flatMap(s => s.nombres),
      total: (comunidad.matrimonios.length * 2) + comunidad.solteros.length + comunidad.solteras.length,
      observaciones: [
        ...comunidad.matrimonios,
        ...comunidad.solteros,
        ...comunidad.solteras
      ].flatMap(persona => 
        persona.observaciones.trim() !== "" 
          ? [{ nombres: persona.nombres, observaciones: persona.observaciones }] 
          : []
      ),
      hospedaje: [
        ...comunidad.matrimonios,
        ...comunidad.solteros,
        ...comunidad.solteras
      ].flatMap(persona => 
        persona.hospedaje 
          ? [{ nombres: persona.nombres, casa: persona.hospedaje }] 
          : []
      ),
    }));

  return {
    comunidades: comunidadesFiltradas,
    totalMatrimonios: comunidadesFiltradas.reduce((total, comunidad) => total + comunidad.matrimonios.length, 0),
    totalSolteros: comunidadesFiltradas.reduce((total, comunidad) => total + comunidad.solteros.length, 0),
    totalSolteras: comunidadesFiltradas.reduce((total, comunidad) => total + comunidad.solteras.length, 0),
    totalHermanos: comunidadesFiltradas.reduce((total, comunidad) => total + comunidad.total, 0)
  };
}

/**
 * Filtra hermanos por lugar de hospedaje y opcionalmente por parroquia
 * @param nombreParroquia - "all" para todas las parroquias o slug específico
 * @param lugarHospedaje - Valor del enum CasasConvivencia
 * @returns Lista de hermanos hospedados en el lugar especificado
 */
export const getHermanosByHospedaje = (nombreParroquia = "all", lugarHospedaje: string) => {

  const comunidadesFiltradas = nombreParroquia !== "all" 
    ? [...allComunidades].filter(comunidad => comunidad.parroquia === nombreParroquia)
    : [...allComunidades];

  const hermanosPorHospedaje: Array<{
    numComunidad: number;
    parroquia: string;
    tipo: string;
    nombres: string;
    hospedaje: string;
  }> = [];

  comunidadesFiltradas.forEach(comunidad => {
    // Agregar matrimonios que coincidan con el hospedaje
    comunidad.matrimonios
      .filter(matrimonio => matrimonio.hospedaje === lugarHospedaje)
      .forEach(matrimonio => {
        hermanosPorHospedaje.push({
          numComunidad: comunidad.numComunidad,
          parroquia: comunidad.parroquia,
          tipo: "matrimonio",
          nombres: matrimonio.nombres,
          hospedaje: matrimonio.hospedaje,
        });
      });

    // Agregar solteros que coincidan con el hospedaje
    comunidad.solteros
      .filter(soltero => soltero.hospedaje === lugarHospedaje)
      .forEach(soltero => {
        hermanosPorHospedaje.push({
          numComunidad: comunidad.numComunidad,
          parroquia: comunidad.parroquia,
          tipo: "soltero",
          nombres: soltero.nombres,
          hospedaje: soltero.hospedaje,
        });
      });

    // Agregar solteras que coincidan con el hospedaje
    comunidad.solteras
      .filter(soltera => soltera.hospedaje === lugarHospedaje)
      .forEach(soltera => {
        hermanosPorHospedaje.push({
          numComunidad: comunidad.numComunidad,
          parroquia: comunidad.parroquia,
          tipo: "soltera",
          nombres: soltera.nombres,
          hospedaje: soltera.hospedaje,
        });
      });
  });

  return hermanosPorHospedaje;
}

/**
 * Obtiene todos los hermanos de una parroquia o de todas las comunidades
 * @param nombreParroquia - "all" para todas las parroquias o slug específico
 * @returns Lista completa de hermanos con su información
 */
export const getAllHermanos = (nombreParroquia = "all") => {
  
  const comunidadesFiltradas = nombreParroquia !== "all" 
    ? [...allComunidades].filter(comunidad => comunidad.parroquia === nombreParroquia)
    : [...allComunidades];

  comunidadesFiltradas.sort((a, b) => a.numComunidad - b.numComunidad);

  const todosLosHermanos: Array<{
    numComunidad: number;
    tipo: string;
    nombres: string;
    observaciones: string;
    hospedaje: string;
  }> = [];

  comunidadesFiltradas.forEach(comunidad => {
    // Agregar todos los matrimonios
    comunidad.matrimonios.forEach(matrimonio => {
      todosLosHermanos.push({
        numComunidad: comunidad.numComunidad,
        tipo: "matrimonio",
        nombres: matrimonio.nombres,
        observaciones: matrimonio.observaciones,
        hospedaje: matrimonio.hospedaje,
      });
    });

    // Agregar todos los solteros
    comunidad.solteros.forEach(soltero => {
      todosLosHermanos.push({
        numComunidad: comunidad.numComunidad,
        tipo: "soltero",
        nombres: soltero.nombres,
        observaciones: soltero.observaciones,
        hospedaje: soltero.hospedaje,
      });
    });

    // Agregar todas las solteras
    comunidad.solteras.forEach(soltera => {
      todosLosHermanos.push({
        numComunidad: comunidad.numComunidad,
        tipo: "soltera",
        nombres: soltera.nombres,
        observaciones: soltera.observaciones,
        hospedaje: soltera.hospedaje,
      });
    });
  });

  return todosLosHermanos;
}

export const resumenHermanos = () => {

  const resumenHermanos: Array<{
    parroquia: string;
    totalComus: number; // total de comunidades de esta parroquia 
    totalMatrimonios: number;
    totalSolteros: number;
    totalSolteras: number;
    totalPersonas: number;
  }> = [];

  const parroquias = Array.from(new Set(allComunidades.map(c => c.parroquia)));
  parroquias.forEach(parroquia => {
    const comunidadesParroquia = allComunidades.filter(c => c.parroquia === parroquia);
    const totalComus = comunidadesParroquia.length;
    const totalMatrimonios = comunidadesParroquia.reduce((total, comu) => total + comu.matrimonios.length, 0);
    const totalSolteros = comunidadesParroquia.reduce((total, comu) => total + comu.solteros.length, 0);
    const totalSolteras = comunidadesParroquia.reduce((total, comu) => total + comu.solteras.length, 0);
    const totalPersonas = (totalMatrimonios * 2) + totalSolteros + totalSolteras;
    
    resumenHermanos.push({
      parroquia,
      totalComus,
      totalMatrimonios,
      totalSolteros,
      totalSolteras,
      totalPersonas
    });
  })
  return resumenHermanos;
}