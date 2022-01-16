const imagem = document.querySelector('img'); /*Cria constante para receber a imagem*/
const botao = document.querySelector('botao'); /*Cria constante para receber o botao*/
const nomeDoPersonagem = document.querySelector('#nome'); /*Captura a li do nome*/
const nomeDoPersonagem = document.querySelector('#especie'); /*Captura a li da especie*/
const nomeDoPersonagem = document.querySelector('#condicao'); /*Captura a li da condicao*/

gerarValorAleatorio = () =>{
    return Math.floor(Math.random() * 671);
}

/* aerow funcion*/
pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
    }); /* retorna os dados da API */
}
botao.onclick = pegarPersonagem;