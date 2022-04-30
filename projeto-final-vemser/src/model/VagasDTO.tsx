export interface VagasDTO {
    id: number;
    titulo?: string;
    status?: string;
    responsavel?: string;
    estado?: string;
    pcd?: boolean;
    dataAbertura?: string;
    cliente?: string;
    cidade?: string;
    analista?: string;

}

export interface VagasInicialDTO{
  pagina?:number ,
  paginas?: number,
  quantidade?: number,
  total?: number,
  vagas?: VagasDTO[],
}