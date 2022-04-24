import { Values } from "./model/CandidatoDTO";
import moment from "moment";
export function defaultFunc() {}
export function prepareDataToInsert(values: any) {
  const valuesToPost = {
    bairro: values.bairro,
    cargo: values.cargo,
    cidade: values.cidade,
    cpf: values.cpf,
    dadosEscolares: [
      {
        dataFim: moment(values.dataFimCurso, "DD/MM/YYYY").format("YYYY-MM-DD"),
        dataInicio: moment(values.dataInicioCurso, "DD/MM/YYYY").format(
          "YYYY-MM-DD"
        ),
        descricao: values.descricaoDoCurso,
        instituicao: values.instituicao,
      },
    ],
    dataNascimento: moment(values.dataNascimento, "DD/MM/YYYY").format(
      "YYYY-MM-DD"
    ),
    experiencias: [
      {
        dataFim: moment(values.dataFimExperiencia, "DD/MM/YYYY").format(
          "YYYY-MM-DD"
        ),
        dataInicio: moment(values.dataInicioExperiencia, "DD/MM/YYYY").format(
          "YYYY-MM-DD"
        ),
        descricao: values.descricaoDoCargo,
        nomeEmpresa: values.nomeEmpresa,
      },
    ],
    logradouro: values.logradouro,
    nome: values.nome,
    numero: values.numero,
    senioridade: values.senioridade,
    telefone: values.telefone,
  };
  return valuesToPost;
}
