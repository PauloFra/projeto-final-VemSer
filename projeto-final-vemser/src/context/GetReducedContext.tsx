import { createContext, useEffect, useState } from "react";
import api from ".././api";
type Props = {
  children: React.ReactNode;
};

type ContextProps = {
  GetInReduced: Function;
  listCandidates: object | undefined;
  setListCandidates:Function;
};

const initialState = {
  GetInReduced: () => {},
  listCandidates: [],
  setListCandidates: () => {}
};

export const GetReducedContext = createContext<ContextProps>(initialState);

const GetReducedProvider = ({ children }: Props) => {
  const [listCandidates, setListCandidates] = useState<any>();

  async function GetInReduced(page: number , qtdPorPage:number) {

    try {
      const { data } = await api.get(
        `/candidato/get-paginado?pagina=${page}&quantidadePorPagina=${qtdPorPage}`
      );
      setListCandidates(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <GetReducedContext.Provider
      value={{
        GetInReduced,
        listCandidates,
        setListCandidates
      }}
    >
      {children}
    </GetReducedContext.Provider>
  );
};

export default GetReducedProvider;
