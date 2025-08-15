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
          REGRAS DO PROJETO
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
            Garantir que a baixa de BO’s seja realizada com responsabilidade,
            seguindo os critérios operacionais da Translovato evitando
            encerramentos indevidos. Intuito reduzir o número de BO’s em aberto
            por falhas operacionais e promover a qualidade na tratativa, com
            foco na eficiência.
            <br />
            <br />
            <b>Baixa procedente do BO:</b>
            <br />
            <br />
            Mercadoria Localizada Volume Aceito pelo Destinatário Se BO foi
            tratado corretamente (não houve tentativa de baixa indevida)
            Processo finalizado com Parecer 29 (SOL. / AVALIACAO E BAIXA AO CNO)
            ou 37 (SOLICITADO APROVACAO CNO).
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
