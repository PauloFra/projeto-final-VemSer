import React from 'react'
import VagasJson from '../../Vagas.json' 
import '../../components/globalStyles/global.modules.css'
function Vagas() {
  const {vagas} = VagasJson
  console.log(vagas);
  
  return (
    <div  className='divContainerTable'>
      
      <table className='tableDefault'>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Cliente</th>
            <th>Status</th>
            <th>Responsavel</th>
            <th>estado</th>
            <th>data_abertura</th>
            <th>cidade</th>
            <th>analista</th>
            <th>pcd</th>
            <th className='centerTd'>Vincular Candidato</th>
          </tr>
        </thead>
        <tbody>
        {vagas.map((vaga)=>(
            <tr key={vaga.id_vaga}>
                <td>{vaga.titulo}</td>
                <td>{vaga.cliente}</td>
                <td>{vaga.status}</td>
                <td>{vaga.responsavel}</td>
                <td>{vaga.estado}</td>              
                <td>{vaga.data_abertura}</td>
                <td>{vaga.cidade}</td>
                <td>{vaga.analista}</td>
                <td>{
                  vaga.pcd ?'Sim':'Não'
                }</td> 
                <td className='centerTd'>
                  <button>Vincular</button>
                </td>             
              </tr>
              
          
          ))}  
         </tbody>     
      </table>
    </div>
  )
}

export default Vagas