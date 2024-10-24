function criaCartao (categoria, pergunta, resposta) {
    console.log(categoria, pergunta, resposta)
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    cartao.innerHTML = `
    <!-- <article class="cartao">
    <div class="cartao__conteudo"> 
        <h3>${CATEGORIA}</h3>
        <div class="cartao__conteudo__pergunta">
            <P>${PERGUNTA}</P></div>
        <div class="cartao__conteudo__resposta">
            <P>${RESPOSTA}</P></div>
    </div> -->
    `
    container.appendChild(cartao)
}
