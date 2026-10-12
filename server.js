import express from "express";
import expressLayouts from "express-ejs-layouts";
import path from "path";
import { fileURLToPath } from "url";
import { listarRestricoesFuturas } from "./data/restricciones.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", "layout");

app.use(express.static(path.join(__dirname, "public")));

// Helpers globais
app.locals.formatarData = (d) => {
  const dias = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return `${dias[d.getDay()]}, ${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
};

app.locals.formatarDataCurta = (d) => {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${dd}/${mm}/${d.getFullYear()}`;
};

app.locals.hoje = () => {
  const h = new Date();
  h.setHours(0, 0, 0, 0);
  return h;
};

// Rota principal
app.get("/", (req, res) => {
  const diasFuturos = parseInt(req.query.dias) || 60;
  const restricoes = listarRestricoesFuturas(diasFuturos);

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  // Agrupar por data
  const grupos = {};
  for (const r of restricoes) {
    if (!grupos[r.dataStr]) {
      grupos[r.dataStr] = {
        data: r.data,
        dataStr: r.dataStr,
        isHoje: r.data.getTime() === hoje.getTime(),
        isPassado: r.data < hoje,
        itens: [],
      };
    }
    grupos[r.dataStr].itens.push(r);
  }

  const gruposArray = Object.values(grupos).sort((a, b) => a.data - b.data);

  res.render("index", {
    grupos: gruposArray,
    diasFuturos,
    totalRestricoes: restricoes.length,
  });
});

// API JSON (útil para debug)
app.get("/api/restricoes", (req, res) => {
  const diasFuturos = parseInt(req.query.dias) || 60;
  res.json(listarRestricoesFuturas(diasFuturos));
});

app.listen(PORT, () => {
  console.log(`✅ Servidor a correr em http://localhost:${PORT}`);
});
