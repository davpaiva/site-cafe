// ============================================================
// script.js — O COMPORTAMENTO DO SITE
// ============================================================
// O JavaScript faz a página "reagir": montar a lista de
// produtos a partir do dados.js, filtrar, buscar e responder
// ao formulário.
//
// Linhas que começam com // são comentários (o navegador ignora).
// ============================================================


// --- 1. Pegamos as "caixas" do HTML pelo id delas ---
const caixaProdutos = document.getElementById("lista-produtos");
const campoBusca    = document.getElementById("busca");
const avisoVazio    = document.getElementById("nada-encontrado");
const botoesFiltro  = document.querySelectorAll(".filtro");

// Guarda qual categoria está escolhida no momento
let categoriaAtual = "Todos";


// --- 2. Transforma um número em preço brasileiro: 6.5 -> "R$ 6,50" ---
function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}


// --- 3. Desenha os cartões de produto na tela ---
function mostrarProdutos() {
  const textoBuscado = campoBusca.value.toLowerCase(); // o que a pessoa digitou, em minúsculas

  // Filtra a lista: fica só o que combina com a categoria E com a busca
  const filtrados = produtos.filter(function (produto) {
    const combinaCategoria = categoriaAtual === "Todos" || produto.categoria === categoriaAtual;
    const combinaBusca     = produto.nome.toLowerCase().includes(textoBuscado);
    return combinaCategoria && combinaBusca;
  });

  // Monta o HTML de cada cartão
  caixaProdutos.innerHTML = filtrados.map(function (produto) {
    return `
      <article class="cartao">
        ${produto.destaque ? '<span class="etiqueta">★ Destaque</span>' : ""}
        <span class="categoria">${produto.categoria}</span>
        <h3>${produto.nome}</h3>
        <p class="descricao">${produto.descricao}</p>
        <span class="preco">${formatarPreco(produto.preco)}</span>
      </article>
    `;
  }).join("");

  // Se não sobrou nada, mostra o aviso "Nenhum produto encontrado"
  avisoVazio.hidden = filtrados.length > 0;
}


// --- 4. Botões de filtro: ao clicar, troca a categoria ---
botoesFiltro.forEach(function (botao) {
  botao.addEventListener("click", function () {
    botoesFiltro.forEach(b => b.classList.remove("ativo")); // desmarca todos
    botao.classList.add("ativo");                           // marca o clicado
    categoriaAtual = botao.dataset.categoria;               // lê o data-categoria
    mostrarProdutos();
  });
});


// --- 5. Busca: a cada letra digitada, atualiza a lista ---
campoBusca.addEventListener("input", mostrarProdutos);


// --- 6. Monta a lista de horários ---
document.getElementById("lista-horarios").innerHTML = horarios.map(function (h) {
  return `<li><span>${h.dias}</span><strong>${h.horas}</strong></li>`;
}).join("");


// --- 7. Formulário de contato (exemplo, não envia de verdade) ---
document.getElementById("formulario").addEventListener("submit", function (evento) {
  evento.preventDefault(); // impede a página de recarregar
  const nome = document.getElementById("nome").value;
  const aviso = document.getElementById("obrigado");
  aviso.textContent = `Obrigado, ${nome}! Recebemos sua mensagem. (Isto é só um exemplo — nada foi enviado.)`;
  aviso.hidden = false;
  this.reset(); // limpa os campos
});


// --- 8. Quando a página abre, mostra todos os produtos ---
mostrarProdutos();
