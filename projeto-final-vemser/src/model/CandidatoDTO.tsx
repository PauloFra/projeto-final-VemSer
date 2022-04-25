import { ExperienciaDTO } from "./ExperienciaDTO";

export interface CandidatoDTO {
  cpf: string;
  nome: string;
  dataNascimento: string;
  logradouro: string;
  cidade: string;
  bairro: string;
  telefone: string;
  numero: number;
  cargo: string;
  senioridade: string;
  experiencias?: [ExperienciaDTO];
  dadosEscolares?: any; 
}

