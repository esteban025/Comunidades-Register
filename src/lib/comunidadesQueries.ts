import { allComunidades, CasasConvivencia, ParroquiaSlug } from "./comunidadesData";
import { catequistasData } from "./comunidadesData";

// Tipos para estructurar los datos retornados
export interface HermanoFiltrado {
  numComunidad: number;
  parroquia: string;
  tipo: string;
  nombres: string;
  hospedaje: string;
}

export interface HermanoHospedaje {
  numComunidad: number;
  parroquia: string;
  tipo: string;
  nombres: string;
  numHabit: string;
}

export interface DataFilter {
  title: string;
  list: HermanoFiltrado[];
  nota?: string;
}

export interface DataFilterHospedaje {
  title: string;
  list: HermanoHospedaje[];
  nota?: string;
}

/**
 * Obtiene las comunidades de una parroquia específica con estadísticas agregadas
 * @param nombreParroquia - Slug de la parroquia (ej: "sanPablo", "carmenGuzho")
 * @returns Comunidades ordenadas con totales calculados
 */
export const getComunidadesByParroquia = (nombreParroquia: string) => {
  
  const comunidadesFiltradas = [...allComunidades]
    .filter(comunidad => comunidad.parroquia === nombreParroquia)
    .sort((a, b) => a.numComunidad - b.numComunidad);

  const hermanosFiltrados: Array<{
    numComunidad: number;
    tipo: string;
    nombres: string;
    observaciones: string;
    hospedaje: string;
  }> = [];

  comunidadesFiltradas.forEach(comunidad => {
    // Agregar matrimonios
    comunidad.matrimonios.forEach(matrimonio => {
      hermanosFiltrados.push({
        numComunidad: comunidad.numComunidad,
        tipo: "matrimonio",
        nombres: matrimonio.nombres,
        observaciones: matrimonio.observaciones,
        hospedaje: matrimonio.hospedaje,
      });
    });

    // Agregar solteros
    comunidad.solteros.forEach(soltero => {
      hermanosFiltrados.push({
        numComunidad: comunidad.numComunidad,
        tipo: "soltero",
        nombres: soltero.nombres,
        observaciones: soltero.observaciones,
        hospedaje: soltero.hospedaje,
      });
    });

    // Agregar solteras
    comunidad.solteras.forEach(soltera => {
      hermanosFiltrados.push({
        numComunidad: comunidad.numComunidad,
        tipo: "soltera",
        nombres: soltera.nombres,
        observaciones: soltera.observaciones,
        hospedaje: soltera.hospedaje,
      });
    });
  });

  const totalMatrimonios = comunidadesFiltradas.reduce((total, comunidad) => total + comunidad.matrimonios.length, 0);
  const totalSolteros = comunidadesFiltradas.reduce((total, comunidad) => total + comunidad.solteros.length, 0);
  const totalSolteras = comunidadesFiltradas.reduce((total, comunidad) => total + comunidad.solteras.length, 0);

  return {
    nombre: nombreParroquia,
    hermanos: hermanosFiltrados,
    totalMatrimonios,
    totalSolteros,
    totalSolteras,
    totalHermanos: (totalMatrimonios * 2) + totalSolteros + totalSolteras
  };
}

/**
 * Obtiene todos los datos necesarios para renderizar una parroquia
 * Versión simplificada que retorna todo en un solo objeto
 * @param nombreParroquia - Slug de la parroquia
 * @returns Objeto con nombre, hermanos y totales listos para renderizar
 */
export const getDataParroquia = (nombreParroquia: ParroquiaSlug) => {
  return getComunidadesByParroquia(nombreParroquia);
};

/**
 * Filtra hermanos por lugar de hospedaje y opcionalmente por parroquia
 * @param nombreParroquia - "all" para todas las parroquias o slug específico
 * @param lugarHospedaje - Valor del enum CasasConvivencia
 * @returns Lista de hermanos hospedados en el lugar especificado
 */
export const getHermanosByHospedaje = (nombreParroquia = "Todas las Parroquias", lugarHospedaje: string) => {

  const comunidadesFiltradas = nombreParroquia !== "Todas las Parroquias" 
    ? [...allComunidades].filter(comunidad => comunidad.parroquia === nombreParroquia)
    : [...allComunidades];

  const hermanosPorHospedaje: Array<{
    numComunidad: number;
    parroquia: string;
    tipo: string;
    nombres: string;
    hospedaje: string;
  }> = [];

  comunidadesFiltradas.sort((a, b) => a.numComunidad - b.numComunidad);

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

  return hermanosPorHospedaje
}

