// ============================================================
// dados.js — A NOSSA "BASE DE DADOS" DE EXEMPLO
// ============================================================
// Aqui ficam as informações que aparecem no site.
// Tudo é inventado, só para exemplo.
//
// Cada produto fica entre chaves { } e tem:
//   nome       -> o nome do produto (texto, entre aspas)
//   categoria  -> "Cafés", "Salgados" ou "Doces"
//   preco      -> número com PONTO no lugar da vírgula (6.5 = R$ 6,50)
//   descricao  -> uma frase curta
//   destaque   -> true (sim) ou false (não). Os "true" ganham a etiqueta ★
//
// PARA ADICIONAR UM PRODUTO: copie uma linha inteira { ... },
// cole embaixo da última, troque os textos e salve o arquivo.
// Não esqueça a VÍRGULA no final de cada linha!
// ============================================================

const produtos = [
  { nome: "Café expresso",        categoria: "Cafés",    preco: 6.5,  descricao: "Curto e encorpado, tirado na hora.",            destaque: true  },
  { nome: "Cappuccino",           categoria: "Cafés",    preco: 11.0, descricao: "Café, leite vaporizado e um toque de canela.",   destaque: true  },
  { nome: "Café coado",           categoria: "Cafés",    preco: 7.0,  descricao: "Grãos do sul de Minas, coado no filtro de pano.", destaque: false },
  { nome: "Mocha gelado",         categoria: "Cafés",    preco: 14.5, descricao: "Café, chocolate e leite com gelo.",              destaque: false },
  { nome: "Pão de queijo",        categoria: "Salgados", preco: 5.0,  descricao: "Quentinho, saído do forno a cada 30 minutos.",   destaque: true  },
  { nome: "Coxinha de frango",    categoria: "Salgados", preco: 8.5,  descricao: "Massa leve e recheio cremoso.",                  destaque: false },
  { nome: "Misto quente",         categoria: "Salgados", preco: 12.0, descricao: "Pão de forma, presunto e muçarela na chapa.",    destaque: false },
  { nome: "Bolo de cenoura",      categoria: "Doces",    preco: 9.0,  descricao: "Com cobertura de chocolate, fatia generosa.",    destaque: true  },
  { nome: "Brigadeiro gourmet",   categoria: "Doces",    preco: 4.5,  descricao: "Chocolate belga e granulado crocante.",          destaque: false },
  { nome: "Torta de limão",       categoria: "Doces",    preco: 10.5, descricao: "Massa crocante e merengue tostado.",             destaque: false },
];

// Horário de funcionamento (também aparece no site)
const horarios = [
  { dias: "Segunda a sexta", horas: "7h às 19h" },
  { dias: "Sábado",          horas: "8h às 14h" },
  { dias: "Domingo",         horas: "Fechado"   },
];
