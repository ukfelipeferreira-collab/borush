import React from "react";

function Regras({ onVoltar }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #145cac 0%, #145cac 60%, #145cac 100%)",
        color: "#fff",
        padding: "0",
        margin: "0",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "64px 24px 0 24px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.3rem",
            fontWeight: 800,
            marginBottom: 24,
          }}
        >
          REGRAS DESAFIO DE EXCELÊNCIA
        </h1>
        <div
          style={{
            background: "rgba(0,0,0,0.13)",
            borderRadius: 16,
            padding: "32px 24px",
            fontSize: "1.2rem",
            lineHeight: 1.7,
            boxShadow: "0 2px 14px rgba(230, 227, 231, 1)",
          }}
        >
          {/* COLE OU EDITE SUAS REGRAS AQUI */}
          <ol>
            <b>REGRAS DO DESAFIO DE EXCELÊNCIA</b>
            <br />
            <br />
            O objetivo principal do projeto é reduzir o número de BO’s em aberto
            por falhas operacionais, incentivando a qualidade na tratativa e a
            eficiência nos processos. - Todas as baixas devem ser realizadas com
            responsabilidade, seguindo integralmente os critérios operacionais
            da Translovato PO.OPE.011) evitando encerramentos indevidos.
            <br />
            <br />
            <b>✅ BAIXAS CONSIDERADAS PROCEDENTES</b>
            <br />
            Somente serão pontuadas as baixas que atendam a pelo menos um dos
            critérios abaixo:
            <br />
            <i>* Mercadoria localizada (Parecer 7);</i>
            <br />
            <i>* Volume aceito pelo destinatário (Parecer 9);</i>
            <br />
            <i>* Tratativa correta do BO, sem tentativa de baixa indevida;</i>
            <br />
            <br />
            <b>PROCESSO FINALIZADO COM UM DOS SEGUINTES PARECERES:</b>
            <b />
            <br /> - Parecer 29 – Solicitação/Avaliação e Baixa ao CNO;
            <br />
            - Parecer 37 – Solicitação de Aprovação CNO.
            <br />
            <br />
            <b>PENALIDADES</b>
            <br />
            Para garantir a integridade do jogo, as seguintes ocorrências
            resultarão em perda de pontos:
            <br />
            * Reversão de BO indevida → – 3 Pontos;
            <br />
            * Baixa de BO indevida → – 6 Pontos;
            <br />
            * Retenção intencional de BO para maior ganho de pontuação → - 10
            Pontos.
            <br />
            <br />
            Critérios de pontuação positiva
            <br />
            <br />
            - BO Tratado/Baixado com mais de 15 dias em aberto → 3 pontos
            <br />
            - BO Tratado/Baixado entre 10 e 15 dias em aberto → 2 pontos
            <br />
            - BO Tratado/Baixado com até 10 dias em aberto → 1 ponto.
            <br />
            {/* Adicione mais regras conforme necessário */}
          </ol>
        </div>
        <button
          style={{
            marginTop: 36,
            background: "#ffffffff",
            color: "#145cac",
            border: "none",
            borderRadius: 8,
            padding: "12px 32px",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 18,
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          onClick={onVoltar}
        >
          Voltar para Home
        </button>
      </div>
    </div>
  );
}

export default Regras;
