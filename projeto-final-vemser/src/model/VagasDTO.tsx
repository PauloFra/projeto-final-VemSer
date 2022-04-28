export interface VagasDTO {
  vagas: {
    id: number;
    titulo: string;
    status: string;
    responsavel: string;
    estado: string;
    dataAbertura: string;
    cliente: string;
    cidade: string;
    analista: string;
  }[];
}
