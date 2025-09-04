import "../../App.css";
import React from "react";
import logo from "../../assets/logo.png";
import borush from "../../assets/borush.png";
import seniorImg from "../../assets/senior.jpg";
import softImg from "../../assets/soft.jpg";
import plenoImg from "../../assets/pleno.jpg";

const mainBg = "linear-gradient(135deg, #145cac 0%, #145cac 60%, #185cac 100%)";
const mainTextColor = "#ffffffff";

function Home() {
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
          {[
            { nome: "Vencedor Equipe Sênior\nCampinas", img: seniorImg },
            { nome: "Vencedor Equipe Pleno\nGuarulhos", img: plenoImg },
            { nome: "Vencedor Equipe Soft\nFlorianópolis", img: softImg },
          ].map((equipe, idx) => (
            <div key={idx} style={{ textAlign: "center", color: "#fff" }}>
              <img
                src={equipe.img}
                alt={equipe.nome}
                style={{
                  width: "220px",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  boxShadow: "0 2px 18px rgba(0,0,0,0.5)",
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
