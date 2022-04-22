import { createContext , useState} from 'react'
import api from '.././api'
type Props = {
    children: React.ReactNode;
  };

export const GetReducedContext = createContext({})

const GetReducedProvider= ({ children }: Props) => {
  
    const[listCandidates , setListCandidates] = useState()
  
    async function GetInReduced(page:number){
      try{  
        const {data} = await api.get(`/candidato/get-paginado?pagina=${page}&quantidadePorPagina=16`)
        setListCandidates(data)
      }
      catch(error){
          console.log(error);
      }
  }
    return (
    <GetReducedContext.Provider value={{
        GetInReduced,
        listCandidates
        }}>
        {children}
    </GetReducedContext.Provider>
  )
}

export default GetReducedProvider