/**
 * Obtiene todos los hermanos de una parroquia o de todas las comunidades
 * @param nombreParroquia - "all" para todas las parroquias o slug específico
 * @returns Lista completa de hermanos con su información
 */
export const getAllHermanos = (nombreParroquia = "Todas las Parroquias") => {
  
  const comunidadesFiltradas = nombreParroquia !== "Todas las Parroquias" 
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
  // catequistas manualmente
  resumenHermanos.push({
    parroquia: "Catequistas",
    totalComus: 0,
    totalMatrimonios: catequistasData.length,
    totalSolteros: 0,
    totalSolteras: 0,
    totalPersonas: catequistasData.length * 2 - 1
  })

  // didascadas manualmente
  resumenHermanos.push({
    parroquia: "Didascalas",
    totalComus: 0,
    totalMatrimonios: 0,
    totalSolteros: 0,
    totalSolteras: 2,
    totalPersonas: 2
  })

  // guardia manualmente
  resumenHermanos.push({
    parroquia: "Guardia",
    totalComus: 0,
    totalMatrimonios: 0,
    totalSolteros: 1,
    totalSolteras: 0,
    totalPersonas:1
  })
  return resumenHermanos;
}

/**
 * Agrega catequistas a una lista de hermanos
 * @param listaHermanos - Lista de hermanos donde agregar los catequistas
 * @returns Lista con catequistas agregados
 */
export const agregarCatequistas = (listaHermanos: HermanoFiltrado[]): HermanoFiltrado[] => {
  const catequistasFormateados = catequistasData.map((cat) => ({
    numComunidad: 0,
    parroquia: "Catequistas",
    tipo: cat.tipo,
    nombres: cat.nombres,
    hospedaje: cat.hospedaje,
  }));

  return [...listaHermanos, ...catequistasFormateados];
};

/**
 * Agrega didascalas y guardia a una lista de hermanos
 * @param listaHermanos - Lista de hermanos donde agregar didascalas y guardia
 * @returns Lista con didascalas y guardia agregados
 */
export const agregarDidascalasYGuardia = (listaHermanos: HermanoFiltrado[]): HermanoFiltrado[] => {
  const didascalasYGuardia: HermanoFiltrado[] = [
    {
      numComunidad: 0,
      parroquia: "Didascalas",
      tipo: "soltera",
      nombres: "Didascala 1",
      hospedaje: CasasConvivencia.seminario,
    },
    {
      numComunidad: 0,
      parroquia: "Didascalas",
      tipo: "soltera",
      nombres: "Didascala 2",
      hospedaje: CasasConvivencia.seminario,
    },
    {
      numComunidad: 0,
      parroquia: "Guardia",
      tipo: "soltero",
      nombres: "Silvio",
      hospedaje: CasasConvivencia.seminario,
    },
  ];

  return [...listaHermanos, ...didascalasYGuardia];
};

/**
 * Genera los filtros de hospedaje para la vista de filtros
 * Incluye automáticamente catequistas en Zumbahuayco y didascalas/guardia en Seminario
 * @param hospedaje - Opcional: Casa de convivencia específica. Si no se pasa, devuelve todos los hospedajes
 * @param parroquia - Opcional: Parroquia específica. Si no se pasa, devuelve todas las parroquias
 * @returns Array de objetos con título y lista de hermanos filtrados
 */
