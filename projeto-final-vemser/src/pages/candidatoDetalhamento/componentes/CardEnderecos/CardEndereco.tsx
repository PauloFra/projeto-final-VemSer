import React from "react";
import * as GC from "../GlobalStyles.styles";
type Props = {
  bairro: string;
  cidade: string;
  rua: string;
  numero: number;
};
const CardEndereco = (candidato: Props) => {
  return (
    <GC.DivTopicosCandidato>
      <GC.TituloInfo>
        <GC.Negrito>Endereço</GC.Negrito>
      </GC.TituloInfo>

      <GC.ContainerInfo>
        <GC.DivColumn>
          <GC.Info>
            <GC.Negrito>Cidade: </GC.Negrito>
            {candidato.cidade}
          </GC.Info>
          <GC.Info>
            <GC.Negrito>Bairro: </GC.Negrito>
            {candidato.bairro}
          </GC.Info>
          <GC.Info>
            <GC.Negrito>Rua: </GC.Negrito>
            {candidato.rua}
          </GC.Info>
          <GC.Info>
            <GC.Negrito>Número: </GC.Negrito>
            {candidato.numero}
          </GC.Info>
        </GC.DivColumn>
      </GC.ContainerInfo>
    </GC.DivTopicosCandidato>
  );
};

export default CardEndereco;
