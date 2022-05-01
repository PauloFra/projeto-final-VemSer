import { CandidatoDTO } from "./model/CandidatoDTO";
import * as Yup from "yup";
import { ExperienciaDTO } from "./model/ExperienciaDTO";
import moment from "moment";
import { DadosEscolaresDTO } from "./model/DadosEscolaresDTO";

export const zeroLeft = (num: number) => {
  return num < 10 ? `0${num}` : num;
};
export const formatDateToApi = (value: string | undefined) => {
  return moment(value, "DD/MM/YYYY").format("YYYY-MM-DD");
};
export const formatDateToUser = (value:  string | undefined) => {
  return moment(value, "YYYY-MM-DD").format("DD/MM/YYYY");
};
export const BottomPage = () => {
  return window.scrollTo(0, 1000);
};
const getFormatedDate = (currentDate:string) => {
  return currentDate.split('/').reverse().join('-');
 }
export const SingupSchema = Yup.object().shape({
  nome: Yup.string().required("Preencha o campo corretamente!"),
  cpf: Yup.string().required("Preencha o campo corretamente!"),
  dataNascimento: 
  Yup.string()
  .required("Data de Nascimento Obrigatório")
  .test(
    "DOB",
    "Data Inválida , maioridade obrigatória",
    (date) => moment().diff(moment(formatDateToApi(date)), "years") >= 18
  ),
  dadosEscolares: Yup.array().of(
    Yup.object().shape({
      descricao: Yup.string().required("Descrição Obrigatória"),
      instituicao: Yup.string().required("Instituição Obrigatória"),
      dataInicio:
      Yup.string()
      .required("Data Obrigatória")
      .test(
        "DATE",
        "Data Inválida",
        (date) => moment().diff(moment(formatDateToApi(date)), "years") > -1
      ),
      dataFim:
      Yup.string()
      .required("Data Obrigatória")
      .test(
        "DATE",
        "Data Inválida",
        (date) => moment().diff(moment(formatDateToApi(date)), "years") >= -1
      ),
    })),
    
    experiencias: Yup.array().of(
      Yup.object().shape({
        nomeEmpresa: Yup.string().required("Nome da Empresa Obrigatória"),
        descricao: Yup.string().required("Descrição Obrigatória"),
        dataInicio:
        Yup.string()
        .required("Data Obrigatória")
        .test(
          "DATE",
          "Data Inválida",
          (date) => moment().diff( moment(formatDateToApi(date)), "years") >= -1
        ),
        dataFim:
        Yup.string()
        .required("Data Obrigatória")
        .test(
          "DATE",
          "Data Inválida",
          (date) => moment().diff(moment(formatDateToApi(date)), "years") >= -1
        ),
      })),



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
