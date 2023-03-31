function animarTexto() {
  const textoAnimado = document.querySelector(".chamada");

  // Array com os textos que serão animados
  const textos = [
    "Você sabe recorrer ao <span>PROCON</span> quando <span>ALGO DA ERRADO</span> com sua compra?",
    "Sabe quais <span>OUTROS ÓRGÃOS</span> podem te <span>DEFENDER</span> de praticas abusivas?",
    "Tem ideia do que fazer se <span>DESISTIR</span> de uma <span>COMPRA POR IMPULSO</span> online?",
    "Conhece as <span>MELHORES FERRAMENTAS</span> para conseguir <span>DESCONTOS</span>?",
    "Você <span>CONITNUA PAGANDO</span> pra sua <span>INTERNET FICAR CAINDO</span> toda hora?",
  ];

  // Índice do texto atual na lista de textos
  let indiceAtual = 0;

  // Função que atualiza o texto animado com um fade
  function atualizarTexto() {
    textoAnimado.style.opacity = 0;
    setTimeout(function () {
      textoAnimado.innerHTML = textos[indiceAtual];
      indiceAtual = (indiceAtual + 1) % textos.length;
      textoAnimado.style.opacity = 1;
    }, 1500);
  }

  // Inicia a animação
  setInterval(atualizarTexto, 10000);
}

animarTexto();
