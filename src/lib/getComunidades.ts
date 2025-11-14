import { allComunidades } from "./allComunidades";

export const getCommunity = (parroquia: string) => {
  
  const comunidades = [...allComunidades]
    .filter( comu => comu.parroquia === parroquia )
    .sort( (a, b) => a.numComunidad - b.numComunidad )
    .map( comu => ({
      numComunidad: comu.numComunidad,
      matrimonios: comu.matrimonios.flatMap( m => m.nombres ),
      solteros: comu.solteros.flatMap( s => s.nombres ),
      solteras: comu.solteras.flatMap( s => s.nombres ),
      total: (comu.matrimonios.length * 2) + comu.solteros.length + comu.solteras.length,
      observaciones: [...comu.matrimonios, ...comu.solteros, ...comu.solteras].flatMap( entry => entry.observaciones.trim() !== "" ? [{nombres: entry.nombres, observaciones: entry.observaciones}] : []),
      hospedaje: [...comu.matrimonios, ...comu.solteros, ...comu.solteras].flatMap( entry => entry.hospedaje ? [{name: entry.nombres, casa: entry.hospedaje}] : []),
    }))

  return {
    comunidades: comunidades,
    totalMatrimonios: comunidades.reduce((acc,curr) => acc + curr.matrimonios.length, 0),
    totalSolteros: comunidades.reduce((acc, curr) => acc + curr.solteros.length, 0),
    totalSolteras: comunidades.reduce((acc, curr) => acc + curr.solteras.length, 0),
    totalHermanos: comunidades.reduce((acc, curr) => acc + curr.total, 0)
  };
}

// filtro por lugar de convivencia y por parroquias
export const getComunityByLugar = (parroquia = "all", lugar: string) => {

  const comunidades = parroquia !== "all" 
    ? [...allComunidades].filter(comu => comu.parroquia === parroquia)
    : [...allComunidades];

  const resultados: Array<{
    numComunidad: number;
    parroquia: string;
    tipo: string;
    nombres: string;
    hospedaje: string;
  }> = [];

  comunidades.forEach(comu => {
    // Procesar matrimonios
    comu.matrimonios
      .filter(m => m.hospedaje === lugar)
      .forEach(m => {
        resultados.push({
          numComunidad: comu.numComunidad,
          parroquia: comu.parroquia,
          tipo: "matrimonio",
          nombres: m.nombres,
          hospedaje: m.hospedaje,
        });
      });

    // Procesar solteros
    comu.solteros
      .filter(s => s.hospedaje === lugar)
      .forEach(s => {
        resultados.push({
          numComunidad: comu.numComunidad,
          parroquia: comu.parroquia,
          tipo: "soltero",
          nombres: s.nombres,
          hospedaje: s.hospedaje,
        });
      });

    // Procesar solteras
    comu.solteras
      .filter(s => s.hospedaje === lugar)
      .forEach(s => {
        resultados.push({
          numComunidad: comu.numComunidad,
          parroquia: comu.parroquia,
          tipo: "soltera",
          nombres: s.nombres,
          hospedaje: s.hospedaje,
        });
      });
  });

  return resultados;
}

// Obtener todos los hermanos de una parroquia o de todas las comunidades
export const getAllHermanos = (parroquia = "all") => {
  
  const comunidades = parroquia !== "all" 
    ? [...allComunidades].filter(comu => comu.parroquia === parroquia)
    : [...allComunidades];

  comunidades.sort( (a, b) => a.numComunidad - b.numComunidad );

  const resultados: Array<{
    numComunidad: number;
    tipo: string;
    nombres: string;
    observaciones: string;
    hospedaje: string;
  }> = [];

  comunidades.forEach(comu => {
    // Procesar matrimonios
    comu.matrimonios.forEach(m => {
      resultados.push({
        numComunidad: comu.numComunidad,
        tipo: "matrimonio",
        nombres: m.nombres,
        observaciones: m.observaciones,
        hospedaje: m.hospedaje,
      });
    });

    // Procesar solteros
    comu.solteros.forEach(s => {
      resultados.push({
        numComunidad: comu.numComunidad,
        tipo: "soltero",
        nombres: s.nombres,
        observaciones: s.observaciones,
        hospedaje: s.hospedaje,
      });
    });

    // Procesar solteras
    comu.solteras.forEach(s => {
      resultados.push({
        numComunidad: comu.numComunidad,
        tipo: "soltera",
        nombres: s.nombres,
        observaciones: s.observaciones,
        hospedaje: s.hospedaje,
      });
    });
  });

  return resultados;
}