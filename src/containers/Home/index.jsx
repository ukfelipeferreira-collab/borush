import "../../App.css";
import React, { useState } from "react";
import { FaUsers, FaBullseye, FaArrowUp, FaTrophy } from "react-icons/fa";
import logo from "../../assets/logo.png";
import borush from "../../assets/borush.png";

// Aqui você pode mudar a cor de fundo principal do dashboard
const mainBg = "linear-gradient(135deg, #145cac 0%, #145cac 60%, #185cac 100%)";
const mainTextColor = "#ffffffff";

function Home({ equipes, buildTime }) {
  const [detalhesEquipe, setDetalhesEquipe] = useState(null);

  if (!equipes || equipes.length === 0) {
    return (
      <div style={{ color: "#fff", textAlign: "center", marginTop: "80px" }}>
        Carregando dados...
      </div>
    );
  }

  const totalEquipes = equipes.length;

  // Ordena as equipes por maior pontuação
  const equipesOrdenadas = [...equipes]
    .map((equipe) => ({
      ...equipe,
      // Ordena centralizadoras dentro de cada equipe por maior pontuação
      centralizadoras: [...equipe.centralizadoras].sort(
        (a, b) => Number(b.pontuacao) - Number(a.pontuacao)
      ),
    }))
    .sort((a, b) => {
      const maxA = Math.max(
        ...a.centralizadoras.map((c) => Number(c.pontuacao) || 0)
      );
      const maxB = Math.max(
        ...b.centralizadoras.map((c) => Number(c.pontuacao) || 0)
      );
      return maxB - maxA;
    });

  // Buscar maior pontuação e centralizadora do dia
  const allCentralizadoras = equipesOrdenadas.flatMap((eq) =>
    eq.centralizadoras.map((c) => ({
      ...c,
      equipe: eq.nome,
    }))
  );
  const topCentralizadora = allCentralizadoras.reduce(
    (top, curr) =>
      Number(curr.pontuacao) > Number(top.pontuacao) ? curr : top,
    { pontuacao: 0 }
  );

  // CARD DE CADA EQUIPE: mostra centralizadoras ao lado do nome
  function CardEquipe({ equipe, isTop, idx }) {
    return (
      <div
        style={{
          background: "rgba(165, 165, 165, 0.1)",
          borderRadius: "18px",
          padding: "15px",
          margin: "32px 0 0 0",
          boxShadow: "0 2px 12px rgba(196, 196, 196, 0.82)",
          border: isTop ? "2px solid #ffffffff" : "2px solid #ffffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          {isTop ? <FaTrophy color="#ecc203ff" size={36} /> : null}
          <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff" }}>
            {equipe.nome}
          </span>
          <div
            style={{
              display: "flex",
              gap: "6px",
              flexWrap: "wrap",
              marginLeft: "10px",
            }}
          >
            {equipe.centralizadoras.map((cent, i) => (
              <span
                key={i}
                style={{
                  background: "#9e9e9eff",
                  color: "#ffffffff",
                  padding: "4px 10px",
                  borderRadius: 8,
                  fontWeight: 500,
                  fontSize: 8,
                }}
              >
                {cent.centralizadora}
              </span>
            ))}
          </div>
        </div>
        {/* Pontuação máxima do grupo */}
        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <span style={{ fontSize: 26, fontWeight: 700, color: "#fff" }}>
            {Math.max(
              ...equipe.centralizadoras.map((c) => Number(c.pontuacao) || 0)
            )}
          </span>
          <span
            style={{
              background: "#7c43bd",
              color: "#fff",
              borderRadius: 8,
              padding: "4px 12px",
              marginLeft: "10px",
              fontSize: 16,
            }}
          >
            Pontos
          </span>
          <button
            style={{
              marginLeft: 18,
              background: "rgba(145, 145, 145, 0.29)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "8px 20px",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 15,
            }}
            onClick={() => setDetalhesEquipe(idx)}
          >
            Ver Detalhes
          </button>
        </div>
      </div>
    );
  }

  // Card de métricas
  function MetricsCards() {
    return (
      <div
        style={{
          display: "flex",
          gap: "28px",
          margin: "10px auto 0 auto",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div className="metric-card">
          <span style={{ color: "#fff", fontWeight: 600 }}>
            Total de Equipes
          </span>
          <FaUsers size={29} style={{ color: "#fff", marginTop: 10 }} />
          <div style={{ fontSize: "2rem", color: "#fff", fontWeight: 700 }}>
            {totalEquipes}
          </div>
        </div>
        <div className="metric-card">
          <span style={{ color: "#fff", fontWeight: 600 }}>
            Maior Pontuação
          </span>
          <FaBullseye size={29} style={{ color: "#fff", marginTop: 10 }} />
          <div style={{ fontSize: "2rem", color: "#fff", fontWeight: 700 }}>
            {topCentralizadora.pontuacao}
          </div>
          <span
            style={{
              display: "block",
              marginTop: "6px",
              fontSize: "1rem",
              color: "#ffd700",
              fontWeight: 600,
            }}
          >
            {topCentralizadora.centralizadora}
          </span>
        </div>
        <div className="metric-card">
          <span style={{ color: "#fff", fontWeight: 600 }}>
            Última Atualização
          </span>
          <FaArrowUp size={29} style={{ color: "#fff", marginTop: 10 }} />
          <div style={{ fontSize: "2rem", color: "#fff", fontWeight: 700 }}>
            {buildTime || "--:--"}
          </div>
        </div>
      </div>
    );
  }

  // MODAL/POPUP DE DETALHES
  function CardDetalhesModal() {
    if (detalhesEquipe == null) return null;
    const eq = equipesOrdenadas[detalhesEquipe];
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.65)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => setDetalhesEquipe(null)}
      >
        <div
          style={{
            background: "#145cac",
            borderRadius: "18px",
            padding: "32px",
            maxWidth: 700,
            width: "90vw",
            boxShadow: "0 2px 24px rgba(75, 75, 75, 0.85)",
            color: "#fff",
            position: "relative",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: 18,
              color: mainTextColor,
              textAlign: "center",
            }}
          >
            {eq.nome}
          </h2>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              boxShadow: "0 2px 24px rgba(146, 144, 144, 0.85)",
              textAlign: "center",
              background: "rgba(0, 7, 48, 0.18)",
              borderRadius: "30px",
              overflow: "hidden",
            }}
          >
            <thead>
              <tr style={{ color: mainTextColor, fontWeight: "bold" }}>
                <th style={{ padding: "10px" }}>Centralizadora</th>
                <th style={{ padding: "10px" }}>Pontuação</th>
                <th style={{ padding: "10px" }}>Total de BOS</th>
              </tr>
            </thead>
            <tbody>
              {eq.centralizadoras.map((item, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #185cac" }}>
                  <td style={{ padding: "13px" }}>{item.centralizadora}</td>
                  <td style={{ padding: "13px" }}>{item.pontuacao}</td>
                  <td style={{ padding: "13px" }}>{item.totalBos}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={() => setDetalhesEquipe(null)}
            style={{
              marginTop: "22px",
              background: "#ffffffff",
              color: "#145cac",
              border: "none",
              borderRadius: 8,
              padding: "8px 20px",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 15,
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              boxShadow: "0 2px 14px rgba(230, 227, 231, 0.67)",
            }}
          >
            Fechar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "0",
        margin: "0",
        background: mainBg,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "64px 24px 0 24px",
        }}
      >
        {/* IMAGEM BORUSH ACIMA DO TÍTULO */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "16px",
          }}
        >
          <img
            src={borush}
            alt="BORUSH"
            style={{
              maxWidth: "220px",
              maxHeight: "110px",
              borderRadius: "12px",
              objectFit: "contain",
            }}
          />
        </div>
        {/* FIM IMAGEM BORUSH */}

        <h1
          style={{
            fontSize: "2.0rem",
            fontWeight: 800,
            textAlign: "center",
            color: mainTextColor,
            marginBottom: "2px",
            letterSpacing: "2px",
            textShadow: "0 2px 20x rgba(177, 177, 166, 1)",
          }}
        >
          Desafio de Excelência
        </h1>
        <div
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: "1rem",
            marginBottom: "150px",
          }}
        >
          Acompanhamento em tempo real das pontuações
          <br />
          <br />
          <u>Atualizações 8:30h e 17:30h</u>
          <br />
          <br />
          🚨 ATENÇÃO 🚨 <br />
          Período que está valendo nosso Game 📆 de 20/08 a 31/08
        </div>
        <MetricsCards />

        {/* Mostra todos os cards de equipes, destacando o top */}
        {equipesOrdenadas.map((equipe, idx) => (
          <CardEquipe key={idx} equipe={equipe} isTop={idx === 0} idx={idx} />
        ))}

        {/* MODAL POPUP DE DETALHES */}
        <CardDetalhesModal />

        {/* BLOCO PARA INSERIR IMAGEM FUTURAMENTE */}
        <div
          style={{
            width: "100%",
            height: "160px", // Espaço reservado para imagem
            marginTop: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "0px dashed #ffffffff",
            borderRadius: "0px",
            color: "#145cac",
            fontSize: "1.3rem",
            fontWeight: 700,
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              maxWidth: "100%",
              maxHeight: "80px",
              borderRadius: "12px",
              objectFit: "contain",
            }}
          />
        </div>
        {/* FIM BLOCO DA IMAGEM */}
      </div>
    </div>
  );
}

export default Home;
