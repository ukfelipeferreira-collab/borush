import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import Home from "./containers/Home";
import Regras from "./containers/Regras";

function extrairEquipes(sheet) {
  // Baixa Carga: A3:C9
  const FASTROUTE = XLSX.utils
    .sheet_to_json(sheet, { range: "A3:C9", header: 1 })
    .slice(1)
    .map((row) => ({
      centralizadora: row[0] || "",
      pontuacao: row[1] || "",
      totalBos: row[2] || "",
    }))
    .filter((item) => item.centralizadora);

  // Média Carga: E3:G9
  const MIDTRACK = XLSX.utils
    .sheet_to_json(sheet, { range: "E3:G9", header: 1 })
    .slice(1)
    .map((row) => ({
      centralizadora: row[0] || "",
      pontuacao: row[1] || "",
      totalBos: row[2] || "",
    }))
    .filter((item) => item.centralizadora);

  // Alta Carga: I3:K9
  const PRIMETRANSIT = XLSX.utils
    .sheet_to_json(sheet, { range: "I3:K9", header: 1 })
    .slice(1)
    .map((row) => ({
      centralizadora: row[0] || "",
      pontuacao: row[1] || "",
      totalBos: row[2] || "",
    }))
    .filter((item) => item.centralizadora);

  return [
    { nome: <i>FAST ROUTE</i>, centralizadoras: FASTROUTE },
    { nome: <i>MID TRACK</i>, centralizadoras: MIDTRACK },
    { nome: <i>PRIME TRANSIT</i>, centralizadoras: PRIMETRANSIT },
  ];
}

function App() {
  const [equipes, setEquipes] = useState([]);
  const [erro, setErro] = useState("");
  const [pagina, setPagina] = useState("home");
  const [buildTime, setBuildTime] = useState("");

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

  // Busca o horário do build ao carregar o app
  useEffect(() => {
    fetch("/build.json")
      .then((res) => res.json())
      .then((data) => {
        const dt = new Date(data.date);
        setBuildTime(
          dt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        );
      })
      .catch(() => setBuildTime(""));
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
            boxShadow: "0 2px 8px rgba(80,20,100,0.12)",
          }}
          onClick={() => setPagina(pagina === "home" ? "regras" : "home")}
        >
          {pagina === "home" ? "Regras" : "Voltar"}
        </button>
      </div>

      {/* Conteúdo principal */}
      {pagina === "home" ? (
        <Home equipes={equipes} buildTime={buildTime} />
      ) : (
        <Regras onVoltar={() => setPagina("home")} />
      )}

      {/* Rodapé tradicional */}
      <footer
        style={{
          width: "100%",
          background: "#eeeeeeff", // Cor do rodapé, troque se quiser!
          color: "#145cac",
          padding: "18px 0 12px 0",
          fontSize: "1.0",
          textAlign: "center",
          marginTop: "40px",
          letterSpacing: "0.5px",
        }}
      >
        <span style={{ marginRight: 32 }}>
          <b>Desenvolved by:</b>{" "}
          <i>Felipe Ferreira, Cauã Pivotto e Endrigo Boreli</i>
        </span>
      </footer>
    </>
  );
}

export default App;
