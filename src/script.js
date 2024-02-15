function lerVetor() {
    // Obtém o elemento de entrada pelo ID
    var inputElement = document.getElementById("inputVector");

    // Obtém o valor do campo de entrada
    var vetorString = inputElement.value;

    // Divide a string em um vetor de strings separadas por vírgula
    var vetor = vetorString.split(',');

    // Converte as strings do vetor em números
    vetor = vetor.map(function(item) {
          return parseInt(item.trim(), 10);
    });
    var outputElement = document.getElementById("output");
    outputElement.innerText = "Vetor: " + vetor.join(', ');
}