export enum ParroquiaSlug {
  sanPablo = "sanPablo",
  sanJuanPabloII = "sanJuanPabloII",
  carmenGuzho = "carmenGuzho",
  quitachica = "quitachica"
}

export enum CasasConvivencia {
  Seminario = "Semoanrio",
  CasaBetania = "Casa Betania",
  QuintaLeonor = "Quinta Leonor",
  none = "Ninguno"

} 

export const allComunidades = [
  {
    parroquia: ParroquiaSlug.carmenGuzho,
    numComunidad: 1,
    matrimonios: [
      { nombres: "Manuel Chimbo y Rosario Farez", observaciones: "" }
    ],
    solteros: [
      { nombres: "David Cajamarca", observaciones: "" }
    ],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.carmenGuzho,
    numComunidad: 2,
    matrimonios: [
      { nombres: "Marco Pintado y Angélica Cajamarca", observaciones: "" },
      { nombres: "Diego Peñaloza y Andrea", observaciones: "" }
    ],
    solteros: [
      { nombres: "Francisco Ayala", observaciones: "" }
    ],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 3,
    matrimonios: [],
    solteros: [],
    solteras: [
      { nombres: "Mercedes de Tapia", observaciones: "" },
      { nombres: "Piedad Ochoa", observaciones: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 5,
    matrimonios: [
      { nombres: "Miguel Ávila y Elsa Ordóñez", observaciones: "" },
      { nombres: "Cornelio Romo y Ruth Urgilés", observaciones: "" }
    ],
    solteros: [],
    solteras: [
      { nombres: "Mirian Neira", observaciones: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 7,
    matrimonios: [
      { nombres: "Andrés Ortiz y Carla Zúñiga", observaciones: "" },
      { nombres: "Juan Narváez y María Fernanda Vidal", observaciones: "" }
    ],
    solteros: [],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 8,
    matrimonios: [
      { nombres: "Manuel Paredes y Lorena Rivera", observaciones: "" },
      { nombres: "Pablo Cordero y Bernarda Moreno", observaciones: "4 niños pequeños" }
    ],
    solteros: [
      { nombres: "Sergio Quituisaca", observaciones: "" }
    ],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 9,
    matrimonios: [
      { nombres: "Roberto e Inés", observaciones: "" }
    ],
    solteros: [
      { nombres: "Joaquín Ortega", observaciones: "" },
      { nombres: "Joaquín Cordero", observaciones: "" }
    ],
    solteras: [
      { nombres: "Michelle Chitacapa", observaciones: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 10,
    matrimonios: [
      { nombres: "Julio Brito y Teresa Orellana", observaciones: "" },
      { nombres: "Omar Pinos y Priscila Fernandez", observaciones: "" }
    ],
    solteros: [
      { nombres: "Josue Malla", observaciones: "" },
      { nombres: "José David Cordero", observaciones: "" }
    ],
    solteras: [
      { nombres: "Daniela Inga", observaciones: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 11,
    matrimonios: [
      { nombres: "William Mogrovejo y Jenny", observaciones: "" },
      { nombres: "Marco Calle y Verónica", observaciones: "" }
    ],
    solteros: [
      { nombres: "Diego Murillo", observaciones: "" }
    ],
    solteras: [
      { nombres: "Sandra Rodas", observaciones: "" }
    ]
  },
  {
    parroquia: "sanPablo",
    numComunidad: 12,
    matrimonios: [
      { nombres: "Diego Roldán y Jenny Matute", observaciones: "" }
    ],
    solteros: [
      { nombres: "Emilia Cordero", observaciones: "" }
    ],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 5,
    matrimonios: [
      { nombres: "Fabian Sinchi y Rosana Sinchi", observaciones: "" },
      { nombres: "Nelson Sacta y Veronica Muy", observaciones: "" }
    ],
    solteros: [],
    solteras: [
      { nombres: "Maritza Faican", observaciones: "con bebé" },
      { nombres: "Nancy Baculima", observaciones: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 10,
    matrimonios: [
      { nombres: "Marcelo y Tania", observaciones: "" }
    ],
    solteros: [
      { nombres: "Christian Otavalo", observaciones: "" }
    ],
    solteras: [
      { nombres: "Martha León", observaciones: "1 bebé" },
      { nombres: "Mishelle Peralta", observaciones: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 7,
    matrimonios: [
      { nombres: "Juan Carlos López y Gabriela Peñafiel", observaciones: "" },
      { nombres: "Fabián Cabrera y Dorys Vanegas", observaciones: "" }
    ],
    solteros: [],
    solteras: [
      { nombres: "Monserrat Valdez", observaciones: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 3,
    matrimonios: [
      { nombres: "Alberto Padilla y Bety", observaciones: "adultos mayores" }
    ],
    solteros: [],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 13,
    matrimonios: [
      { nombres: "Pablo León y Tatiana Peñaloza", observaciones: "con 2 niños de 3 y 1 año" }
    ],
    solteros: [],
    solteras: [
      { nombres: "Giselle Otavalo", observaciones: "" },
      { nombres: "Yolanda Guachichullca", observaciones: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 12,
    matrimonios: [
      { nombres: "Flavio Iñiguez y Fabiola Pacho", observaciones: "" },
      { nombres: "Víctor Tigre y Ana Lucía Amón", observaciones: "" }
    ],
    solteros: [],
    solteras: [
      { nombres: "Salomé Cabrera", observaciones: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 15,
    matrimonios: [
      { nombres: "Diego y Gaby", observaciones: "" },
      { nombres: "Angle y Patricia", observaciones: "" }
    ],
    solteros: [
      { nombres: "Jorge Guaman", observaciones: "" },
      { nombres: "Paul Arevalo", observaciones: "" }
    ],
    solteras: [
      { nombres: "Estefania", observaciones: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 18,
    matrimonios: [
      { nombres: "Marco y María", observaciones: "" },
      { nombres: "Marcial y Bety", observaciones: "" }
    ],
    solteros: [
      { nombres: "Carlitos", observaciones: "" }
    ],
    solteras: [
      { nombres: "Mayte", observaciones: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 4,
    matrimonios: [
      { nombres: "Luis Calle y Viviana", observaciones: "" }
    ],
    solteros: [],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.quitachica,
    numComunidad: 3,
    matrimonios: [
      { nombres: "Alfonso y Maria", observaciones: "" }
    ],
    solteros: [],
    solteras: [
      { nombres: "Paola Tenesaca", observaciones: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.quitachica,
    numComunidad: 2,
    matrimonios: [
      { nombres: "Claudio Duchi y Nancy Munoz", observaciones: "Todos no tienen transporte de tralado" },
      { nombres: "Narcisa Mora y Alex Cano", observaciones: "" }
    ],
    solteros: [
      { nombres: "Daniel Morocho", observaciones: "" }
    ],
    solteras: [
      { nombres: "Daniela Guarquila", observaciones: "" }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 11,
    matrimonios: [
      { nombres: "Fabián y Maritza", observaciones: "" },
    ],
    solteros: [],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 14,
    matrimonios: [
      { nombres: "Xavier Domínguez y Maria Huachichullca", observaciones: "1 bebe" },
    ],
    solteros: [],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 19,
    matrimonios: [
      { nombres: "Emiliano y Anita", observaciones: "Adultos" },
      { nombres: "Paulo y Michelle", observaciones: "bebe de 1 año" },
    ],
    solteros: [{
      nombres: "Jaime Loja", observaciones: ""
    }],
    solteras: []
  },
]


