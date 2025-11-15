/**
 * Datos y tipos de las comunidades
 * Este archivo contiene todos los datos de las comunidades de las diferentes parroquias
*/


// types
interface Comunidad {
  parroquia: ParroquiaSlug;
  numComunidad: number;
  matrimonios: {
    nombres: string;
    observaciones: string;
    // hospedaje debe ser remplazado por el tipo de casas de convivencia
    hospedaje: string;
  }[],
  solteros: {
    nombres: string;
    observaciones: string;
    // hospedaje debe ser remplazado por el tipo de casas de convivencia
    hospedaje: string;
  }[],
  solteras: {
    nombres: string;
    observaciones: string;
    // hospedaje debe ser remplazado por el tipo de casas de convivencia
    hospedaje: string;
  }[]
}

// consts
export enum ParroquiaSlug {
  todas= "Todas las Parroquias",
  sanPablo = "San Pablo",
  sanJuanPabloII = "San Juan Pablo II",
  carmenGuzho = "Carmen de Guzho",
  quitachica = "Quitachica",
  monay = "Santa Teresa de Monay",
  ricaurte = "Ricaurte"
}

export enum CasasConvivencia {
  seminario = "Seminario",
  casaBetania = "Casa Betania",
  quintaLeonor = "Quinta Leonor",
  sumbahuaico = "Sumbahuaico",
  none = "Ninguno"
} 

export const catequistasData = [
  {
    nombres: "Rodrigo y Eliana",
    tipo: "matrimonio",
    observaciones: "",
    hospedaje: CasasConvivencia.sumbahuaico 
  },
  {
    nombres: "Nelson y Jenny",
    tipo: "matrimonio",
    observaciones: "",
    hospedaje: CasasConvivencia.sumbahuaico 
  },
  {
    nombres: "Santiago Cordero y Noemí",
    tipo: "matrimonio",
    observaciones: "",
    hospedaje: CasasConvivencia.sumbahuaico 
  },
  {
    nombres: "Felipe",
    tipo: "soltero",
    observaciones: "",
    hospedaje: CasasConvivencia.sumbahuaico 
  },
]

