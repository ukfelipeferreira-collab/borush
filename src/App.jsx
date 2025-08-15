import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import Home from "./containers/Home";
import Regras from "./containers/Regras";

function extrairEquipes(sheet) {
  const equipe1 = XLSX.utils
    .sheet_to_json(sheet, { range: "A3:C9", header: 1 })
    .slice(1)
    .map((row) => ({
      centralizadora: row[0] || "",
      pontuacao: row[1] || "",
      totalBos: row[2] || "",
    }))
    .filter((item) => item.centralizadora);

  const mediaCarga = XLSX.utils
    .sheet_to_json(sheet, { range: "E3:G9", header: 1 })
    .slice(1)
    .map((row) => ({
      centralizadora: row[0] || "",
      pontuacao: row[1] || "",
      totalBos: row[2] || "",
    }))
    .filter((item) => item.centralizadora);

  const altaCarga = XLSX.utils
    .sheet_to_json(sheet, { range: "I3:K9", header: 1 })
    .slice(1)
    .map((row) => ({
      centralizadora: row[0] || "",
      pontuacao: row[1] || "",
      totalBos: row[2] || "",
    }))
    .filter((item) => item.centralizadora);

  return [
    { nome: "equipe1", centralizadoras: equipe1 },
    { nome: "Média Carga", centralizadoras: mediaCarga },
    { nome: "Alta Carga", centralizadoras: altaCarga },
  ];
}

function App() {
  const [equipes, setEquipes] = useState([]);
  const [erro, setErro] = useState("");
  const [pagina, setPagina] = useState("home");

  useEffect(() => {
    fetch("/GAMESKPI.xlsx")
      .then((res) => res.arrayBuffer())
      .then((arrayBuffer) => {
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        setEquipes(extrairEquipes(sheet));
      })
      .catch((err) => {
        setErro(
          "Erro ao carregar a planilha. Verifique o nome e o local do arquivo."
        );
        console.error("Erro ao ler planilha:", err);
      });
  }, []);

  if (erro) return <div>{erro}</div>;

  return (
    <>
      {/* Botão fixo no topo direito */}
      <div
        style={{
          position: "fixed",
          top: 24,
          right: 24,
          zIndex: 9999,
          pointerEvents: "auto",
        }}
      >
        <button
          style={{
            background: "#fff",
            color: "#145cac",
            border: "none",
            borderRadius: 8,
            padding: "10px 22px",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 16,
            boxShadow: "0 2px 8px rgba(247, 234, 234, 0.94)",
          }}
          onClick={() => setPagina(pagina === "home" ? "regras" : "home")}
        >
          {pagina === "home" ? "Regras" : "Voltar"}
        </button>
      </div>

      {/* Conteúdo principal */}
      {pagina === "home" ? (
        <Home equipes={equipes} />
      ) : (
        <Regras onVoltar={() => setPagina("home")} />
      )}

      {/* Rodapé tradicional, só aparece quando rolar até o fim */}
      <footer
        style={{
          width: "100%",
          background: "#ffffffe0",
          color: "#145cac",
          padding: "5px 0 12px 0",
          fontSize: "1.0rem",
          textAlign: "center",
          marginTop: "40px",
          letterSpacing: "0.5px",
        }}
      >
        <span style={{ marginRight: 32 }}>
          <b>
            <i>Desenvolved by: </i>
          </b>
          <i> Felipe Ferreira, Cauã Pivotto e Endrigo Boreli</i>
        </span>
      </footer>
    </>
  );
}

export default App;
