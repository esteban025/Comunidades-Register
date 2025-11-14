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
      observaciones: [...comu.matrimonios, ...comu.solteros, ...comu.solteras].flatMap( entry => entry.observaciones.trim() !== "" ? [{nombres: entry.nombres, observaciones: entry.observaciones}] : [])
    }))

  return {
    comunidades: comunidades,
    totalMatrimonios: comunidades.reduce((acc,curr) => acc + curr.matrimonios.length, 0),
    totalSolteros: comunidades.reduce((acc, curr) => acc + curr.solteros.length, 0),
    totalSolteras: comunidades.reduce((acc, curr) => acc + curr.solteras.length, 0),
    totalHermanos: comunidades.reduce((acc, curr) => acc + curr.total, 0)
  };
}