export const allComunidades: Comunidad[] = [
  {
    parroquia: ParroquiaSlug.carmenGuzho,
    numComunidad: 1,
    matrimonios: [
      { nombres: "Manuel Chimbo y Rosario Farez", observaciones: "", hospedaje: "" }
    ],
    solteros: [
      { nombres: "David Cajamarca", observaciones: "", hospedaje: "" }
    ],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.carmenGuzho,
    numComunidad: 2,
    matrimonios: [
      { nombres: "Marco Pintado y Angélica Cajamarca", observaciones: "", hospedaje: "" },
      { nombres: "Diego Peñaloza y Andrea", observaciones: "", hospedaje: "" }
    ],
    solteros: [
      { nombres: "Francisco Ayala", observaciones: "", hospedaje: "" }
    ],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 3,
    matrimonios: [],
    solteros: [],
    solteras: [
      { nombres: "Mercedes de Tapia", observaciones: "", hospedaje: CasasConvivencia.sumbahuaico },
      { nombres: "Piedad Ochoa", observaciones: "", hospedaje: CasasConvivencia.sumbahuaico }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 5,
    matrimonios: [
      { nombres: "Miguel Ávila y Elsa Ordóñez", observaciones: "", hospedaje: CasasConvivencia.sumbahuaico },
      { nombres: "Cornelio Romo y Ruth Urgilés", observaciones: "", hospedaje: CasasConvivencia.sumbahuaico }
    ],
    solteros: [],
    solteras: [
      { nombres: "Mirian Neira", observaciones: "", hospedaje: CasasConvivencia.sumbahuaico }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 7,
    matrimonios: [
      { nombres: "Andrés Ortiz y Carla Zúñiga", observaciones: "Embarazada - 1° piso", hospedaje: CasasConvivencia.seminario },
      { nombres: "Juan Narváez y María Fernanda Vidal", observaciones: "", hospedaje: CasasConvivencia.sumbahuaico }
    ],
    solteros: [],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 8,
    matrimonios: [
      { nombres: "Manuel Paredes y Lorena Rivera", observaciones: "", hospedaje: CasasConvivencia.sumbahuaico },
      { nombres: "Pablo Cordero y Bernarda Moreno", observaciones: "3 niños pequeños", hospedaje: CasasConvivencia.seminario }
    ],
    solteros: [
      { nombres: "Sergio Quituisaca", observaciones: "", hospedaje: CasasConvivencia.sumbahuaico }
    ],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 9,
    matrimonios: [
      { nombres: "Roberto e Inés", observaciones: "1 niño pequeño", hospedaje: CasasConvivencia.seminario }
    ],
    solteros: [
      { nombres: "Joaquín Ortega", observaciones: "", hospedaje: CasasConvivencia.sumbahuaico },
      { nombres: "Joaquín Cordero", observaciones: "", hospedaje: CasasConvivencia.sumbahuaico }
    ],
    solteras: [
      { nombres: "Michelle Chitacapa", observaciones: "", hospedaje: CasasConvivencia.sumbahuaico }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 10,
    matrimonios: [
      { nombres: "Julio Brito y Teresa Orellana", observaciones: "", hospedaje: CasasConvivencia.sumbahuaico },
      { nombres: "Omar Pinos y Priscila Fernandez", observaciones: "", hospedaje: CasasConvivencia.sumbahuaico }
    ],
    solteros: [
      { nombres: "Josue Malla", observaciones: "", hospedaje: CasasConvivencia.sumbahuaico },
      { nombres: "José David Cordero", observaciones: "", hospedaje: CasasConvivencia.sumbahuaico }
    ],
    solteras: [
      { nombres: "Daniela Inga", observaciones: "", hospedaje: CasasConvivencia.sumbahuaico }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 11,
    matrimonios: [
      { nombres: "William Mogrovejo y Jenny", observaciones: "", hospedaje: CasasConvivencia.sumbahuaico },
      { nombres: "Marco Calle y Verónica", observaciones: "", hospedaje: CasasConvivencia.sumbahuaico }
    ],
    solteros: [
      { nombres: "Diego Murillo", observaciones: "", hospedaje: CasasConvivencia.sumbahuaico }
    ],
    solteras: [
      { nombres: "Sandra Rodas", observaciones: "", hospedaje: CasasConvivencia.sumbahuaico }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 12,
    matrimonios: [
      { nombres: "Diego Roldán y Jenny Matute", observaciones: "", hospedaje: CasasConvivencia.sumbahuaico }
    ],
    solteros: [
      { nombres: "Emilia Cordero", observaciones: "", hospedaje: CasasConvivencia.sumbahuaico }
    ],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 5,
    matrimonios: [
      { nombres: "Fabian Sinchi y Rosana Sinchi", observaciones: "", hospedaje: "" },
      { nombres: "Nelson Sacta y Veronica Muy", observaciones: "", hospedaje: "" }
    ],
    solteros: [],
    solteras: [
      { nombres: "Maritza Faican", observaciones: "con bebé", hospedaje: CasasConvivencia.seminario },
      { nombres: "Nancy Baculima", observaciones: "", hospedaje: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 10,
    matrimonios: [
      { nombres: "Marcelo y Tania", observaciones: "", hospedaje: "" }
    ],
    solteros: [
      { nombres: "Christian Otavalo", observaciones: "", hospedaje: "" }
    ],
    solteras: [
      { nombres: "Martha León", observaciones: "1 bebé", hospedaje: CasasConvivencia.seminario },
      { nombres: "Mishelle Peralta", observaciones: "", hospedaje: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 7,
    matrimonios: [
      { nombres: "Juan Carlos López y Gabriela Peñafiel", observaciones: "", hospedaje: "" },
      { nombres: "Fabián Cabrera y Dorys Vanegas", observaciones: "", hospedaje: "" }
    ],
    solteros: [],
    solteras: [
      { nombres: "Monserrat Valdez", observaciones: "", hospedaje: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 3,
    matrimonios: [
      { nombres: "Alberto Padilla y Bety", observaciones: "adultos mayores", hospedaje: CasasConvivencia.seminario }
    ],
    solteros: [],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 13,
    matrimonios: [
      { nombres: "Pablo León y Tatiana Peñaloza", observaciones: "con 2 niños de 3 y 1 año", hospedaje: CasasConvivencia.seminario }
    ],
    solteros: [],
    solteras: [
      { nombres: "Giselle Otavalo", observaciones: "", hospedaje: "" },
      { nombres: "Yolanda Guachichullca", observaciones: "", hospedaje: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 12,
    matrimonios: [
      { nombres: "Flavio Iñiguez y Fabiola Pacho", observaciones: "", hospedaje: "" },
      { nombres: "Víctor Tigre y Ana Lucía Amón", observaciones: "", hospedaje: "" }
    ],
    solteros: [],
    solteras: [
      { nombres: "Salomé Cabrera", observaciones: "", hospedaje: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 15,
    matrimonios: [
      { nombres: "Diego y Gaby", observaciones: "", hospedaje: "" },
      { nombres: "Angle y Patricia", observaciones: "", hospedaje: "" }
    ],
    solteros: [
      { nombres: "Jorge Guaman", observaciones: "", hospedaje: "" },
      { nombres: "Paul Arevalo", observaciones: "", hospedaje: "" }
    ],
    solteras: [
      { nombres: "Estefania", observaciones: "", hospedaje: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 18,
    matrimonios: [
      { nombres: "Marco y María", observaciones: "", hospedaje: "" },
      { nombres: "Marcial y Bety", observaciones: "", hospedaje: "" }
    ],
    solteros: [
      { nombres: "Carlitos", observaciones: "", hospedaje: "" }
    ],
    solteras: [
      { nombres: "Mayte", observaciones: "", hospedaje: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 4,
    matrimonios: [
      { nombres: "Luis Calle y Viviana", observaciones: "", hospedaje: "" }
    ],
    solteros: [],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.quitachica,
    numComunidad: 3,
    matrimonios: [
      { nombres: "Alfonso y Maria", observaciones: "", hospedaje: "" }
    ],
    solteros: [],
    solteras: [
      { nombres: "Paola Tenesaca", observaciones: "", hospedaje: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.quitachica,
    numComunidad: 2,
    matrimonios: [
      { nombres: "Claudio Duchi y Nancy Munoz", observaciones: "Todos no tienen transporte de tralado", hospedaje: "" },
      { nombres: "Narcisa Mora y Alex Cano", observaciones: "", hospedaje: "" }
    ],
    solteros: [
      { nombres: "Daniel Morocho", observaciones: "", hospedaje: "" }
    ],
    solteras: [
      { nombres: "Daniela Guarquila", observaciones: "", hospedaje: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 11,
    matrimonios: [
      { nombres: "Fabián y Maritza", observaciones: "", hospedaje: "" },
    ],
    solteros: [],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 14,
    matrimonios: [
      { nombres: "Xavier Domínguez y Maria Huachichullca", observaciones: "1 bebe", hospedaje: CasasConvivencia.seminario },
    ],
    solteros: [],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 19,
    matrimonios: [
      { nombres: "Emiliano y Anita", observaciones: "Adultos", hospedaje: "" },
      { nombres: "Paulo y Michelle", observaciones: "bebe de 1 año", hospedaje: CasasConvivencia.seminario },
    ],
    solteros: [{
      nombres: "Jaime Loja", observaciones: "", hospedaje: ""
    }],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.monay,
    numComunidad: 1,
    matrimonios: [
      { nombres: "Carlos Quille y Lourdes Guaman", observaciones: "Adultos y 1 niña", hospedaje: "" },
    ],
    solteros: [
      { nombres: "José Santos", observaciones: "Adulto", hospedaje: "" },
      { nombres: "David Torres", observaciones: "", hospedaje: "" },
    ],
    solteras: [
      { nombres: "Julia Amón", observaciones: "Adulto", hospedaje: "" },
    ]
  },
  {
    parroquia: ParroquiaSlug.monay,
    numComunidad: 2,
    matrimonios: [
      { nombres: "Felipe Luna y Diana Torres", observaciones: "", hospedaje: "" },
    ],
    solteros: [],
    solteras: [
      { nombres: "Nube Bustos", observaciones: "1 niño", hospedaje: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.ricaurte,
    numComunidad: 2,
    matrimonios: [
      { nombres: "Hector y Lola", observaciones: "", hospedaje: "" },
      { nombres: "Carlos y Caty", observaciones: "", hospedaje: "" },
    ],
    solteros: [],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 16,
    matrimonios: [],
    solteros: [
      { nombres: "David Román", observaciones: "", hospedaje: "" }
    ],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.ricaurte,
    numComunidad: 3,
    matrimonios: [],
    solteros: [
      { nombres: "Mateo Lituma", observaciones: "", hospedaje: "" }
    ],
    solteras: [
      { nombres: "Virginia Guamán", observaciones: "", hospedaje: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.carmenGuzho,
    numComunidad: 3,
    matrimonios: [],
    solteros: [
      { nombres: "Juan P. Yupanqui", observaciones: "", hospedaje: "" }
    ],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 9,
    matrimonios: [
      { nombres: "Geovanny y Fanny", observaciones: "", hospedaje: "" }
    ],
    solteros: [
      { nombres: "Rubén Guzhñay", observaciones: "", hospedaje: "" }
    ],
    solteras: [
      { nombres: "Liz Faicán", observaciones: "problemas de salud", hospedaje: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 17,
    matrimonios: [],
    solteros: [],
    solteras: [
      { nombres: "Mónica Ortega", observaciones: "", hospedaje: "" },
      { nombres: "Natalia Lasso", observaciones: "", hospedaje: "" }
    ]
  },
]


