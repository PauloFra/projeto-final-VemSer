import { VagasDTO } from "./VagasDTO";
export interface TotalVagasDTO {
  total: {
    pagina: number;
    paginas: number;
    quantidade: number;
    total: number;
    vagas: VagasDTO;
  };
}
