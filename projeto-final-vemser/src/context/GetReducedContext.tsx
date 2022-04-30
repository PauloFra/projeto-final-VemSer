import { createContext, useState } from "react";
import api from ".././api";
type Props = {
  children: React.ReactNode;
};

type ContextProps = {
  GetInReduced: Function;
  listCandidates: object | undefined;
  setListCandidates: Function;
  listCandidatesAll: object | undefined;
  GetInReducedTotal: Function;
};

const initialState = {
  GetInReduced: () => {},
  listCandidates: [],
  setListCandidates: () => {},
  listCandidatesAll: [],
  GetInReducedTotal: () => {},
};

export const GetReducedContext = createContext<ContextProps>(initialState);

const GetReducedProvider = ({ children }: Props) => {
  const [listCandidates, setListCandidates] = useState<any>();
  const [listCandidatesAll, setListCandidatesAll] = useState<any>();

  async function GetInReduced(page: number, qtdPorPage: number) {
    try {
      const { data } = await api.get(
        `/candidato/get-paginado?pagina=${page}&quantidadePorPagina=${qtdPorPage}`
      );
      setListCandidates(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function GetInReducedTotal() {
    try {
      const { data } = await api.get(
        `/candidato/get-paginado?pagina=0&quantidadePorPagina=${listCandidates.total}`
      );
      setListCandidatesAll(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <GetReducedContext.Provider
      value={{
        GetInReduced,
        listCandidates,
        setListCandidates,
        listCandidatesAll,
        GetInReducedTotal,
      }}
    >
      {children}
    </GetReducedContext.Provider>
  );
};

export default GetReducedProvider;
