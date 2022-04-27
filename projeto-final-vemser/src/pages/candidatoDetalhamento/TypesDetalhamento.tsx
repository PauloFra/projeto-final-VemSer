export type PropsExperiencia = {
  dataFim: string;
  dataInicio: string;
  descricao: string;
  idExperiencia: number;
  nomeEmpresa: string;
};

export type PropsDados = {
  dadosEscolares: [
    dataFim: string,
    dataInicio: string,
    descricao: any,
    idDadosEscolares: number,
    instituicao: string
  ];
};
