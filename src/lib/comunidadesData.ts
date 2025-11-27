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
  ricaurte = "Ricaurte",
  catequistas = "Catequistas"
}

export enum CasasConvivencia {
  // todas = "Todas las Casas",
  seminario = "Seminario",
  casaBetania = "Casa Betania",
  quintaLeonor = "Quinta Leonor",
  zumbahuayco = "Zumbahuayco",
  none = "Ninguno"
} 

export const catequistasData = [
  {
    nombres: "Rodrigo y Eliana",
    tipo: "matrimonio",
    observaciones: "",
    hospedaje: CasasConvivencia.zumbahuayco 
  },
  {
    nombres: "Nelson y Jenny",
    tipo: "matrimonio",
    observaciones: "",
    hospedaje: CasasConvivencia.zumbahuayco 
  },
  {
    nombres: "Santiago Cordero y Noni",
    tipo: "matrimonio",
    observaciones: "",
    hospedaje: CasasConvivencia.zumbahuayco 
  },
  {
    nombres: "Felipe Moreno",
    tipo: "soltero",
    observaciones: "Habitación matrimonial",
    hospedaje: CasasConvivencia.zumbahuayco 
  },
]

export const allComunidades: Comunidad[] = [
  {
    parroquia: ParroquiaSlug.carmenGuzho,
    numComunidad: 1,
    matrimonios: [
      { nombres: "Manuel Chimbo y Rosario Farez", observaciones: "", hospedaje: CasasConvivencia.seminario }
    ],
    solteros: [
      { nombres: "David Cajamarca", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco }
    ],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.carmenGuzho,
    numComunidad: 2,
    matrimonios: [
      { nombres: "Marco Pintado y Angélica Cajamarca", observaciones: "", hospedaje: CasasConvivencia.casaBetania },
      { nombres: "Diego Peñaloza y Andrea", observaciones: "", hospedaje: CasasConvivencia.seminario }
    ],
    solteros: [
      { nombres: "Francisco Ayala", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco }
    ],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 3,
    matrimonios: [],
    solteros: [],
    solteras: [
      { nombres: "Mercedes de Tapia", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco },
      { nombres: "Piedad Ochoa", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 5,
    matrimonios: [
      { nombres: "Miguel Ávila y Elsa Ordóñez", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco },
      { nombres: "Cornelio Romo y Ruth Urgilés", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco }
    ],
    solteros: [],
    solteras: [
      { nombres: "Miriam Neira", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 7,
    matrimonios: [
      { nombres: "Andrés Ortiz y Carla Zúñiga", observaciones: "Embarazada - 1° piso", hospedaje: CasasConvivencia.seminario },
      { nombres: "Juan Narváez y María Fernanda Vidal", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco },
      { nombres: "Marco Vásquez y Eulalia Padrón", observaciones: "", hospedaje: CasasConvivencia.casaBetania }
      
    ],
    solteros: [],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 8,
    matrimonios: [
      { nombres: "Manuel Paredes y Lorena Rivera", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco },
      { nombres: "Pablo Cordero y Bernarda Moreno", observaciones: "3 niños pequeños", hospedaje: CasasConvivencia.seminario }
    ],
    solteros: [
      { nombres: "Sergio Quituisaca", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco }
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
      { nombres: "Joaquín Ortega", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco },
      { nombres: "Joaquín Cordero", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco }
    ],
    solteras: [
      { nombres: "Michelle Chitacapa", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 10,
    matrimonios: [
      { nombres: "Julio Brito y Teresa Orellana", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco },
      { nombres: "Omar Pinos y Priscila Fernandez", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco }
    ],
    solteros: [
      { nombres: "Josue Malla", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco },
      { nombres: "José David Cordero", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco }
    ],
    solteras: [
      { nombres: "Daniela Inga", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 11,
    matrimonios: [
      { nombres: "William Mogrovejo y Jenny", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco },
      { nombres: "Marco Calle y Verónica", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco }
    ],
    solteros: [
      { nombres: "Diego Murillo", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco }
    ],
    solteras: [
      { nombres: "Sandra Rodas", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 12,
    matrimonios: [
      { nombres: "Diego Roldán y Jenny Matute", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco },
      { nombres: "Santiago Espinoza y Diana Santander", observaciones: "", hospedaje: CasasConvivencia.casaBetania },
      { nombres: "Jonathan Matute y Eliana Molina", observaciones: "", hospedaje: CasasConvivencia.casaBetania }
    ],
    solteros: [
      { nombres: "Emilia Cordero", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco }
    ],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 6,
    matrimonios: [
      { nombres: "Alex Ávila y Eugenia", observaciones: "", hospedaje: CasasConvivencia.seminario },
    ],
    solteros: [
    ],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 5,
    matrimonios: [
      { nombres: "Nelson Sacta y Veronica Muy", observaciones: "", hospedaje: CasasConvivencia.casaBetania }
    ],
    solteros: [],
    solteras: [
      { nombres: "Maritza Faican", observaciones: "con bebé", hospedaje: CasasConvivencia.seminario },
      { nombres: "Nancy Baculima", observaciones: "", hospedaje: CasasConvivencia.casaBetania }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 10,
    matrimonios: [
      { nombres: "Marcelo y Tania", observaciones: "", hospedaje: CasasConvivencia.seminario }
    ],
    solteros: [
      { nombres: "Christian Otavalo", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco }
    ],
    solteras: [
      { nombres: "Martha León", observaciones: "1 bebé", hospedaje: CasasConvivencia.seminario },
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 7,
    matrimonios: [
      { nombres: "Juan C. López y Gabriela Peñafiel", observaciones: "", hospedaje: CasasConvivencia.seminario },
      { nombres: "Fabián Cabrera y Doris Vanegas", observaciones: "", hospedaje: CasasConvivencia.casaBetania }
    ],
    solteros: [],
    solteras: [
      { nombres: "Monserrat Valdez", observaciones: "", hospedaje: CasasConvivencia.casaBetania }
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
      { nombres: "Giselle Otavalo", observaciones: "", hospedaje: CasasConvivencia.casaBetania },
      { nombres: "Yolanda Guachichullca", observaciones: "", hospedaje: CasasConvivencia.casaBetania }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 12,
    matrimonios: [
      { nombres: "Flavio Iñiguez y Fabiola Pacho", observaciones: "", hospedaje: CasasConvivencia.casaBetania },
      { nombres: "Víctor Tigre y Ana Lucía Amón", observaciones: "", hospedaje: CasasConvivencia.seminario }
    ],
    solteros: [],
    solteras: [
      { nombres: "Salomé Cabrera", observaciones: "", hospedaje: CasasConvivencia.casaBetania }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 15,
    matrimonios: [
      { nombres: "Diego y Gaby", observaciones: "", hospedaje: CasasConvivencia.casaBetania },
      { nombres: "Angel y Patricia", observaciones: "", hospedaje: CasasConvivencia.casaBetania }
    ],
    solteros: [
      { nombres: "Jorge Guaman", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco },
      { nombres: "Paul Arevalo", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco }
    ],
    solteras: [
      { nombres: "EstefanÍa", observaciones: "", hospedaje: CasasConvivencia.casaBetania }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 18,
    matrimonios: [
      { nombres: "Marco Chitacapa y María Álvarez", observaciones: "", hospedaje: CasasConvivencia.casaBetania },
    ],
    solteros: [
      { nombres: "Carlos Méndez", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco }
    ],
    solteras: [
      { nombres: "Mayte Nuñez", observaciones: "", hospedaje: CasasConvivencia.seminario }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 4,
    matrimonios: [
      { nombres: "Luis Calle y Viviana", observaciones: "", hospedaje: CasasConvivencia.casaBetania }
    ],
    solteros: [],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.quitachica,
    numComunidad: 3,
    matrimonios: [
      { nombres: "Alfonso y Maria", observaciones: "", hospedaje: CasasConvivencia.seminario }
    ],
    solteros: [],
    solteras: [
      { nombres: "Paola Tenesaca", observaciones: "", hospedaje: CasasConvivencia.seminario }
    ]
  },
  {
    parroquia: ParroquiaSlug.quitachica,
    numComunidad: 2,
    matrimonios: [
      { nombres: "Claudio Duchi y Nancy Munoz", observaciones: "Todos no tienen transporte de tralado", hospedaje: CasasConvivencia.casaBetania },
      { nombres: "Alex Cano y Narcisa Mora", observaciones: "", hospedaje: CasasConvivencia.seminario }
    ],
    solteros: [
      { nombres: "Daniel Morocho", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco }
    ],
    solteras: [
      { nombres: "Daniela Guarquila", observaciones: "", hospedaje: CasasConvivencia.seminario }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 11,
    matrimonios: [
      { nombres: "Fabián y Maritza", observaciones: "", hospedaje: CasasConvivencia.casaBetania },
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
    solteras: [
    { nombres: "Verónica Bacuilima", observaciones: "", hospedaje: CasasConvivencia.seminario },
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 19,
    matrimonios: [
      { nombres: "Emiliano y Anita", observaciones: "Adultos", hospedaje: CasasConvivencia.seminario },
      { nombres: "Paulo y Michelle", observaciones: "bebe de 1 año", hospedaje: CasasConvivencia.seminario },
    ],
    solteros: [{
      nombres: "Jaime Loja", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco
    }],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.monay,
    numComunidad: 1,
    matrimonios: [
      { nombres: "Carlos Quille y Lourdes Guaman", observaciones: "1 niña", hospedaje: CasasConvivencia.seminario },
    ],
    solteros: [
      { nombres: "David Torres", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco },
    ],
    solteras: [
      { nombres: "Julia Amón", observaciones: "Adulto", hospedaje: CasasConvivencia.seminario },
    ]
  },
  {
    parroquia: ParroquiaSlug.monay,
    numComunidad: 2,
    matrimonios: [
      { nombres: "Felipe Luna y Diana Torres", observaciones: "", hospedaje: CasasConvivencia.casaBetania },
    ],
    solteros: [],
    solteras: [
      { nombres: "Nube Bustos", observaciones: "1 niño", hospedaje: CasasConvivencia.seminario }
    ]
  },
  {
    parroquia: ParroquiaSlug.ricaurte,
    numComunidad: 2,
    matrimonios: [
      { nombres: "Hector y Lola", observaciones: "", hospedaje: CasasConvivencia.seminario },
      { nombres: "Carlos y Caty", observaciones: "", hospedaje: CasasConvivencia.seminario },
    ],
    solteros: [],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 16,
    matrimonios: [],
    solteros: [
      { nombres: "David Román", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco }
    ],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.ricaurte,
    numComunidad: 3,
    matrimonios: [],
    solteros: [
      { nombres: "Mateo Lituma", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco }
    ],
    solteras: [
      { nombres: "Virginia Guamán", observaciones: "", hospedaje: CasasConvivencia.seminario }
    ]
  },
  {
    parroquia: ParroquiaSlug.carmenGuzho,
    numComunidad: 3,
    matrimonios: [
      { nombres: "Christian  Yunga y Maria Carchipulla", observaciones: "", hospedaje: CasasConvivencia.casaBetania }

    ],
    solteros: [
      { nombres: "Juan P. Yupanqui", observaciones: "", hospedaje: CasasConvivencia.zumbahuayco }
    ],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 9,
    matrimonios: [
      { nombres: "Geovanny y Fanny", observaciones: "", hospedaje: CasasConvivencia.seminario }
    ],
    solteros: [
      { nombres: "Rubén Guzhñay", observaciones: "", hospedaje: CasasConvivencia.seminario }
    ],
    solteras: [
      { nombres: "Liz Faicán", observaciones: "problemas de salud", hospedaje: CasasConvivencia.seminario },
      { nombres: "Carmen Pérez", observaciones: "problemas de salud", hospedaje: CasasConvivencia.seminario }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 17,
    matrimonios: [],
    solteros: [
      { nombres: "Jhonny Pacurucu", observaciones: "", hospedaje: CasasConvivencia.seminario }
    ],
    solteras: [
      { nombres: "Mónica Ortega", observaciones: "", hospedaje: CasasConvivencia.casaBetania },
    ]
  },
  {
    parroquia: ParroquiaSlug.ricaurte,
    numComunidad: 1,
    matrimonios: [
      { nombres: "David Quichimbo y Mónica Sacta", observaciones: "1 hija", hospedaje: CasasConvivencia.seminario }
    ],
    solteros: [],
    solteras: []
  },
]


