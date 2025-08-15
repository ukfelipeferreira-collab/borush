import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import Home from "./containers/Home";

function extrairEquipes(sheet) {
  // Baixa Carga: A3:C9
  const equipe1 = XLSX.utils
    .sheet_to_json(sheet, { range: "A3:C9", header: 1 })
    .slice(1)
    .map((row) => ({
      centralizadora: row[0] || "",
      pontuacao: row[1] || "",
      totalBos: row[2] || "",
    }))
    .filter((item) => item.centralizadora);

  // Média Carga: E3:G9
  const mediaCarga = XLSX.utils
    .sheet_to_json(sheet, { range: "E3:G9", header: 1 })
    .slice(1)
    .map((row) => ({
      centralizadora: row[0] || "",
      pontuacao: row[1] || "",
      totalBos: row[2] || "",
    }))
    .filter((item) => item.centralizadora);

  // Alta Carga: I3:K9
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

  return <Home equipes={equipes} />;
}

export default App;
