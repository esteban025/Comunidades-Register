export enum ParroquiaSlug {
  sanPablo = "sanPablo",
  sanJuanPabloII = "sanJuanPabloII",
  carmenGuzho = "carmenGuzho",
  quitachica = "quitachica",
  monay = "monay"
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
      { nombres: "Manuel Chimbo y Rosario Farez", observaciones: "", hospedaje: CasasConvivencia.Seminario }
    ],
    solteros: [
      { nombres: "David Cajamarca", observaciones: "", hospedaje: CasasConvivencia.QuintaLeonor }
    ],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.carmenGuzho,
    numComunidad: 2,
    matrimonios: [
      { nombres: "Marco Pintado y Angélica Cajamarca", observaciones: "", hospedaje: CasasConvivencia.CasaBetania },
      { nombres: "Diego Peñaloza y Andrea", observaciones: "", hospedaje: CasasConvivencia.Seminario }
    ],
    solteros: [
      { nombres: "Francisco Ayala", observaciones: "", hospedaje: CasasConvivencia.QuintaLeonor }
    ],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 3,
    matrimonios: [],
    solteros: [],
    solteras: [
      { nombres: "Mercedes de Tapia", observaciones: "", hospedaje: CasasConvivencia.CasaBetania },
      { nombres: "Piedad Ochoa", observaciones: "", hospedaje: CasasConvivencia.CasaBetania }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 5,
    matrimonios: [
      { nombres: "Miguel Ávila y Elsa Ordóñez", observaciones: "", hospedaje: CasasConvivencia.Seminario },
      { nombres: "Cornelio Romo y Ruth Urgilés", observaciones: "", hospedaje: CasasConvivencia.QuintaLeonor }
    ],
    solteros: [],
    solteras: [
      { nombres: "Mirian Neira", observaciones: "", hospedaje: CasasConvivencia.CasaBetania }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 7,
    matrimonios: [
      { nombres: "Andrés Ortiz y Carla Zúñiga", observaciones: "", hospedaje: CasasConvivencia.Seminario },
      { nombres: "Juan Narváez y María Fernanda Vidal", observaciones: "", hospedaje: CasasConvivencia.CasaBetania }
    ],
    solteros: [],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 8,
    matrimonios: [
      { nombres: "Manuel Paredes y Lorena Rivera", observaciones: "", hospedaje: CasasConvivencia.QuintaLeonor },
      { nombres: "Pablo Cordero y Bernarda Moreno", observaciones: "4 niños pequeños", hospedaje: CasasConvivencia.Seminario }
    ],
    solteros: [
      { nombres: "Sergio Quituisaca", observaciones: "", hospedaje: CasasConvivencia.CasaBetania }
    ],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 9,
    matrimonios: [
      { nombres: "Roberto e Inés", observaciones: "1 niño pequeño", hospedaje: CasasConvivencia.Seminario }
    ],
    solteros: [
      { nombres: "Joaquín Ortega", observaciones: "", hospedaje: CasasConvivencia.QuintaLeonor },
      { nombres: "Joaquín Cordero", observaciones: "", hospedaje: CasasConvivencia.QuintaLeonor }
    ],
    solteras: [
      { nombres: "Michelle Chitacapa", observaciones: "", hospedaje: CasasConvivencia.CasaBetania }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 10,
    matrimonios: [
      { nombres: "Julio Brito y Teresa Orellana", observaciones: "", hospedaje: CasasConvivencia.CasaBetania },
      { nombres: "Omar Pinos y Priscila Fernandez", observaciones: "", hospedaje: CasasConvivencia.Seminario }
    ],
    solteros: [
      { nombres: "Josue Malla", observaciones: "", hospedaje: CasasConvivencia.QuintaLeonor },
      { nombres: "José David Cordero", observaciones: "", hospedaje: CasasConvivencia.QuintaLeonor }
    ],
    solteras: [
      { nombres: "Daniela Inga", observaciones: "", hospedaje: CasasConvivencia.CasaBetania }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 11,
    matrimonios: [
      { nombres: "William Mogrovejo y Jenny", observaciones: "", hospedaje: CasasConvivencia.Seminario },
      { nombres: "Marco Calle y Verónica", observaciones: "", hospedaje: CasasConvivencia.QuintaLeonor }
    ],
    solteros: [
      { nombres: "Diego Murillo", observaciones: "", hospedaje: CasasConvivencia.Seminario }
    ],
    solteras: [
      { nombres: "Sandra Rodas", observaciones: "", hospedaje: CasasConvivencia.CasaBetania }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanPablo,
    numComunidad: 12,
    matrimonios: [
      { nombres: "Diego Roldán y Jenny Matute", observaciones: "", hospedaje: CasasConvivencia.CasaBetania }
    ],
    solteros: [
      { nombres: "Emilia Cordero", observaciones: "", hospedaje: CasasConvivencia.CasaBetania }
    ],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 5,
    matrimonios: [
      { nombres: "Fabian Sinchi y Rosana Sinchi", observaciones: "", hospedaje: CasasConvivencia.Seminario },
      { nombres: "Nelson Sacta y Veronica Muy", observaciones: "", hospedaje: CasasConvivencia.QuintaLeonor }
    ],
    solteros: [],
    solteras: [
      { nombres: "Maritza Faican", observaciones: "con bebé", hospedaje: CasasConvivencia.CasaBetania },
      { nombres: "Nancy Baculima", observaciones: "", hospedaje: CasasConvivencia.CasaBetania }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 10,
    matrimonios: [
      { nombres: "Marcelo y Tania", observaciones: "", hospedaje: CasasConvivencia.CasaBetania }
    ],
    solteros: [
      { nombres: "Christian Otavalo", observaciones: "", hospedaje: CasasConvivencia.Seminario }
    ],
    solteras: [
      { nombres: "Martha León", observaciones: "1 bebé", hospedaje: CasasConvivencia.CasaBetania },
      { nombres: "Mishelle Peralta", observaciones: "", hospedaje: CasasConvivencia.CasaBetania }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 7,
    matrimonios: [
      { nombres: "Juan Carlos López y Gabriela Peñafiel", observaciones: "", hospedaje: CasasConvivencia.QuintaLeonor },
      { nombres: "Fabián Cabrera y Dorys Vanegas", observaciones: "", hospedaje: CasasConvivencia.Seminario }
    ],
    solteros: [],
    solteras: [
      { nombres: "Monserrat Valdez", observaciones: "", hospedaje: CasasConvivencia.CasaBetania }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 3,
    matrimonios: [
      { nombres: "Alberto Padilla y Bety", observaciones: "adultos mayores", hospedaje: CasasConvivencia.CasaBetania }
    ],
    solteros: [],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 13,
    matrimonios: [
      { nombres: "Pablo León y Tatiana Peñaloza", observaciones: "con 2 niños de 3 y 1 año", hospedaje: CasasConvivencia.Seminario }
    ],
    solteros: [],
    solteras: [
      { nombres: "Giselle Otavalo", observaciones: "", hospedaje: CasasConvivencia.CasaBetania },
      { nombres: "Yolanda Guachichullca", observaciones: "", hospedaje: CasasConvivencia.CasaBetania }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 12,
    matrimonios: [
      { nombres: "Flavio Iñiguez y Fabiola Pacho", observaciones: "", hospedaje: CasasConvivencia.QuintaLeonor },
      { nombres: "Víctor Tigre y Ana Lucía Amón", observaciones: "", hospedaje: CasasConvivencia.Seminario }
    ],
    solteros: [],
    solteras: [
      { nombres: "Salomé Cabrera", observaciones: "", hospedaje: CasasConvivencia.CasaBetania }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 15,
    matrimonios: [
      { nombres: "Diego y Gaby", observaciones: "", hospedaje: CasasConvivencia.CasaBetania },
      { nombres: "Angle y Patricia", observaciones: "", hospedaje: CasasConvivencia.Seminario }
    ],
    solteros: [
      { nombres: "Jorge Guaman", observaciones: "", hospedaje: CasasConvivencia.QuintaLeonor },
      { nombres: "Paul Arevalo", observaciones: "", hospedaje: CasasConvivencia.QuintaLeonor }
    ],
    solteras: [
      { nombres: "Estefania", observaciones: "", hospedaje: CasasConvivencia.CasaBetania }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 18,
    matrimonios: [
      { nombres: "Marco y María", observaciones: "", hospedaje: CasasConvivencia.Seminario },
      { nombres: "Marcial y Bety", observaciones: "", hospedaje: CasasConvivencia.QuintaLeonor }
    ],
    solteros: [
      { nombres: "Carlitos", observaciones: "", hospedaje: CasasConvivencia.Seminario }
    ],
    solteras: [
      { nombres: "Mayte", observaciones: "", hospedaje: CasasConvivencia.CasaBetania }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 4,
    matrimonios: [
      { nombres: "Luis Calle y Viviana", observaciones: "", hospedaje: CasasConvivencia.CasaBetania }
    ],
    solteros: [],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.quitachica,
    numComunidad: 3,
    matrimonios: [
      { nombres: "Alfonso y Maria", observaciones: "", hospedaje: CasasConvivencia.Seminario }
    ],
    solteros: [],
    solteras: [
      { nombres: "Paola Tenesaca", observaciones: "", hospedaje: CasasConvivencia.CasaBetania }
    ]
  },
  {
    parroquia: ParroquiaSlug.quitachica,
    numComunidad: 2,
    matrimonios: [
      { nombres: "Claudio Duchi y Nancy Munoz", observaciones: "Todos no tienen transporte de tralado", hospedaje: CasasConvivencia.QuintaLeonor },
      { nombres: "Narcisa Mora y Alex Cano", observaciones: "", hospedaje: CasasConvivencia.Seminario }
    ],
    solteros: [
      { nombres: "Daniel Morocho", observaciones: "", hospedaje: CasasConvivencia.QuintaLeonor }
    ],
    solteras: [
      { nombres: "Daniela Guarquila", observaciones: "", hospedaje: CasasConvivencia.CasaBetania }
    ]
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 11,
    matrimonios: [
      { nombres: "Fabián y Maritza", observaciones: "", hospedaje: CasasConvivencia.Seminario },
    ],
    solteros: [],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 14,
    matrimonios: [
      { nombres: "Xavier Domínguez y Maria Huachichullca", observaciones: "1 bebe", hospedaje: CasasConvivencia.CasaBetania },
    ],
    solteros: [],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.sanJuanPabloII,
    numComunidad: 19,
    matrimonios: [
      { nombres: "Emiliano y Anita", observaciones: "Adultos", hospedaje: CasasConvivencia.QuintaLeonor },
      { nombres: "Paulo y Michelle", observaciones: "bebe de 1 año", hospedaje: CasasConvivencia.Seminario },
    ],
    solteros: [{
      nombres: "Jaime Loja", observaciones: "", hospedaje: CasasConvivencia.Seminario
    }],
    solteras: []
  },
  {
    parroquia: ParroquiaSlug.monay,
    numComunidad: 1,
    matrimonios: [
      { nombres: "Carlos Quille y Lourdes Guaman", observaciones: "Adultos y 1 niña", hospedaje: CasasConvivencia.CasaBetania },
    ],
    solteros: [
      { nombres: "José Santos", observaciones: "Adulto", hospedaje: CasasConvivencia.QuintaLeonor },
      { nombres: "Julia Amón", observaciones: "Adulto", hospedaje: CasasConvivencia.CasaBetania },
      { nombres: "David Torres", observaciones: "Adulto", hospedaje: CasasConvivencia.Seminario },
    ],
    solteras: []
  },
]


