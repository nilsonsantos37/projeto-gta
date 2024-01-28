//Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma

   // Passo 1 - pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele 
const botao =  document.querySelector(".btn-plataforma"); //pega o botão da pagina html


   // Passo 2 - pegar o elemento do conteudo que precisa ser mostrado
   const elementoPlataformas =  document.querySelector(".btn-plataforma .plataformas"); 
   // Passo 3 - pegar o clique do usuario no js
   botao.addEventListener("click", () => {
   
//Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido

   // Passo 1 - verificar se o botão já esta aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente
elementoPlataformas.classList.toggle("ativo");
});