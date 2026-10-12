// Base de dados de restrições extraídas do Anexo II
// Formato: { id, tipo, titulo, mes, dias, dataInicio, dataFim, estradas: [...] }

const ANO_ATUAL = new Date().getFullYear();

// Helper para criar datas
const d = (mes, dia) => new Date(ANO_ATUAL, mes - 1, dia);
const dRange = (mes1, dia1, mes2, dia2) => [d(mes1, dia1), d(mes2, dia2)];

const restricoes = [
  // ===== RESTRIÇÕES GENÉRICAS =====
  {
    id: "gen-sextas-jan-mar-dez",
    tipo: "generico",
    titulo: "Todas as SEXTAS-FEIRAS (Janeiro–Março e 4–18 Dezembro)",
    descricao: "Restrição genérica em sextas-feiras",
    recorrencia: {
      tipo: "diaSemana",
      diaSemana: 5, // sexta
      meses: [1, 2, 3, 12],
      apenasDezembro: { inicio: 4, fim: 18 },
    },
    estradas: [
      {
        ctra: "N-230",
        inicio: { pk: "64,1", pop: "Benabarre" },
        fim: { pk: "116,1", pop: "Santoréns" },
        duracao: "17:00-24:00",
        sentido: "fronteira França",
      },
      {
        ctra: "N-230",
        inicio: { pk: "119,5", pop: "Buira" },
        fim: { pk: "120,9", pop: "Bonansa" },
        duracao: "17:00-24:00",
        sentido: "fronteira França",
      },
      {
        ctra: "N-230",
        inicio: { pk: "133,6", pop: "Ginaste" },
        fim: { pk: "149,2", pop: "Aneto" },
        duracao: "17:00-24:00",
        sentido: "fronteira França",
      },
    ],
    excecao:
      "Exceto deslocamentos com destino: residência habitual do condutor, lugar de domiciliação do veículo ou base da empresa",
  },
  {
    id: "gen-sabados-jun-jul-ago",
    tipo: "generico",
    titulo: "Todos os SÁBADOS (Junho, Julho e Agosto)",
    descricao: "Restrição genérica em sábados de verão",
    recorrencia: { tipo: "diaSemana", diaSemana: 6, meses: [6, 7, 8] },
    estradas: [
      {
        ctra: "A-49",
        inicio: { pk: "0", pop: "Camas" },
        fim: { pk: "23", pop: "Huévar del Aljarafe" },
        duracao: "10:00-14:00",
        sentido: "Ayamonte",
      },
      {
        ctra: "AP-4",
        inicio: { pk: "13,5", pop: "Dos Hermanas" },
        fim: { pk: "78", pop: "Jerez de la Frontera" },
        duracao: "10:00-13:00",
        sentido: "Cádiz",
      },
      {
        ctra: "N-4",
        inicio: { pk: "573", pop: "Los Palacios y Villafranca" },
        fim: { pk: "627", pop: "Jerez de la Frontera" },
        duracao: "10:00-13:00",
        sentido: "Cádiz",
      },
    ],
  },
  {
    id: "gen-sab-dom-fest-jul-ago",
    tipo: "generico",
    titulo: "Todos os SÁBADOS, DOMINGOS E FESTIVOS* (Julho e Agosto)",
    descricao: "Festivos de âmbito Nacional ou da Comunidade Autónoma afetada",
    recorrencia: { tipo: "fimSemanaFestivo", meses: [7, 8] },
    estradas: [
      {
        ctra: "A-483",
        inicio: { pk: "0", pop: "Bollullos Par Cd.-enlace A-49" },
        fim: { pk: "41,33", pop: "Matalascañas" },
        duracao: "11:00-22:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "A-49",
        inicio: { pk: "70", pop: "Huelva" },
        fim: { pk: "17,05", pop: "Punta Umbria" },
        duracao: "11:00-22:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "A-5056",
        inicio: { pk: "0", pop: "Lepe" },
        fim: { pk: "4,8", pop: "La Antilla" },
        duracao: "11:00-22:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "A-5076",
        inicio: { pk: "0", pop: "Lepe (N-431)" },
        fim: { pk: "5,4", pop: "La Antilla (A-5056)" },
        duracao: "11:00-22:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "A-370",
        inicio: { pk: "0", pop: "Los Gallardos" },
        fim: { pk: "12,16", pop: "Garrucha" },
        duracao: "11:00-22:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "A-8",
        inicio: { pk: "139,2", pop: "Castro-Urdiales" },
        fim: { pk: "169", pop: "Laredo" },
        duracao: "11:00-14:00",
        sentido: "Santander",
      },
      {
        ctra: "A-8",
        inicio: { pk: "169", pop: "Laredo" },
        fim: { pk: "139,2", pop: "Castro-Urdiales" },
        duracao: "16:00-22:00",
        sentido: "Bilbao",
      },
    ],
  },
  {
    id: "gen-domingos-jan-mar-dez",
    tipo: "generico",
    titulo: "Todos os DOMINGOS (Janeiro–Março e 6–27 Dezembro)",
    descricao: "Restrição genérica em domingos de inverno",
    recorrencia: {
      tipo: "diaSemana",
      diaSemana: 0,
      meses: [1, 2, 3, 12],
      apenasDezembro: { inicio: 6, fim: 27 },
    },
    estradas: [
      {
        ctra: "N-230",
        inicio: { pk: "149,2", pop: "Aneto" },
        fim: { pk: "133,6", pop: "Ginaste" },
        duracao: "13:00-20:00",
        sentido: "Benabarre",
      },
      {
        ctra: "N-230",
        inicio: { pk: "120,9", pop: "Bonansa" },
        fim: { pk: "119,5", pop: "Buira" },
        duracao: "13:00-20:00",
        sentido: "Benabarre",
      },
      {
        ctra: "N-230",
        inicio: { pk: "116,1", pop: "Santoréns" },
        fim: { pk: "64,1", pop: "Benabarre" },
        duracao: "13:00-20:00",
        sentido: "Benabarre",
      },
    ],
  },
  {
    id: "gen-domingos-junho",
    tipo: "generico",
    titulo: "Todos os DOMINGOS (Junho)",
    descricao: "Restrição genérica em domingos de junho",
    recorrencia: { tipo: "diaSemana", diaSemana: 0, meses: [6] },
    estradas: [
      {
        ctra: "A-49",
        inicio: { pk: "76,9", pop: "San Juan del Puerto" },
        fim: { pk: "0", pop: "Camas" },
        duracao: "15:00-24:00",
        sentido: "Sevilla",
      },
      {
        ctra: "AP-4",
        inicio: { pk: "78", pop: "Jerez de la Frontera" },
        fim: { pk: "13,5", pop: "Dos Hermanas" },
        duracao: "16:00-20:00",
        sentido: "Sevilla",
      },
      {
        ctra: "N-4",
        inicio: { pk: "627", pop: "Jerez de la Frontera" },
        fim: { pk: "573", pop: "Los Palacios y Villafranca" },
        duracao: "16:00-20:00",
        sentido: "Sevilla",
      },
      {
        ctra: "A-45",
        inicio: { pk: "142", pop: "Málaga" },
        fim: { pk: "115", pop: "Alto Las Pedrizas" },
        duracao: "17:00-24:00",
        sentido: "Córdoba",
      },
    ],
  },
  {
    id: "gen-dom-fest-jul-ago",
    tipo: "generico",
    titulo: "Todos os DOMINGOS E FESTIVOS* (Julho e Agosto)",
    descricao: "Festivos de âmbito Nacional ou da Comunidade Autónoma afetada",
    recorrencia: { tipo: "domingoFestivo", meses: [7, 8] },
    estradas: [
      {
        ctra: "AP-4",
        inicio: { pk: "78", pop: "Jerez de la Frontera" },
        fim: { pk: "13,5", pop: "Dos Hermanas" },
        duracao: "16:00-20:00",
        sentido: "Sevilla",
      },
      {
        ctra: "N-4",
        inicio: { pk: "627", pop: "Jerez de la Frontera" },
        fim: { pk: "573", pop: "Los Palacios y Villafranca" },
        duracao: "16:00-20:00",
        sentido: "Sevilla",
      },
      {
        ctra: "N-230",
        inicio: { pk: "149,2", pop: "Aneto" },
        fim: { pk: "133,6", pop: "Ginaste" },
        duracao: "17:00-22:00",
        sentido: "Benabarre",
      },
      {
        ctra: "N-230",
        inicio: { pk: "120,9", pop: "Bonansa" },
        fim: { pk: "119,5", pop: "Buira" },
        duracao: "17:00-22:00",
        sentido: "Benabarre",
      },
      {
        ctra: "N-230",
        inicio: { pk: "116,1", pop: "Santoréns" },
        fim: { pk: "64,1", pop: "Benabarre" },
        duracao: "17:00-22:00",
        sentido: "Benabarre",
      },
    ],
  },
  {
    id: "gen-dom-fest-28jun-6set",
    tipo: "generico",
    titulo: "DOMINGOS E FESTIVOS* (28 Junho – 6 Setembro)",
    descricao: "Entrada em Madrid",
    recorrencia: {
      tipo: "rangeDomingoFestivo",
      dataInicio: { mes: 6, dia: 28 },
      dataFim: { mes: 9, dia: 6 },
    },
    estradas: [
      {
        ctra: "A-1",
        inicio: { pk: "118,3", pop: "Boceguillas" },
        fim: { pk: "11,8", pop: "Madrid (enlace M-40)" },
        duracao: "21:00-23:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-2",
        inicio: { pk: "107", pop: "Mirabueno" },
        fim: { pk: "10,8", pop: "Madrid (enlace M-40)" },
        duracao: "21:00-23:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-3",
        inicio: { pk: "177", pop: "Atalaya del Cañavate" },
        fim: { pk: "6,9", pop: "Madrid (enlace M-40)" },
        duracao: "21:00-23:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-5",
        inicio: { pk: "75", pop: "Maqueda" },
        fim: { pk: "11,8", pop: "Madrid (enlace M-40)" },
        duracao: "21:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-6",
        inicio: { pk: "123", pop: "Arévalo" },
        fim: { pk: "110", pop: "Adanero" },
        duracao: "21:00-23:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "AP-6",
        inicio: { pk: "110", pop: "Adanero" },
        fim: { pk: "60,5", pop: "San Rafael" },
        duracao: "21:00-23:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-6",
        inicio: { pk: "22,3", pop: "Las Rozas (enlace M-50)" },
        fim: { pk: "6,8", pop: "Madrid" },
        duracao: "21:00-23:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "N-6",
        inicio: { pk: "110", pop: "Adanero" },
        fim: { pk: "42,5", pop: "Collado Villalba" },
        duracao: "21:00-23:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "AP-51",
        inicio: { pk: "104,8", pop: "Ávila" },
        fim: { pk: "81,8", pop: "Villacastín (enlace AP-6)" },
        duracao: "21:00-23:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "AP-6",
        inicio: { pk: "188,55", pop: "Segovia" },
        fim: { pk: "61,50", pop: "San Rafael (enlace AP-6)" },
        duracao: "21:00-23:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "N-110",
        inicio: { pk: "246", pop: "Berrocalejo Aragona" },
        fim: { pk: "228", pop: "Villacastín (enlace AP-6)" },
        duracao: "21:00-23:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "N-603",
        inicio: { pk: "74,9", pop: "Otero de Herreros" },
        fim: { pk: "64", pop: "San Rafael (enlace AP-6)" },
        duracao: "21:00-23:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "M-501",
        inicio: { pk: "59,5", pop: "S. Martín de Valdeiglesias" },
        fim: { pk: "0", pop: "Madrid (enlace M-40)" },
        duracao: "21:00-23:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-45",
        inicio: { pk: "142", pop: "Málaga" },
        fim: { pk: "115", pop: "Alto Las Pedrizas" },
        duracao: "17:00-24:00",
        sentido: "Córdoba",
      },
      {
        ctra: "A-49",
        inicio: { pk: "0", pop: "Camas" },
        fim: { pk: "50", pop: "Bollullos Par del Condado" },
        duracao: "15:00-24:00",
        sentido: "Ayamonte",
      },
      {
        ctra: "A-49",
        inicio: { pk: "76,9", pop: "San Juan del Puerto" },
        fim: { pk: "0", pop: "Camas" },
        duracao: "15:00-24:00",
        sentido: "Sevilla",
      },
      {
        ctra: "N-630",
        inicio: { pk: "782", pop: "El Garrobo" },
        fim: { pk: "810", pop: "Camas" },
        duracao: "10:00-14:00",
        sentido: "Ambos sentidos",
      },
    ],
  },

  // ===== RESTRIÇÕES POR DATAS ESPECÍFICAS (a partir de Outubro) =====
  {
    id: "festa-pilar-8out",
    tipo: "dataEspecifica",
    data: dRange(10, 8, 10, 8),
    titulo: "Quinta 8 de Outubro — Festividade de El Pilar",
    estradas: [
      {
        ctra: "A-3",
        inicio: { pk: "352", pop: "Valencia" },
        fim: { pk: "292", pop: "Requena" },
        duracao: "15:00-21:00",
        sentido: "Salida Valencia",
      },
    ],
  },
  {
    id: "festa-pilar-9out",
    tipo: "dataEspecifica",
    data: dRange(10, 9, 10, 9),
    titulo: "Sexta 9 de Outubro — Festividade de El Pilar",
    estradas: [
      {
        ctra: "A-6 / AP-6",
        inicio: { pk: "11,65", pop: "Madrid (enlace M-40)" },
        fim: { pk: "61,3", pop: "San Rafael" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "AP-6 / A-6",
        inicio: { pk: "61,3", pop: "San Rafael" },
        fim: { pk: "182", pop: "Tordesillas (enlace A-62)" },
        duracao: "16:00-22:00",
        sentido: "A Coruña",
      },
      {
        ctra: "A-1",
        inicio: { pk: "11,8", pop: "Madrid (enlace M-40)" },
        fim: { pk: "50", pop: "Venturada" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-2",
        inicio: { pk: "18,3", pop: "Madrid (enlace M-45)" },
        fim: { pk: "38,7", pop: "Meco" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "R-2",
        inicio: { pk: "17,1", pop: "Madrid (enlace M-50)" },
        fim: { pk: "37,5", pop: "Meco" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-3",
        inicio: { pk: "13", pop: "Madrid (enlace M-50)" },
        fim: { pk: "80,4", pop: "Tarancon" },
        duracao: "16:00-22:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "R-3",
        inicio: { pk: "7,3", pop: "Madrid (enlace M-50)" },
        fim: { pk: "29,4", pop: "Arganda" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-4",
        inicio: { pk: "17,3", pop: "Madrid (enlace M-50)" },
        fim: { pk: "62", pop: "Ocaña" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "R-4",
        inicio: { pk: "0", pop: "Madrid (enlace M-50)" },
        fim: { pk: "52,5", pop: "Dosbarrios" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-5",
        inicio: { pk: "15,6", pop: "Madrid (enlace M-50)" },
        fim: { pk: "106", pop: "Talavera de la Reina" },
        duracao: "16:00-22:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "R-5",
        inicio: { pk: "15", pop: "Arroyomolinos (enlace AP-41)" },
        fim: { pk: "30,5", pop: "Navalcarnero" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "N-6",
        inicio: { pk: "42,5", pop: "Collado Villalba" },
        fim: { pk: "62,5", pop: "San Rafael" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "M-501",
        inicio: { pk: "4", pop: "Madrid (enlace M-50)" },
        fim: { pk: "59,5", pop: "San Martín de Valdeiglesias" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-62",
        inicio: { pk: "113", pop: "Cabezón de Pisuerga" },
        fim: { pk: "151", pop: "Tordesillas" },
        duracao: "15:00-23:00",
        sentido: "fronteira Portugal",
      },
      {
        ctra: "A-3",
        inicio: { pk: "275", pop: "Utiel" },
        fim: { pk: "352", pop: "Valencia" },
        duracao: "13:00-22:00",
        sentido: "Entrada Valencia",
      },
      {
        ctra: "A-8",
        inicio: { pk: "139,2", pop: "Castro-Urdiales" },
        fim: { pk: "169", pop: "Laredo" },
        duracao: "17:00-21:00",
        sentido: "Santander",
      },
      {
        ctra: "N-230",
        inicio: { pk: "64,1", pop: "Benabarre" },
        fim: { pk: "116,1", pop: "Santoréns" },
        duracao: "17:00-24:00",
        sentido: "fronteira França",
      },
      {
        ctra: "N-230",
        inicio: { pk: "119,5", pop: "Buira" },
        fim: { pk: "120,9", pop: "Bonansa" },
        duracao: "17:00-24:00",
        sentido: "fronteira França",
      },
      {
        ctra: "N-230",
        inicio: { pk: "133,6", pop: "Ginaste" },
        fim: { pk: "149,2", pop: "Aneto" },
        duracao: "17:00-24:00",
        sentido: "fronteira França",
      },
    ],
  },
  {
    id: "festa-pilar-10out",
    tipo: "dataEspecifica",
    data: dRange(10, 10, 10, 10),
    titulo: "Sábado 10 de Outubro — Festividade de El Pilar",
    estradas: [
      {
        ctra: "A-6 / AP-6",
        inicio: { pk: "11,65", pop: "Madrid (enlace M-40)" },
        fim: { pk: "61,3", pop: "San Rafael" },
        duracao: "08:00-15:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "AP-6 / A-6",
        inicio: { pk: "61,3", pop: "San Rafael" },
        fim: { pk: "182", pop: "Tordesillas (enlace A-62)" },
        duracao: "08:00-15:00",
        sentido: "A Coruña",
      },
      {
        ctra: "A-1",
        inicio: { pk: "11,8", pop: "Madrid (enlace M-40)" },
        fim: { pk: "50", pop: "Venturada" },
        duracao: "08:00-15:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-2",
        inicio: { pk: "18,3", pop: "Madrid (enlace M-45)" },
        fim: { pk: "38,7", pop: "Meco" },
        duracao: "08:00-13:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "R-2",
        inicio: { pk: "17,1", pop: "Madrid (enlace M-50)" },
        fim: { pk: "37,5", pop: "Meco" },
        duracao: "08:00-13:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-3",
        inicio: { pk: "13", pop: "Madrid (enlace M-50)" },
        fim: { pk: "80,4", pop: "Tarancon" },
        duracao: "08:00-13:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "R-3",
        inicio: { pk: "7,3", pop: "Madrid (enlace M-50)" },
        fim: { pk: "29,4", pop: "Arganda" },
        duracao: "08:00-13:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-4",
        inicio: { pk: "17,3", pop: "Madrid (enlace M-50)" },
        fim: { pk: "62", pop: "Ocaña" },
        duracao: "08:00-13:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "R-4",
        inicio: { pk: "0", pop: "Madrid (enlace M-50)" },
        fim: { pk: "52,5", pop: "Dosbarrios" },
        duracao: "08:00-13:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-5",
        inicio: { pk: "15,6", pop: "Madrid (enlace M-50)" },
        fim: { pk: "106", pop: "Talavera de la Reina" },
        duracao: "08:00-15:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "R-5",
        inicio: { pk: "15", pop: "Arroyomolinos (enlace AP-41)" },
        fim: { pk: "30,5", pop: "Navalcarnero" },
        duracao: "08:00-15:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "N-6",
        inicio: { pk: "42,5", pop: "Collado Villalba" },
        fim: { pk: "62,5", pop: "San Rafael" },
        duracao: "08:00-15:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "M-501",
        inicio: { pk: "4", pop: "Madrid (enlace M-50)" },
        fim: { pk: "59,5", pop: "San Martín de Valdeiglesias" },
        duracao: "08:00-13:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-62",
        inicio: { pk: "113", pop: "Cabezón de Pisuerga" },
        fim: { pk: "151", pop: "Tordesillas" },
        duracao: "08:00-15:00",
        sentido: "fronteira Portugal",
      },
      {
        ctra: "A-8",
        inicio: { pk: "139,2", pop: "Castro-Urdiales" },
        fim: { pk: "169", pop: "Laredo" },
        duracao: "10:00-15:00",
        sentido: "Santander",
      },
    ],
  },
  {
    id: "festa-pilar-12out",
    tipo: "dataEspecifica",
    data: dRange(10, 12, 10, 12),
    titulo: "Segunda 12 de Outubro — Festividade de El Pilar",
    estradas: [
      {
        ctra: "A-1",
        inicio: { pk: "118,3", pop: "Boceguillas" },
        fim: { pk: "11,8", pop: "Madrid (enlace M-40)" },
        duracao: "16:00-22:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-2",
        inicio: { pk: "102", pop: "Almadrones" },
        fim: { pk: "10,8", pop: "Madrid (enlace M-40)" },
        duracao: "16:00-22:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-3",
        inicio: { pk: "177", pop: "Atalaya del Cañavate" },
        fim: { pk: "6,9", pop: "Madrid (enlace M-40)" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-3",
        inicio: { pk: "25", pop: "Arganda (salida 25)" },
        fim: { pk: "80,4", pop: "Tarancon" },
        duracao: "16:00-24:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-4",
        inicio: { pk: "122", pop: "Madridejos" },
        fim: { pk: "6,7", pop: "Madrid (enlace M-40)" },
        duracao: "16:00-22:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-5",
        inicio: { pk: "126", pop: "Talavera de la Reina" },
        fim: { pk: "11,8", pop: "Madrid (enlace M-40)" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-5",
        inicio: { pk: "15,6", pop: "Madrid (enlace M-50)" },
        fim: { pk: "126", pop: "Talavera de la Reina" },
        duracao: "16:00-24:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-6",
        inicio: { pk: "184", pop: "Tordesillas (enlace A-62)" },
        fim: { pk: "123", pop: "Arévalo (Ávila)" },
        duracao: "16:00-23:00",
        sentido: "Sentido Madrid",
      },
      {
        ctra: "A-6",
        inicio: { pk: "123", pop: "Arévalo" },
        fim: { pk: "110", pop: "Adanero" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "AP-6",
        inicio: { pk: "110", pop: "Adanero" },
        fim: { pk: "60,5", pop: "San Rafael" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-6",
        inicio: { pk: "22,3", pop: "Las Rozas (enlace M-50)" },
        fim: { pk: "6,8", pop: "Madrid" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "N-6",
        inicio: { pk: "110", pop: "Adanero" },
        fim: { pk: "42,5", pop: "Collado Villalba" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "AP-51",
        inicio: { pk: "104,8", pop: "Ávila" },
        fim: { pk: "81,8", pop: "Villacastín (enlace AP-6)" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "AP-6",
        inicio: { pk: "188,55", pop: "Segovia" },
        fim: { pk: "61,50", pop: "San Rafael (enlace AP-6)" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "N-110",
        inicio: { pk: "246", pop: "Berrocalejo Aragona" },
        fim: { pk: "228", pop: "Villacastín (enlace AP-6)" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "N-603",
        inicio: { pk: "74,9", pop: "Otero de Herreros" },
        fim: { pk: "64", pop: "San Rafael (enlace AP-6)" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "M-501",
        inicio: { pk: "59,5", pop: "S. Martín de Valdeiglesias" },
        fim: { pk: "0", pop: "Madrid (enlace M-40)" },
        duracao: "16:00-22:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-62",
        inicio: { pk: "151", pop: "Tordesillas" },
        fim: { pk: "125", pop: "Valladolid" },
        duracao: "15:00-23:00",
        sentido: "Burgos",
      },
      {
        ctra: "A-1",
        inicio: { pk: "242", pop: "Burgos-Castañares" },
        fim: { pk: "249", pop: "Rubena" },
        duracao: "16:00-21:00",
        sentido: "Vitoria",
      },
      {
        ctra: "AP-1",
        inicio: { pk: "0", pop: "Burgos-Castañares" },
        fim: { pk: "77", pop: "Miranda de Ebro" },
        duracao: "16:00-21:00",
        sentido: "Vitoria",
      },
      {
        ctra: "N-1",
        inicio: { pk: "249", pop: "Rubena" },
        fim: { pk: "321,45", pop: "Límite provincias Burgos-Álava" },
        duracao: "16:00-21:00",
        sentido: "Vitoria",
      },
      {
        ctra: "N-1",
        inicio: { pk: "329,4", pop: "Límite provincias Álava-Burgos" },
        fim: { pk: "336,2", pop: "Treviño" },
        duracao: "16:00-21:00",
        sentido: "Vitoria",
      },
      {
        ctra: "A-8",
        inicio: { pk: "169", pop: "Laredo" },
        fim: { pk: "139,2", pop: "Castro-Urdiales" },
        duracao: "16:00-21:00",
        sentido: "Bilbao",
      },
      {
        ctra: "A-3",
        inicio: { pk: "352", pop: "Valencia" },
        fim: { pk: "292", pop: "Requena" },
        duracao: "09:00-21:00",
        sentido: "Salida Valencia",
      },
      {
        ctra: "A-3",
        inicio: { pk: "275", pop: "Utiel" },
        fim: { pk: "352", pop: "Valencia" },
        duracao: "13:00-21:00",
        sentido: "Entrada Valencia",
      },
      {
        ctra: "N-230",
        inicio: { pk: "149,2", pop: "Aneto" },
        fim: { pk: "133,6", pop: "Ginaste" },
        duracao: "13:00-20:00",
        sentido: "Benabarre",
      },
      {
        ctra: "N-230",
        inicio: { pk: "120,9", pop: "Bonansa" },
        fim: { pk: "119,5", pop: "Buira" },
        duracao: "13:00-20:00",
        sentido: "Benabarre",
      },
      {
        ctra: "N-230",
        inicio: { pk: "116,1", pop: "Santoréns" },
        fim: { pk: "64,1", pop: "Benabarre" },
        duracao: "13:00-20:00",
        sentido: "Benabarre",
      },
    ],
  },
  {
    id: "festa-todos-santos-30out",
    tipo: "dataEspecifica",
    data: dRange(10, 30, 10, 30),
    titulo: "Sexta 30 de Outubro — Festividade 1º Novembro",
    estradas: [
      {
        ctra: "A-6 / AP-6",
        inicio: { pk: "11,65", pop: "Madrid (enlace M-40)" },
        fim: { pk: "61,3", pop: "San Rafael" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "AP-6 / A-6",
        inicio: { pk: "61,3", pop: "San Rafael" },
        fim: { pk: "182", pop: "Tordesillas (enlace A-62)" },
        duracao: "16:00-22:00",
        sentido: "A Coruña",
      },
      {
        ctra: "A-1",
        inicio: { pk: "11,8", pop: "Madrid (enlace M-40)" },
        fim: { pk: "50", pop: "Venturada" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-2",
        inicio: { pk: "18,3", pop: "Madrid (enlace M-45)" },
        fim: { pk: "38,7", pop: "Meco" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "R-2",
        inicio: { pk: "17,1", pop: "Madrid (enlace M-50)" },
        fim: { pk: "37,5", pop: "Meco" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-3",
        inicio: { pk: "13", pop: "Madrid (enlace M-50)" },
        fim: { pk: "80,4", pop: "Tarancon" },
        duracao: "16:00-22:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "R-3",
        inicio: { pk: "7,3", pop: "Madrid (enlace M-50)" },
        fim: { pk: "29,4", pop: "Arganda" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-4",
        inicio: { pk: "17,3", pop: "Madrid (enlace M-50)" },
        fim: { pk: "62", pop: "Ocaña" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "R-4",
        inicio: { pk: "0", pop: "Madrid (enlace M-50)" },
        fim: { pk: "52,5", pop: "Dosbarrios" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-5",
        inicio: { pk: "15,6", pop: "Madrid (enlace M-50)" },
        fim: { pk: "106", pop: "Talavera de la Reina" },
        duracao: "16:00-22:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "R-5",
        inicio: { pk: "15", pop: "Arroyomolinos (enlace AP-41)" },
        fim: { pk: "30,5", pop: "Navalcarnero" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "N-6",
        inicio: { pk: "42,5", pop: "Collado Villalba" },
        fim: { pk: "62,5", pop: "San Rafael" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "M-501",
        inicio: { pk: "4", pop: "Madrid (enlace M-50)" },
        fim: { pk: "59,5", pop: "San Martín de Valdeiglesias" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-62",
        inicio: { pk: "113", pop: "Cabezón de Pisuerga" },
        fim: { pk: "151", pop: "Tordesillas" },
        duracao: "15:00-23:00",
        sentido: "fronteira Portugal",
      },
      {
        ctra: "A-3",
        inicio: { pk: "275", pop: "Utiel" },
        fim: { pk: "352", pop: "Valencia" },
        duracao: "15:00-22:00",
        sentido: "Entrada Valencia",
      },
      {
        ctra: "A-8",
        inicio: { pk: "139,2", pop: "Castro-Urdiales" },
        fim: { pk: "169", pop: "Laredo" },
        duracao: "17:00-21:00",
        sentido: "Santander",
      },
    ],
  },
  {
    id: "festa-todos-santos-31out",
    tipo: "dataEspecifica",
    data: dRange(10, 31, 10, 31),
    titulo: "Sábado 31 de Outubro — Festividade 1º Novembro",
    estradas: [
      {
        ctra: "A-6 / AP-6",
        inicio: { pk: "11,65", pop: "Madrid (enlace M-40)" },
        fim: { pk: "61,3", pop: "San Rafael" },
        duracao: "08:00-15:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "AP-6 / A-6",
        inicio: { pk: "61,3", pop: "San Rafael" },
        fim: { pk: "182", pop: "Tordesillas (enlace A-62)" },
        duracao: "08:00-15:00",
        sentido: "A Coruña",
      },
      {
        ctra: "A-1",
        inicio: { pk: "11,8", pop: "Madrid (enlace M-40)" },
        fim: { pk: "50", pop: "Venturada" },
        duracao: "08:00-15:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-2",
        inicio: { pk: "18,3", pop: "Madrid (enlace M-45)" },
        fim: { pk: "38,7", pop: "Meco" },
        duracao: "08:00-13:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "R-2",
        inicio: { pk: "17,1", pop: "Madrid (enlace M-50)" },
        fim: { pk: "37,5", pop: "Meco" },
        duracao: "08:00-13:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-3",
        inicio: { pk: "13", pop: "Madrid (enlace M-50)" },
        fim: { pk: "80,4", pop: "Tarancon" },
        duracao: "08:00-13:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "R-3",
        inicio: { pk: "7,3", pop: "Madrid (enlace M-50)" },
        fim: { pk: "29,4", pop: "Arganda" },
        duracao: "08:00-13:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-4",
        inicio: { pk: "17,3", pop: "Madrid (enlace M-50)" },
        fim: { pk: "62", pop: "Ocaña" },
        duracao: "08:00-13:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "R-4",
        inicio: { pk: "0", pop: "Madrid (enlace M-50)" },
        fim: { pk: "52,5", pop: "Dosbarrios" },
        duracao: "08:00-13:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-5",
        inicio: { pk: "15,6", pop: "Madrid (enlace M-50)" },
        fim: { pk: "106", pop: "Talavera de la Reina" },
        duracao: "08:00-15:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "R-5",
        inicio: { pk: "15", pop: "Arroyomolinos (enlace AP-41)" },
        fim: { pk: "30,5", pop: "Navalcarnero" },
        duracao: "08:00-15:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "N-6",
        inicio: { pk: "42,5", pop: "Collado Villalba" },
        fim: { pk: "62,5", pop: "San Rafael" },
        duracao: "08:00-15:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "M-501",
        inicio: { pk: "4", pop: "Madrid (enlace M-50)" },
        fim: { pk: "59,5", pop: "San Martín de Valdeiglesias" },
        duracao: "08:00-13:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-62",
        inicio: { pk: "113", pop: "Cabezón de Pisuerga" },
        fim: { pk: "151", pop: "Tordesillas" },
        duracao: "08:00-15:00",
        sentido: "fronteira Portugal",
      },
      {
        ctra: "A-8",
        inicio: { pk: "139,2", pop: "Castro-Urdiales" },
        fim: { pk: "169", pop: "Laredo" },
        duracao: "11:00-14:00",
        sentido: "Santander",
      },
    ],
  },
  {
    id: "festa-todos-santos-1nov",
    tipo: "dataEspecifica",
    data: dRange(11, 1, 11, 1),
    titulo: "Domingo 1 de Novembro — Festividade 1º Novembro",
    estradas: [
      {
        ctra: "A-8",
        inicio: { pk: "169", pop: "Laredo" },
        fim: { pk: "139,2", pop: "Castro-Urdiales" },
        duracao: "16:00-21:00",
        sentido: "Bilbao",
      },
    ],
  },
  {
    id: "festa-todos-santos-2nov",
    tipo: "dataEspecifica",
    data: dRange(11, 2, 11, 2),
    titulo: "Segunda 2 de Novembro — Festividade 1º Novembro",
    estradas: [
      {
        ctra: "A-1",
        inicio: { pk: "118,3", pop: "Bocequillas" },
        fim: { pk: "11,8", pop: "Madrid (enlace M-40)" },
        duracao: "16:00-22:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-2",
        inicio: { pk: "107", pop: "Mirabueno" },
        fim: { pk: "10,8", pop: "Madrid (enlace M-40)" },
        duracao: "16:00-22:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-3",
        inicio: { pk: "177", pop: "Atalaya del Cañavate" },
        fim: { pk: "6,9", pop: "Madrid (enlace M-40)" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-3",
        inicio: { pk: "25", pop: "Arganda (salida 25)" },
        fim: { pk: "80,4", pop: "Tarancon" },
        duracao: "16:00-24:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-4",
        inicio: { pk: "122", pop: "Madridejos" },
        fim: { pk: "6,7", pop: "Madrid (enlace M-40)" },
        duracao: "16:00-22:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-5",
        inicio: { pk: "126", pop: "Talavera de la Reina" },
        fim: { pk: "11,8", pop: "Madrid (enlace M-40)" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-5",
        inicio: { pk: "15,6", pop: "Madrid (enlace M-50)" },
        fim: { pk: "126", pop: "Talavera de la Reina" },
        duracao: "16:00-24:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-6",
        inicio: { pk: "184", pop: "Tordesillas (enlace A-62)" },
        fim: { pk: "123", pop: "Arévalo (Ávila)" },
        duracao: "16:00-23:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-6",
        inicio: { pk: "123", pop: "Arévalo" },
        fim: { pk: "110", pop: "Adanero" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "AP-6",
        inicio: { pk: "110", pop: "Adanero" },
        fim: { pk: "60,5", pop: "San Rafael" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-6",
        inicio: { pk: "22,3", pop: "Las Rozas (enlace M-50)" },
        fim: { pk: "6,8", pop: "Madrid" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "N-6",
        inicio: { pk: "110", pop: "Adanero" },
        fim: { pk: "42,5", pop: "Collado Villalba" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "AP-51",
        inicio: { pk: "104,8", pop: "Ávila" },
        fim: { pk: "81,8", pop: "Villacastín (enlace AP-6)" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "AP-6",
        inicio: { pk: "188,55", pop: "Segovia" },
        fim: { pk: "61,50", pop: "San Rafael (enlace AP-6)" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "N-110",
        inicio: { pk: "246", pop: "Berrocalejo Aragona" },
        fim: { pk: "228", pop: "Villacastín (enlace AP-6)" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "N-603",
        inicio: { pk: "74,9", pop: "Otero de Herreros" },
        fim: { pk: "64", pop: "San Rafael (enlace AP-6)" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "M-501",
        inicio: { pk: "59,5", pop: "S. Martín de Valdeiglesias" },
        fim: { pk: "0", pop: "Madrid (enlace M-40)" },
        duracao: "16:00-22:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-62",
        inicio: { pk: "155", pop: "Tordesillas (enlace A-6)" },
        fim: { pk: "125", pop: "Valladolid" },
        duracao: "16:00-23:00",
        sentido: "Burgos",
      },
      {
        ctra: "A-1",
        inicio: { pk: "242", pop: "Burgos-Castañares" },
        fim: { pk: "249", pop: "Rubena" },
        duracao: "16:00-21:00",
        sentido: "Vitoria",
      },
      {
        ctra: "AP-1",
        inicio: { pk: "0", pop: "Burgos-Castañares" },
        fim: { pk: "77", pop: "Miranda de Ebro" },
        duracao: "16:00-21:00",
        sentido: "Vitoria",
      },
      {
        ctra: "N-1",
        inicio: { pk: "249", pop: "Rubena" },
        fim: { pk: "321,45", pop: "Límite provincias Burgos-Álava" },
        duracao: "16:00-21:00",
        sentido: "Vitoria",
      },
      {
        ctra: "N-1",
        inicio: { pk: "329,4", pop: "Límite provincias Álava-Burgos" },
        fim: { pk: "336,2", pop: "Treviño" },
        duracao: "16:00-21:00",
        sentido: "Vitoria",
      },
      {
        ctra: "A-3",
        inicio: { pk: "352", pop: "Valencia" },
        fim: { pk: "292", pop: "Requena" },
        duracao: "15:00-21:00",
        sentido: "Salida Valencia",
      },
    ],
  },
  {
    id: "motogp-valencia-20nov",
    tipo: "dataEspecifica",
    data: dRange(11, 20, 11, 20),
    titulo:
      "Sexta 20 de Novembro — Gran Prémio Motociclismo Comunitat Valenciana",
    estradas: [
      {
        ctra: "CV-50",
        inicio: { pk: "72,5", pop: "Cheste" },
        fim: { pk: "76", pop: "Cheste" },
        duracao: "17:00-24:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "CV-378",
        inicio: { pk: "0,5", pop: "Cheste" },
        fim: { pk: "4,9", pop: "Cheste" },
        duracao: "17:00-22:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "CV-383",
        inicio: { pk: "0,0", pop: "Cheste" },
        fim: { pk: "11,6", pop: "Loriguilla" },
        duracao: "07:00-24:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "CV-386",
        inicio: { pk: "0,0", pop: "Chiva" },
        fim: { pk: "0,930", pop: "Cheste" },
        duracao: "06:00-20:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "CV-3845",
        inicio: { pk: "0,0", pop: "Cheste" },
        fim: { pk: "3,5", pop: "Cheste" },
        duracao: "07:00-24:00",
        sentido: "Ambos sentidos",
      },
    ],
  },
  {
    id: "motogp-valencia-21nov",
    tipo: "dataEspecifica",
    data: dRange(11, 21, 11, 21),
    titulo:
      "Sábado 21 de Novembro — Gran Prémio Motociclismo Comunitat Valenciana",
    estradas: [
      {
        ctra: "A-3",
        inicio: { pk: "352", pop: "Valencia" },
        fim: { pk: "319", pop: "Buñol" },
        duracao: "07:00-14:00",
        sentido: "Salida Valencia",
      },
      {
        ctra: "A-3",
        inicio: { pk: "275", pop: "Utiel" },
        fim: { pk: "352", pop: "Valencia" },
        duracao: "14:00-22:00",
        sentido: "Entrada Valencia",
      },
      {
        ctra: "CV-50",
        inicio: { pk: "72,5", pop: "Cheste" },
        fim: { pk: "76", pop: "Cheste" },
        duracao: "00:00-06:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "CV-50",
        inicio: { pk: "72,5", pop: "Cheste" },
        fim: { pk: "76", pop: "Cheste" },
        duracao: "17:00-24:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "CV-378",
        inicio: { pk: "0,5", pop: "Cheste" },
        fim: { pk: "4,9", pop: "Cheste" },
        duracao: "06:00-22:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "CV-383",
        inicio: { pk: "0,0", pop: "Cheste" },
        fim: { pk: "11,6", pop: "Loriguilla" },
        duracao: "00:00-24:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "CV-386",
        inicio: { pk: "0,0", pop: "Chiva" },
        fim: { pk: "0,930", pop: "Cheste" },
        duracao: "06:00-20:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "CV-3845",
        inicio: { pk: "0,0", pop: "Cheste" },
        fim: { pk: "3,5", pop: "Cheste" },
        duracao: "07:00-24:00",
        sentido: "Ambos sentidos",
      },
    ],
  },
  {
    id: "motogp-valencia-22nov",
    tipo: "dataEspecifica",
    data: dRange(11, 22, 11, 22),
    titulo:
      "Domingo 22 de Novembro — Gran Prémio Motociclismo Comunitat Valenciana",
    estradas: [
      {
        ctra: "A-3",
        inicio: { pk: "352", pop: "Valencia" },
        fim: { pk: "319", pop: "Buñol" },
        duracao: "07:00-18:00",
        sentido: "Salida Valencia",
      },
      {
        ctra: "A-3",
        inicio: { pk: "275", pop: "Utiel" },
        fim: { pk: "352", pop: "Valencia" },
        duracao: "14:00-22:00",
        sentido: "Entrada Valencia",
      },
      {
        ctra: "CV-50",
        inicio: { pk: "72,5", pop: "Cheste" },
        fim: { pk: "76", pop: "Cheste" },
        duracao: "00:00-20:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "CV-378",
        inicio: { pk: "0,5", pop: "Cheste" },
        fim: { pk: "4,9", pop: "Cheste" },
        duracao: "06:00-18:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "CV-383",
        inicio: { pk: "0,0", pop: "Cheste" },
        fim: { pk: "11,6", pop: "Loriguilla" },
        duracao: "00:00-20:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "CV-386",
        inicio: { pk: "0,0", pop: "Chiva" },
        fim: { pk: "0,930", pop: "Cheste" },
        duracao: "06:00-20:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "CV-3845",
        inicio: { pk: "0,0", pop: "Cheste" },
        fim: { pk: "3,5", pop: "Cheste" },
        duracao: "07:00-20:00",
        sentido: "Ambos sentidos",
      },
    ],
  },
  {
    id: "constituicao-4dez",
    tipo: "dataEspecifica",
    data: dRange(12, 4, 12, 4),
    titulo: "Sexta 4 de Dezembro — Festividade Constituição e Imaculada",
    estradas: [
      {
        ctra: "A-6 / AP-6",
        inicio: { pk: "11,65", pop: "Madrid (enlace M-40)" },
        fim: { pk: "61,3", pop: "San Rafael" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "AP-6 / A-6",
        inicio: { pk: "61,3", pop: "San Rafael" },
        fim: { pk: "182", pop: "Tordesillas (enlace A-62)" },
        duracao: "16:00-22:00",
        sentido: "A Coruña",
      },
      {
        ctra: "A-1",
        inicio: { pk: "11,8", pop: "Madrid (enlace M-40)" },
        fim: { pk: "50", pop: "Venturada" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-2",
        inicio: { pk: "18,3", pop: "Madrid (enlace M-45)" },
        fim: { pk: "38,7", pop: "Meco" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "R-2",
        inicio: { pk: "17,1", pop: "Madrid (enlace M-50)" },
        fim: { pk: "37,5", pop: "Meco" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-3",
        inicio: { pk: "13", pop: "Madrid (enlace M-50)" },
        fim: { pk: "80,4", pop: "Tarancon" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "R-3",
        inicio: { pk: "7,3", pop: "Madrid (enlace M-50)" },
        fim: { pk: "29,4", pop: "Arganda" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-4",
        inicio: { pk: "17,3", pop: "Madrid (enlace M-50)" },
        fim: { pk: "62", pop: "Ocaña" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "R-4",
        inicio: { pk: "0", pop: "Madrid (enlace M-50)" },
        fim: { pk: "52,5", pop: "Dosbarrios" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-5",
        inicio: { pk: "15,6", pop: "Madrid (enlace M-50)" },
        fim: { pk: "106", pop: "Talavera de la Reina" },
        duracao: "16:00-22:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "R-5",
        inicio: { pk: "15", pop: "Arroyomolinos (enlace AP-41)" },
        fim: { pk: "30,5", pop: "Navalcarnero" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "N-6",
        inicio: { pk: "42,5", pop: "Collado Villalba" },
        fim: { pk: "62,5", pop: "San Rafael" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "M-501",
        inicio: { pk: "4", pop: "Madrid (enlace M-50)" },
        fim: { pk: "59,5", pop: "San Martín de Valdeiglesias" },
        duracao: "16:00-22:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-62",
        inicio: { pk: "113", pop: "Cabezón de Pisuerga" },
        fim: { pk: "151", pop: "Tordesillas" },
        duracao: "15:00-23:00",
        sentido: "fronteira Portugal",
      },
      {
        ctra: "N-630",
        inicio: { pk: "10,0", pop: "S. Cebrián de Castro (N-630)" },
        fim: { pk: "57,0", pop: "Rionegro del Puente (N-525)" },
        duracao: "15:00-24:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "A-3",
        inicio: { pk: "275", pop: "Utiel" },
        fim: { pk: "352", pop: "Valencia" },
        duracao: "15:00-22:00",
        sentido: "Entrada Valencia",
      },
      {
        ctra: "A-8",
        inicio: { pk: "139,2", pop: "Castro-Urdiales" },
        fim: { pk: "169", pop: "Laredo" },
        duracao: "17:00-21:00",
        sentido: "Santander",
      },
    ],
  },
  {
    id: "constituicao-5dez",
    tipo: "dataEspecifica",
    data: dRange(12, 5, 12, 5),
    titulo: "Sábado 5 de Dezembro — Festividade Constituição e Imaculada",
    estradas: [
      {
        ctra: "A-6 / AP-6",
        inicio: { pk: "11,65", pop: "Madrid (enlace M-40)" },
        fim: { pk: "61,3", pop: "San Rafael" },
        duracao: "08:00-15:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "AP-6 / A-6",
        inicio: { pk: "61,3", pop: "San Rafael" },
        fim: { pk: "182", pop: "Tordesillas (enlace A-62)" },
        duracao: "08:00-15:00",
        sentido: "A Coruña",
      },
      {
        ctra: "A-1",
        inicio: { pk: "11,8", pop: "Madrid (enlace M-40)" },
        fim: { pk: "50", pop: "Venturada" },
        duracao: "08:00-15:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-2",
        inicio: { pk: "18,3", pop: "Madrid (enlace M-45)" },
        fim: { pk: "38,7", pop: "Meco" },
        duracao: "08:00-13:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "R-2",
        inicio: { pk: "17,1", pop: "Madrid (enlace M-50)" },
        fim: { pk: "37,5", pop: "Meco" },
        duracao: "08:00-13:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-3",
        inicio: { pk: "13", pop: "Madrid (enlace M-50)" },
        fim: { pk: "80,4", pop: "Tarancon" },
        duracao: "08:00-13:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "R-3",
        inicio: { pk: "7,3", pop: "Madrid (enlace M-50)" },
        fim: { pk: "29,4", pop: "Arganda" },
        duracao: "08:00-13:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-4",
        inicio: { pk: "17,3", pop: "Madrid (enlace M-50)" },
        fim: { pk: "62", pop: "Ocaña" },
        duracao: "08:00-13:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "R-4",
        inicio: { pk: "0", pop: "Madrid (enlace M-50)" },
        fim: { pk: "52,5", pop: "Dosbarrios" },
        duracao: "08:00-13:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-5",
        inicio: { pk: "15,6", pop: "Madrid (enlace M-50)" },
        fim: { pk: "106", pop: "Talavera de la Reina" },
        duracao: "08:00-15:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "R-5",
        inicio: { pk: "15", pop: "Arroyomolinos (enlace AP-41)" },
        fim: { pk: "30,5", pop: "Navalcarnero" },
        duracao: "08:00-15:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "N-6",
        inicio: { pk: "42,5", pop: "Collado Villalba" },
        fim: { pk: "62,5", pop: "San Rafael" },
        duracao: "08:00-15:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "M-501",
        inicio: { pk: "4", pop: "Madrid (enlace M-50)" },
        fim: { pk: "59,5", pop: "San Martín de Valdeiglesias" },
        duracao: "08:00-13:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-62",
        inicio: { pk: "113", pop: "Cabezón de Pisuerga" },
        fim: { pk: "151", pop: "Tordesillas" },
        duracao: "08:00-15:00",
        sentido: "fronteira Portugal",
      },
      {
        ctra: "A-8",
        inicio: { pk: "139,2", pop: "Castro-Urdiales" },
        fim: { pk: "169", pop: "Laredo" },
        duracao: "11:00-14:00",
        sentido: "Santander",
      },
    ],
  },
  {
    id: "constituicao-6dez",
    tipo: "dataEspecifica",
    data: dRange(12, 6, 12, 6),
    titulo: "Domingo 6 de Dezembro — Festividade Constituição e Imaculada",
    estradas: [
      {
        ctra: "A-8",
        inicio: { pk: "169", pop: "Laredo" },
        fim: { pk: "139,2", pop: "Castro-Urdiales" },
        duracao: "16:00-21:00",
        sentido: "Bilbao",
      },
    ],
  },
  {
    id: "constituicao-8dez",
    tipo: "dataEspecifica",
    data: dRange(12, 8, 12, 8),
    titulo: "Terça 8 de Dezembro — Festividade Constituição e Imaculada",
    estradas: [
      {
        ctra: "A-1",
        inicio: { pk: "118,3", pop: "Boceguillas" },
        fim: { pk: "11,8", pop: "Madrid (enlace M-40)" },
        duracao: "16:00-22:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-2",
        inicio: { pk: "107", pop: "Mirabueno" },
        fim: { pk: "10,8", pop: "Madrid (enlace M-40)" },
        duracao: "16:00-22:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-3",
        inicio: { pk: "177", pop: "Atalaya del Cañavate" },
        fim: { pk: "6,9", pop: "Madrid (enlace M-40)" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-3",
        inicio: { pk: "25", pop: "Arganda (salida 25)" },
        fim: { pk: "80,4", pop: "Tarancon" },
        duracao: "16:00-24:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-4",
        inicio: { pk: "122", pop: "Madridejos" },
        fim: { pk: "6,7", pop: "Madrid (enlace M-40)" },
        duracao: "16:00-22:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-5",
        inicio: { pk: "126", pop: "Talavera de la Reina" },
        fim: { pk: "11,8", pop: "Madrid (enlace M-40)" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-5",
        inicio: { pk: "15,6", pop: "Madrid (enlace M-50)" },
        fim: { pk: "126", pop: "Talavera de la Reina" },
        duracao: "16:00-24:00",
        sentido: "Salida Madrid",
      },
      {
        ctra: "A-6",
        inicio: { pk: "184", pop: "Tordesillas (enlace A-62)" },
        fim: { pk: "123", pop: "Arévalo" },
        duracao: "16:00-23:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-6",
        inicio: { pk: "123", pop: "Arévalo" },
        fim: { pk: "110", pop: "Adanero" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "AP-6",
        inicio: { pk: "110", pop: "Adanero" },
        fim: { pk: "60,5", pop: "San Rafael" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-6",
        inicio: { pk: "22,3", pop: "Las Rozas (enlace M-50)" },
        fim: { pk: "6,8", pop: "Madrid" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "N-6",
        inicio: { pk: "110", pop: "Adanero" },
        fim: { pk: "42,5", pop: "Collado Villalba" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "AP-51",
        inicio: { pk: "104,8", pop: "Ávila" },
        fim: { pk: "81,8", pop: "Villacastín (enlace AP-6)" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "AP-6",
        inicio: { pk: "188,55", pop: "Segovia" },
        fim: { pk: "61,50", pop: "San Rafael (enlace AP-6)" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "N-110",
        inicio: { pk: "246", pop: "Berrocalejo Aragona" },
        fim: { pk: "228", pop: "Villacastín (enlace AP-6)" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "N-603",
        inicio: { pk: "74,9", pop: "Otero de Herreros" },
        fim: { pk: "64", pop: "San Rafael (enlace AP-6)" },
        duracao: "16:00-24:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "M-501",
        inicio: { pk: "59,5", pop: "S. Martín de Valdeiglesias" },
        fim: { pk: "0", pop: "Madrid (enlace M-40)" },
        duracao: "16:00-22:00",
        sentido: "Entrada Madrid",
      },
      {
        ctra: "A-62",
        inicio: { pk: "155", pop: "Tordesillas (enlace A-6)" },
        fim: { pk: "125", pop: "Valladolid" },
        duracao: "16:00-23:00",
        sentido: "Burgos",
      },
      {
        ctra: "A-3",
        inicio: { pk: "352", pop: "Valencia" },
        fim: { pk: "292", pop: "Requena" },
        duracao: "13:00-21:00",
        sentido: "Salida Valencia",
      },
      {
        ctra: "A-3",
        inicio: { pk: "275", pop: "Utiel" },
        fim: { pk: "352", pop: "Valencia" },
        duracao: "17:00-21:00",
        sentido: "Entrada Valencia",
      },
      {
        ctra: "A-4",
        inicio: { pk: "323", pop: "Andújar" },
        fim: { pk: "230", pop: "Almuradiel" },
        duracao: "09:00-22:00",
        sentido: "Sentido Madrid",
      },
      {
        ctra: "A-4",
        inicio: { pk: "230", pop: "Almuradiel" },
        fim: { pk: "300", pop: "Bailén" },
        duracao: "09:00-22:00",
        sentido: "Sentido Sevilla",
      },
      {
        ctra: "A-44",
        inicio: { pk: "36", pop: "Jaén" },
        fim: { pk: "0", pop: "Bailén" },
        duracao: "09:00-22:00",
        sentido: "Sentido Bailén",
      },
      {
        ctra: "A-1",
        inicio: { pk: "242", pop: "Burgos-Castañares" },
        fim: { pk: "249", pop: "Rubena" },
        duracao: "16:00-21:00",
        sentido: "Vitoria",
      },
      {
        ctra: "AP-1",
        inicio: { pk: "0", pop: "Burgos-Castañares" },
        fim: { pk: "77", pop: "Miranda de Ebro" },
        duracao: "16:00-21:00",
        sentido: "Vitoria",
      },
      {
        ctra: "N-1",
        inicio: { pk: "249", pop: "Rubena" },
        fim: { pk: "321,45", pop: "Límite provincias Burgos-Álava" },
        duracao: "16:00-21:00",
        sentido: "Vitoria",
      },
      {
        ctra: "N-1",
        inicio: { pk: "329,4", pop: "Límite provincias Álava-Burgos" },
        fim: { pk: "336,2", pop: "Treviño" },
        duracao: "16:00-21:00",
        sentido: "Vitoria",
      },
      {
        ctra: "N-630",
        inicio: { pk: "10,0", pop: "S. Cebrián de Castro (N-630)" },
        fim: { pk: "57,0", pop: "Rionegro del Puente (N-525)" },
        duracao: "07:00-24:00",
        sentido: "Ambos sentidos",
      },
      {
        ctra: "A-8",
        inicio: { pk: "169", pop: "Laredo" },
        fim: { pk: "139,2", pop: "Castro-Urdiales" },
        duracao: "16:00-21:00",
        sentido: "Bilbao",
      },
      {
        ctra: "N-230",
        inicio: { pk: "149,2", pop: "Aneto" },
        fim: { pk: "133,6", pop: "Ginaste" },
        duracao: "13:00-20:00",
        sentido: "Benabarre",
      },
      {
        ctra: "N-230",
        inicio: { pk: "120,9", pop: "Bonansa" },
        fim: { pk: "119,5", pop: "Buira" },
        duracao: "13:00-20:00",
        sentido: "Benabarre",
      },
      {
        ctra: "N-230",
        inicio: { pk: "116,1", pop: "Santoréns" },
        fim: { pk: "64,1", pop: "Benabarre" },
        duracao: "13:00-20:00",
        sentido: "Benabarre",
      },
    ],
  },
  {
    id: "constituicao-24dez",
    tipo: "dataEspecifica",
    data: dRange(12, 24, 12, 24),
    titulo: "Quinta 24 de Dezembro",
    estradas: [
      {
        ctra: "N-230",
        inicio: { pk: "64,1", pop: "Benabarre" },
        fim: { pk: "116,1", pop: "Santoréns" },
        duracao: "17:00-24:00",
        sentido: "fronteira França",
      },
      {
        ctra: "N-230",
        inicio: { pk: "119,5", pop: "Buira" },
        fim: { pk: "120,9", pop: "Bonansa" },
        duracao: "17:00-24:00",
        sentido: "fronteira França",
      },
      {
        ctra: "N-230",
        inicio: { pk: "133,6", pop: "Ginaste" },
        fim: { pk: "149,2", pop: "Aneto" },
        duracao: "17:00-24:00",
        sentido: "fronteira França",
      },
    ],
  },
  {
    id: "constituicao-31dez",
    tipo: "dataEspecifica",
    data: dRange(12, 31, 12, 31),
    titulo: "Quinta 31 de Dezembro",
    estradas: [
      {
        ctra: "N-230",
        inicio: { pk: "64,1", pop: "Benabarre" },
        fim: { pk: "116,1", pop: "Santoréns" },
        duracao: "17:00-24:00",
        sentido: "fronteira França",
      },
      {
        ctra: "N-230",
        inicio: { pk: "119,5", pop: "Buira" },
        fim: { pk: "120,9", pop: "Bonansa" },
        duracao: "17:00-24:00",
        sentido: "fronteira França",
      },
      {
        ctra: "N-230",
        inicio: { pk: "133,6", pop: "Ginaste" },
        fim: { pk: "149,2", pop: "Aneto" },
        duracao: "17:00-24:00",
        sentido: "fronteira França",
      },
    ],
  },
];

// ===== FUNÇÕES AUXILIARES =====

/**
 * Retorna todas as ocorrências futuras de uma restrição genérica
 * para os próximos N dias
 */
function ocorrenciasFuturas(restricao, diasFuturos = 60) {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const fim = new Date(hoje);
  fim.setDate(fim.getDate() + diasFuturos);

  const ocorrencias = [];
  const rec = restricao.recorrencia;
  if (!rec) return ocorrencias;

  for (let d = new Date(hoje); d <= fim; d.setDate(d.getDate() + 1)) {
    const mes = d.getMonth() + 1;
    const dia = d.getDate();
    const diaSemana = d.getDay(); // 0=domingo, 5=sexta, 6=sábado
    let match = false;

    switch (rec.tipo) {
      case "diaSemana":
        if (rec.meses.includes(mes) && diaSemana === rec.diaSemana) {
          if (rec.apenasDezembro && mes === 12) {
            match =
              dia >= rec.apenasDezembro.inicio && dia <= rec.apenasDezembro.fim;
          } else {
            match = true;
          }
        }
        break;
      case "fimSemanaFestivo":
        if (rec.meses.includes(mes) && (diaSemana === 0 || diaSemana === 6)) {
          match = true;
        }
        break;
      case "domingoFestivo":
        if (rec.meses.includes(mes) && diaSemana === 0) {
          match = true;
        }
        break;
      case "rangeDomingoFestivo": {
        const inicio = new Date(
          ANO_ATUAL,
          rec.dataInicio.mes - 1,
          rec.dataInicio.dia,
        );
        const fimR = new Date(ANO_ATUAL, rec.dataFim.mes - 1, rec.dataFim.dia);
        if (d >= inicio && d <= fimR && diaSemana === 0) match = true;
        break;
      }
    }

    if (match) {
      ocorrencias.push(new Date(d));
    }
  }
  return ocorrencias;
}

/**
 * Verifica se uma restrição específica é futura
 */
function eFutura(restricao) {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  if (restricao.tipo === "dataEspecifica") {
    const [data] = restricao.data;
    return data >= hoje;
  }
  return true;
}

/**
 * Expande todas as restrições em lista plana de ocorrências futuras
 */
function listarRestricoesFuturas(diasFuturos = 60) {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const lista = [];

  for (const r of restricoes) {
    if (r.tipo === "dataEspecifica") {
      if (!eFutura(r)) continue;
      const [data] = r.data;
      lista.push({
        id: r.id,
        titulo: r.titulo,
        tipo: r.tipo,
        data: data,
        dataStr: data.toISOString().slice(0, 10),
        estradas: r.estradas,
        excecao: r.excecao,
      });
    } else {
      const ocorrencias = ocorrenciasFuturas(r, diasFuturos);
      for (const data of ocorrencias) {
        lista.push({
          id: `${r.id}-${data.toISOString().slice(0, 10)}`,
          titulo: r.titulo,
          tipo: r.tipo,
          data: data,
          dataStr: data.toISOString().slice(0, 10),
          estradas: r.estradas,
          excecao: r.excecao,
          generico: true,
        });
      }
    }
  }

  // Ordenar por data
  lista.sort((a, b) => a.data - b.data);
  return lista;
}

export { listarRestricoesFuturas, restricoes, ocorrenciasFuturas, eFutura };
