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
        {/* Título principal */}
        <h1
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: 800,
            marginBottom: 24,
            fontFamily: "Arial Black, Arial, sans-serif",
            letterSpacing: 1.5,
          }}
        >
          REGRAS DESAFIO DE EXCELÊNCIA
        </h1>
        <div
          style={{
            background: "rgba(0,0,0,0.13)",
            borderRadius: 16,
            padding: "32px 24px",
            fontSize: "1rem",
            lineHeight: 1.7,
            boxShadow: "0 2px 14px rgba(230, 227, 231, 1)",
          }}
        >
          {/* COLE OU EDITE SUAS REGRAS AQUI */}
          <div>
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: 200,
                fontFamily: "Arial, sans-serif",
                marginBottom: 16,
                marginTop: 0,
                color: "#ffffffff",
                letterSpacing: 1,
                padding: "8px 12px",
                borderRadius: 0,
                textAlign: "center",
                display: "inline-block",
              }}
            >
              O objetivo principal do projeto é reduzir o número de BO’s em
              aberto por falhas operacionais, incentivando a qualidade na
              tratativa e a eficiência nos processos. Todas as baixas devem ser
              realizadas com responsabilidade, seguindo integralmente os
              critérios operacionais da Translovato PO.OPE.011, evitando
              encerramentos indevidos.
              <br />
              <br />
            </h2>
            <p
              style={{
                marginTop: 18,
                fontFamily: "Segoe UI, Arial, sans-serif",
                color: "#222",
              }}
            ></p>

            <h3
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                marginTop: 28,
                color: "#ffffffff",
                fontFamily: "Arial, sans-serif",
                textAlign: "center",
              }}
            >
              ✅ BAIXAS CONSIDERADAS PROCEDENTES
            </h3>
            <p
              style={{
                marginTop: -48,
                fontFamily: "Segoe UI, Arial, sans-serif",
                textAlign: "center",
                color: "#ffffffff",
              }}
            >
              Somente serão pontuadas as baixas que atendam a pelo menos um dos
              critérios abaixo:
              <br />
              <br />
            </p>
            <ul style={{ color: "#ffffffff" }}>
              <li>
                <i>Mercadoria localizada (Parecer 7);</i>
              </li>
              <li>
                <i>Volume aceito pelo destinatário (Parecer 9);</i>
              </li>
              <li>
                <i>Tratativa correta do BO, sem tentativa de baixa indevida;</i>
              </li>
            </ul>

            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                marginTop: 28,
                color: "#ffffffff",
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
              }}
            >
              PROCESSO FINALIZADO COM UM DOS SEGUINTES PARECERES:
            </h3>
            <ul style={{ color: "#ffffffff" }}>
              <li>
                <i>Parecer 29 – Solicitação/Avaliação e Baixa ao CNO;</i>
              </li>
              <li>
                <i>Parecer 37 – Solicitação de Aprovação CNO.</i>
              </li>
            </ul>

            <h3
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                marginTop: 28,
                color: "#ffffffff",
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
              }}
            >
              <br />
              ⚠️ PENALIDADES
            </h3>
            <p
              style={{
                marginTop: -48,
                fontFamily: "Segoe UI, Arial, sans-serif",
                textAlign: "center",
                color: "#ffffffff",
              }}
            >
              Para garantir a integridade do jogo, as seguintes ocorrências
              resultarão em perda de pontos:
              <br />
              <br />
            </p>
            <ul style={{ color: "#ffffffff" }}>
              <li>
                <i>Reversão de BO indevida →</i>
                <span style={{ background: "#ff0000ff" }}>
                  {" "}
                  <b>– 3 Pontos.</b>
                </span>
              </li>
              <li>
                <i>Baixa de BO indevida →</i>
                <span style={{ background: "#ff0000ff" }}>
                  {" "}
                  <b> – 6 Pontos.</b>
                </span>
              </li>
              <li>
                <i>
                  Retenção intencional de BO para maior ganho de pontuação →{" "}
                </i>
                <span style={{ background: "#ff0000ff" }}>
                  {" "}
                  <b> – 10 Pontos.</b>
                </span>
              </li>
            </ul>

            <h3
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                marginTop: 28,
                color: "#ffffffff",
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
              }}
            >
              <br />
              Critérios de pontuação positiva
            </h3>
            <ul style={{ color: "#ffffffff" }}>
              <li>
                <i>BO Tratado/Baixado com mais de 15 dias em aberto →</i>
                <span style={{ background: "#00ff0dff" }}>
                  {" "}
                  <b>3 pontos</b>
                </span>
              </li>
              <li>
                <i>BO Tratado/Baixado entre 10 e 15 dias em aberto →</i>
                <span style={{ background: "#00ff0dff" }}>
                  {" "}
                  <b>2 pontos</b>
                </span>
              </li>
              <li>
                <i>BO Tratado/Baixado com até 10 dias em aberto →</i>
                <span style={{ background: "#00ff0dff" }}>
                  {" "}
                  <b>1 ponto.</b>
                </span>
              </li>
            </ul>
            {/* Adicione mais regras conforme necessário */}
          </div>
        </div>
        <button
          style={{
            marginTop: 36,
            background: "#fff",
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
