import "../../App.css";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import borush from "../../assets/borush.png";
import seniorImg from "../../assets/senior.jpg";
import softImg from "../../assets/soft.jpg";
import plenoImg from "../../assets/pleno.jpg";

const mainBg = "linear-gradient(135deg, #145cac 0%, #145cac 60%, #185cac 100%)";
const mainTextColor = "#ffffffff";

function Home() {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  const equipes = [
    {
      nome: "Vencedor Equipe Sênior\nCampinas",
      img: seniorImg,
      popupWidth: "600px",
    },
    {
      nome: "Vencedor Equipe Pleno\nGuarulhos",
      img: plenoImg,
      popupWidth: "400px",
    },
    {
      nome: "Vencedor Equipe Soft\nFlorianópolis",
      img: softImg,
      popupWidth: "500px",
    },
  ];

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
        {/* IMAGEM BORUSH */}
        <div
          style={{
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

        {/* TÍTULO */}
        <h1
          style={{
            fontSize: "1.0rem",
            fontWeight: 800,
            textAlign: "center",
            color: mainTextColor,
            marginBottom: "2px",
            letterSpacing: "1px",
            textShadow: "0 2px 20px rgba(177, 177, 166, 1)",
          }}
        >
          Desafio de Excelência
        </h1>

        {/* SUBTÍTULO */}
        <div
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: "2rem",
            letterSpacing: "2px",
            fontWeight: 800,
            textShadow: "0 2px 20px rgba(177, 177, 166, 1)",
            marginBottom: "80px",
          }}
        >
          <br />
          <br />
          <br />
          VENCEDORES DO DESAFIO <br />
        </div>

        {/* FOTOS DAS EQUIPES */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            marginBottom: "80px",
          }}
        >
          {equipes.map((equipe, idx) => (
            <div key={idx} style={{ textAlign: "center", color: "#fff" }}>
              <img
                src={equipe.img}
                alt={equipe.nome}
                onClick={() => setImagemSelecionada(equipe)}
                style={{
                  width: "220px",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  boxShadow: "0 2px 18px rgba(0,0,0,0.5)",
                  cursor: "pointer",
                }}
              />
              <h3
                style={{
                  marginTop: "12px",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  whiteSpace: "pre-line",
                }}
              >
                {equipe.nome}
              </h3>
            </div>
          ))}
        </div>

        {/* MODAL DE IMAGEM AMPLIADA */}
        {imagemSelecionada && (
          <div
            onClick={() => setImagemSelecionada(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.75)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "90vh",
              }}
            >
              <img
                src={imagemSelecionada.img}
                alt={imagemSelecionada.nome}
                style={{
                  width: imagemSelecionada.popupWidth || "500px",
                  height: "auto",
                  borderRadius: "16px",
                  boxShadow: "0 2px 24px rgba(255,255,255,0.3)",
                }}
              />
              <button
                onClick={() => setImagemSelecionada(null)}
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "0",
                  background: "#fff",
                  color: "#145cac",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow: "0 2px 14px rgba(230, 227, 231, 0.67)",
                }}
              >
                Fechar
              </button>
            </div>
          </div>
        )}

        {/* LOGO FINAL */}
        <div
          style={{
            width: "100%",
            height: "160px",
            marginTop: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
      </div>
    </div>
  );
}

export default Home;
