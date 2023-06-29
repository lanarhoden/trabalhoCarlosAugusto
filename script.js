function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function calc(){
    var custo = parseFloat(document.getElementById('custo').value);
    var lucro = parseFloat(document.getElementById('lucro').value);
    
    var valorVenda = ((custo / 100) * lucro) + custo;
    
    document.getElementById('venda').value = valorVenda.toFixed(2);
}
function click(){
    event.preventDefault();

    // Obtém os valores dos inputs
    var produto = document.getElementsByName('produto')[0].value;
    var marca = document.querySelector('input[name="marca"]:checked').value;
    var custo = parseFloat(document.getElementsByName('custo')[0].value);
    var lucro = parseFloat(document.getElementsByName('lucro')[0].value);
    var venda = parseFloat(document.getElementsByName('venda')[0].value);
    var quantidade = parseInt(document.getElementsByName('quantidade')[0].value);

    // Cria a div para exibir os valores
    var divValores = document.createElement('div');

    // Insere os valores na div
    divValores.innerHTML = `
        <p>Produto: ${produto}</p>
        <p>Marca: ${marca}</p>
        <p>Custo: R$ ${custo.toFixed(2)}</p>
        <p>Lucro: ${lucro}%</p>
        <p>Venda: R$ ${venda.toFixed(2)}</p>
        <p>Quantidade: ${quantidade}</p>
    `;

    // Adiciona a div na página
    document.body.appendChild(divValores);
};