export const generarFiltrosHospedaje = (
  hospedaje?: CasasConvivencia,
  parroquia?: ParroquiaSlug
): DataFilter[] => {
  const parroquiaFiltro = parroquia || ParroquiaSlug.todas;
  
  // Helper para generar el título según los parámetros
  const generarTitulo = (casaConvivencia: CasasConvivencia): string => {
    if (parroquia) {
      // Si se pasó parroquia específica, mostrar: "Parroquia - Casa"
      return `${parroquiaFiltro} - ${casaConvivencia}`;
    } else {
      // Si no se pasó parroquia, mostrar solo: "Casa"
      return casaConvivencia;
    }
  };

  // Filtro para Seminario con didascalas y guardia
  const filtroSeminario = (): DataFilter => {
    const hermanosSeminario = getHermanosByHospedaje(
      parroquiaFiltro,
      CasasConvivencia.seminario
    );
    // Solo agregar didascalas y guardia si es "todas las parroquias"
    const listaSeminario = parroquiaFiltro === ParroquiaSlug.todas 
      ? agregarDidascalasYGuardia(hermanosSeminario)
      : hermanosSeminario;
    return {
      title: generarTitulo(CasasConvivencia.seminario),
      list: listaSeminario,
    };
  };

  // Filtro para Casa Betania
  const filtroCasaBetania = (): DataFilter => {
    const hermanosCasaBetania = getHermanosByHospedaje(
      parroquiaFiltro,
      CasasConvivencia.casaBetania
    );
    return {
      title: generarTitulo(CasasConvivencia.casaBetania),
      list: hermanosCasaBetania,
    };
  };

  // Filtro para Zumbahuayco con catequistas
  const filtroZumbahuayco = (): DataFilter => {
    const hermanosZumbahuayco = getHermanosByHospedaje(
      parroquiaFiltro,
      CasasConvivencia.zumbahuayco
    );
    // Solo agregar catequistas si es "todas las parroquias"
    const listaZumbahuayco = parroquiaFiltro === ParroquiaSlug.todas
      ? agregarCatequistas(hermanosZumbahuayco)
      : hermanosZumbahuayco;
    return {
      title: generarTitulo(CasasConvivencia.zumbahuayco),
      list: listaZumbahuayco,
      nota: "Al hermanos Felipe se le asignará una habitacion matrimonial en el 1° piso.",
    };
  };

  // Filtro para Quinta Leonor
  const filtroQuintaLeonor = (): DataFilter => {
    const hermanosQuintaLeonor = getHermanosByHospedaje(
      parroquiaFiltro,
      CasasConvivencia.quintaLeonor
    );
    return {
      title: generarTitulo(CasasConvivencia.quintaLeonor),
      list: hermanosQuintaLeonor,
    };
  };

  // Si se especifica un hospedaje, devolver solo ese filtro
  if (hospedaje) {
    switch (hospedaje) {
      case CasasConvivencia.seminario:
        return [filtroSeminario()];
      case CasasConvivencia.casaBetania:
        return [filtroCasaBetania()];
      case CasasConvivencia.zumbahuayco:
        return [filtroZumbahuayco()];
      case CasasConvivencia.quintaLeonor:
        return [filtroQuintaLeonor()];
      default:
        return [];
    }
  }

  // Si no se especifica, devolver todos los filtros
  return [
    filtroSeminario(),
    filtroCasaBetania(),
    filtroZumbahuayco(),
    filtroQuintaLeonor(),
  ];
};

/**
 * Genera filtros para vista de habitaciones (sin hospedaje, con numHabit)
 * Transforma la lista eliminando hospedaje y agregando numHabit vacío
 * @param hospedaje - Opcional: Casa de convivencia específica
 * @param parroquia - Opcional: Parroquia específica
 * @returns Array de filtros adaptados para gestión de habitaciones
 */
export const generarFiltrosHabitaciones = (
  hospedaje?: CasasConvivencia,
  parroquia?: ParroquiaSlug
): DataFilterHospedaje[] => {
  const filtrosOriginales = generarFiltrosHospedaje(hospedaje, parroquia);

  return filtrosOriginales.map((filtro) => ({
    title: filtro.title,
    nota: filtro.nota,
    list: filtro.list.map((hermano) => ({
      numComunidad: hermano.numComunidad,
      parroquia: hermano.parroquia,
      tipo: hermano.tipo,
      nombres: hermano.nombres,
      numHabit: "",
    })),
  }));
};

/**
 * Genera filtros personalizados por hospedaje
 * @param hospedajes - Array de hospedajes a filtrar
 * @param incluirCatequistasEn - Opcional: hospedaje donde incluir catequistas
 * @param incluirDidascalasEn - Opcional: hospedaje donde incluir didascalas y guardia
 * @returns Array de filtros personalizados
 */
export const generarFiltrosPersonalizados = (
  hospedajes: CasasConvivencia[],
  incluirCatequistasEn?: CasasConvivencia,
  incluirDidascalasEn?: CasasConvivencia
): DataFilter[] => {
  return hospedajes.map((hospedaje) => {
    let hermanos = getHermanosByHospedaje(ParroquiaSlug.todas, hospedaje);

    // Agregar catequistas si corresponde
    if (incluirCatequistasEn === hospedaje) {
      hermanos = agregarCatequistas(hermanos);
    }

    // Agregar didascalas y guardia si corresponde
    if (incluirDidascalasEn === hospedaje) {
      hermanos = agregarDidascalasYGuardia(hermanos);
    }

    return {
      title: `${ParroquiaSlug.todas} - ${hospedaje}`,
      list: hermanos,
    };
  });
};