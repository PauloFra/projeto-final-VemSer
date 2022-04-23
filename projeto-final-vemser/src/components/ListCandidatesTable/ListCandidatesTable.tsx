import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { GetReducedContext } from '../../context/GetReducedContext'
import Loading from '../loading/Loading'
import * as C from '../../components/globalStyles/global.styles'

import {IoMdArrowRoundForward ,IoMdArrowRoundBack } from 'react-icons/io'
function ListCandidatesTable() {
  const {GetInReduced , listCandidates} = useContext(GetReducedContext)
  const [page , setPage] = useState<number>(0)
  useEffect(()=>{
    GetInReduced(page)
  },[page])

  if(!listCandidates){
    return <Loading />
  }
  const {candidatos , totalDePaginas}:any = listCandidates
  console.log(candidatos);
  const nextPage = (actionPage: string) => {
    if (actionPage === "+" && page < totalDePaginas - 1) {
      setPage(page + 1);
    }
    if (actionPage === "-" && page > 0) {
      setPage(page - 1);
    }
  };
  return (
    <>
    <C.TableCandidates>
         <C.TableHead>
          <C.TableTr>
              <C.TableTh>
                Nome
              </C.TableTh>
              <C.TableTh>
                Cargo
              </C.TableTh>
              <C.TableTh>
                Data de nascimento
              </C.TableTh>
              <C.TableTh>
                Senioridade
              </C.TableTh>
        </C.TableTr>
        </C.TableHead>
        <C.TableBody>
        {candidatos.map((candidato:any)=>(
          <C.TableTr key={candidato.idCandidato}>
               <C.TableTd>
                {candidato.idCandidato}
              </C.TableTd>
              <C.TableTd>
              {candidato.cargo}
              </C.TableTd>
              <C.TableTd>
                {candidato.dataNascimento}
              </C.TableTd>
              <C.TableTd>
              {candidato.senioridade}
              </C.TableTd>
          </C.TableTr>
          
        ))}
        </C.TableBody>
    </C.TableCandidates>
    <div> 
      <button onClick={() => nextPage("-")}> <IoMdArrowRoundBack/> </button>
    
      <button onClick={() => nextPage("+")}><IoMdArrowRoundForward/> </button>
    </div>
    </>
  )
}

export default ListCandidatesTable