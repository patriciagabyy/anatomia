function mostrarInfo(celula, mensagem) {
  // Verifica se a célula já está clicada
  if (celula.classList.contains("clicked")) {
    // Se sim, volta para o nome original salvo no atributo data-orgao
    celula.innerHTML = celula.getAttribute("data-orgao");
    celula.classList.remove("clicked");
  } else {
    // Se não, exibe a mensagem e adiciona a classe clicked
    celula.innerHTML = mensagem;
    celula.classList.add("clicked");
  }
}
