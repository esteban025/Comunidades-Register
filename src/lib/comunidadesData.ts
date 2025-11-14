/**
 * Datos y tipos de las comunidades
 * Este archivo contiene todos los datos de las comunidades de las diferentes parroquias
 */

export enum ParroquiaSlug {
  todas= "all",
  sanPablo = "San Pablo",
  sanJuanPabloII = "San Juan Pablo II",
  carmenGuzho = "Carmen de Guzho",
  quitachica = "Quitachica",
  monay = "Santa Teresa de Monay"
}

export enum CasasConvivencia {
  Seminario = "Seminario",
  CasaBetania = "Casa Betania",
  QuintaLeonor = "Quinta Leonor",
  none = "Ninguno"
} 

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
      { nombres: "Mercedes de Tapia", observaciones: "", hospedaje: "" },
      { nombres: "Piedad Ochoa", observaciones: "", hospedaje: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 5,
    matrimonios: [
      { nombres: "Miguel Ávila y Elsa Ordóñez", observaciones: "", hospedaje: "" },
      { nombres: "Cornelio Romo y Ruth Urgilés", observaciones: "", hospedaje: "" }
    ],
    solteros: [],
    solteras: [
      { nombres: "Mirian Neira", observaciones: "", hospedaje: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 7,
    matrimonios: [
      { nombres: "Andrés Ortiz y Carla Zúñiga", observaciones: "", hospedaje: "" },
      { nombres: "Juan Narváez y María Fernanda Vidal", observaciones: "", hospedaje: "" }
    ],
    solteros: [],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 8,
    matrimonios: [
      { nombres: "Manuel Paredes y Lorena Rivera", observaciones: "", hospedaje: "" },
      { nombres: "Pablo Cordero y Bernarda Moreno", observaciones: "4 niños pequeños", hospedaje: "" }
    ],
    solteros: [
      { nombres: "Sergio Quituisaca", observaciones: "", hospedaje: "" }
    ],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 9,
    matrimonios: [
      { nombres: "Roberto e Inés", observaciones: "1 niño pequeño", hospedaje: "" }
    ],
    solteros: [
      { nombres: "Joaquín Ortega", observaciones: "", hospedaje: "" },
      { nombres: "Joaquín Cordero", observaciones: "", hospedaje: "" }
    ],
    solteras: [
      { nombres: "Michelle Chitacapa", observaciones: "", hospedaje: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 10,
    matrimonios: [
      { nombres: "Julio Brito y Teresa Orellana", observaciones: "", hospedaje: "" },
      { nombres: "Omar Pinos y Priscila Fernandez", observaciones: "", hospedaje: "" }
    ],
    solteros: [
      { nombres: "Josue Malla", observaciones: "", hospedaje: "" },
      { nombres: "José David Cordero", observaciones: "", hospedaje: "" }
    ],
    solteras: [
      { nombres: "Daniela Inga", observaciones: "", hospedaje: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 11,
    matrimonios: [
      { nombres: "William Mogrovejo y Jenny", observaciones: "", hospedaje: "" },
      { nombres: "Marco Calle y Verónica", observaciones: "", hospedaje: "" }
    ],
    solteros: [
      { nombres: "Diego Murillo", observaciones: "", hospedaje: "" }
    ],
    solteras: [
      { nombres: "Sandra Rodas", observaciones: "", hospedaje: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 12,
    matrimonios: [
      { nombres: "Diego Roldán y Jenny Matute", observaciones: "", hospedaje: "" }
    ],
    solteros: [
      { nombres: "Emilia Cordero", observaciones: "", hospedaje: "" }
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
      { nombres: "Maritza Faican", observaciones: "con bebé", hospedaje: "" },
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
      { nombres: "Martha León", observaciones: "1 bebé", hospedaje: "" },
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
      { nombres: "Alberto Padilla y Bety", observaciones: "adultos mayores", hospedaje: "" }
    ],
    solteros: [],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 13,
    matrimonios: [
      { nombres: "Pablo León y Tatiana Peñaloza", observaciones: "con 2 niños de 3 y 1 año", hospedaje: "" }
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
      { nombres: "Xavier Domínguez y Maria Huachichullca", observaciones: "1 bebe", hospedaje: "" },
    ],
    solteros: [],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 19,
    matrimonios: [
      { nombres: "Emiliano y Anita", observaciones: "Adultos", hospedaje: "" },
      { nombres: "Paulo y Michelle", observaciones: "bebe de 1 año", hospedaje: "" },
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
      { nombres: "Felipe Luna y Diana Torres", observaciones: "Adultos y 1 niña", hospedaje: "" },
    ],
    solteros: [],
    solteras: [
      { nombres: "Nube Bustos", observaciones: "1 niño", hospedaje: "" }
    ]
  },
]
