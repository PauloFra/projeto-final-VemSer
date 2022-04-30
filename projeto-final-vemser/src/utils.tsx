import { CandidatoDTO } from "./model/CandidatoDTO";
import * as Yup from "yup";
import { ExperienciaDTO } from "./model/ExperienciaDTO";
import moment from "moment";
import { DadosEscolaresDTO } from "./model/DadosEscolaresDTO";

type dataDTO = {
  value: string | undefined;
};

export const zeroLeft = (num: number) => {
  return num < 10 ? `0${num}` : num;
};
export const formatDateToApi = (value: any) => {
  return moment(value, "DD/MM/YYYY").format("YYYY-MM-DD");
};
export const formatDateToUser = (value: any) => {
  return moment(value, "YYYY-MM-DD").format("DD/MM/YYYY");
};
export const BottomPage = () => {
  return window.scrollTo(0, 1000);
};
// export function prepareDataToInsert(values: any) {
//   const valuesToPost = {
//     bairro: values.bairro,
//     cargo: values.cargo,
//     cidade: values.cidade,
//     cpf: values.cpf,
//     dadosEscolares: [
//       {
//         dataFim: moment(values.dataFimCurso, "DD/MM/YYYY").format("YYYY-MM-DD"),
//         dataInicio: moment(values.dataInicioCurso, "DD/MM/YYYY").format(
//           "YYYY-MM-DD"
//         ),
//         descricao: values.descricaoDoCurso,
//         instituicao: values.instituicao,
//       },
//     ],
//     dataNascimento: moment(values.dataNascimento, "DD/MM/YYYY").format(
//       "YYYY-MM-DD"
//     ),
//     experiencias: [
//       {
//         dataFim: moment(values.dataFimExperiencia, "DD/MM/YYYY").format(
//           "YYYY-MM-DD"
//         ),
//         dataInicio: moment(values.dataInicioExperiencia, "DD/MM/YYYY").format(
//           "YYYY-MM-DD"
//         ),
//         descricao: values.descricaoDoCargo,
//         nomeEmpresa: values.nomeEmpresa,
//       },

//     ],
//     logradouro: values.logradouro,
//     nome: values.nome,
//     numero: values.numero,
//     senioridade: values.senioridade,
//     telefone: values.telefone,
//   };

// export function PrepareDataFromGet(candidatoForUpdate: any) {
//   const NewDates = {
//     fileInput: null,
//     nome: candidatoForUpdate.nome,
//     cpf: candidatoForUpdate.cpf,
//     dataNascimento: moment(
//       candidatoForUpdate.dataNascimento,
//       "YYYY-MM-DD"
//     ).format("DD/MM/YYYY"),
//     logradouro: candidatoForUpdate.logradouro,
//     cidade: candidatoForUpdate.cidade,
//     bairro: candidatoForUpdate.bairro,
//     telefone: candidatoForUpdate.telefone,
//     numero: candidatoForUpdate.numero,
//     cargo: candidatoForUpdate.cargo,
//     senioridade: candidatoForUpdate.senioridade,

//     instituicao: candidatoForUpdate.dadosEscolares[0].instituicao,
//     descricaoDoCurso: candidatoForUpdate.dadosEscolares[0].descricao,
//     dataInicioCurso: moment(
//       candidatoForUpdate.dadosEscolares[0].dataInicio,
//       "YYYY-MM-DD"
//     ).format("DD/MM/YYYY"),
//     dataFimCurso: moment(
//       candidatoForUpdate.dadosEscolares[0].dataFim,
//       "YYYY-MM-DD"
//     ).format("DD/MM/YYYY"),

//     nomeEmpresa: candidatoForUpdate.experiencias[0].nomeEmpresa,
//     descricaoDoCargo: candidatoForUpdate.experiencias[0].descricao,
//     dataInicioExperiencia: moment(
//       candidatoForUpdate.experiencias[0].dataInicio,
//       "YYYY-MM-DD"
//     ).format("DD/MM/YYYY"),
//     trabalhandoAtualmente:
//       candidatoForUpdate.experiencias[0].trabalhandoAtualmente,
//     dataFimExperiencia: moment(
//       candidatoForUpdate.experiencias[0].dataFim,
//       "YYYY-MM-DD"
//     ).format("DD/MM/YYYY"),
//   };
//   return NewDates;
// }

export const SingupSchema = Yup.object().shape({
  nome: Yup.string().required("Preencha o campo corretamente!"),
  cpf: Yup.string().required("Preencha o campo corretamente!"),
  dataNascimento: Yup.string().required("Preencha o campo corretamente!"),
  logradouro: Yup.string().required("Preencha o campo corretamente!"),
  cidade: Yup.string().required("Preencha o campo corretamente!"),
  bairro: Yup.string().required("Preencha o campo corretamente!"),
  telefone: Yup.string().required("Preencha o campo corretamente!"),
  numero: Yup.string().required("Preencha o campo corretamente!"),
  cargo: Yup.string().required("Preencha o campo corretamente!"),
  senioridade: Yup.string().required("Preencha o campo corretamente!"),
});

export function prepareDataToInsert(values: CandidatoDTO) {
  values.dataNascimento = formatDateToApi(values.dataNascimento);
  if (values.experiencias && values.experiencias.length > 0) {
    values.experiencias.map((experiencia: ExperienciaDTO) => {
      experiencia.dataInicio = formatDateToApi(experiencia.dataInicio);
      experiencia.dataFim = formatDateToApi(experiencia.dataFim);
    });
  }
  if (values.dadosEscolares && values.dadosEscolares.length > 0) {
    values.dadosEscolares.map((dadoEscolar: DadosEscolaresDTO) => {
      dadoEscolar.dataInicio = formatDateToApi(dadoEscolar.dataInicio);
      dadoEscolar.dataFim = formatDateToApi(dadoEscolar.dataFim);
    });
  }
}

export function prepareDateToUser(values: CandidatoDTO) {
  values.dataNascimento = formatDateToUser(values.dataNascimento);
  if (values.experiencias && values.experiencias.length > 0) {
    values.experiencias.map((experiencia: ExperienciaDTO) => {
      experiencia.dataInicio = formatDateToUser(experiencia.dataInicio);
      experiencia.dataFim = formatDateToUser(experiencia.dataFim);
    });
  }

  if (values.dadosEscolares && values.dadosEscolares.length > 0) {
    values.dadosEscolares.map((dadoEscolar: DadosEscolaresDTO) => {
      dadoEscolar.dataInicio = formatDateToUser(dadoEscolar.dataInicio);
      dadoEscolar.dataFim = formatDateToUser(dadoEscolar.dataFim);
    });
  }
  return values;
}
