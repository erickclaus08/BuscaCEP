function ColetarCEP() {
    let CEP = document.getElementById("CEP").value
    console.log(CEP)
    Dados(CEP)
}

//

async function Dados(CEP) {
   let dados = await fetch(`https://viacep.com.br/ws/${CEP}/json/`).then(response => response.json())
   console.log(dados)
   dadosTela(dados)
}

//
function dadosTela(dados) {
    document.querySelector("#endereco").innerHTML = " Endereço: " + dados.logradouro 
    document.querySelector("#bairro").innerHTML = " Bairro: " + dados.bairro
    document.querySelector("#cidade").innerHTML = " Cidade: " + dados.localidade
    document.querySelector("#estado").innerHTML = " Estado: " + dados.estado
    document.querySelector("#regiao").innerHTML = " Região: " + dados.regiao
}
    