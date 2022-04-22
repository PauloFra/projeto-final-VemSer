import { Values } from "./model/CandidatoDTO"
export function defaultFunc(){

}
export function prepareDataToInsert(values:any){
    const valuesToPost = {
        nome:values.nome,
        dadosPessoais:{
        cpf:values.cpf,
        dataNascimento:values.dataNascimento
        },
        endereço:{
            rua:values.rua,
            cidade:values.cidade,
            bairro:values.bairro,
            numero:values.numero
        },
        dadosEscolares :{
        escolaridade:values.escolaridade,
        dataInicioEscolaridade:values.dataInicioEscolaridade,
        dataFinal:values.dataFinal
        },
        Experiências:[
                    {
                    nomeEmpresa:values.nomeEmpresa,
                    cargo:values.cargo,
                    descricao:values.descricao,
                    dataInicioExperiencia:values.dataInicioExperiencia,
                    trabalhandoAtualmente:values.trabalhandoAtualmente,
                    dataFinalExperiencia:values.dataFinalExperiencia
                    }
                ]
            }
    return valuesToPost
}