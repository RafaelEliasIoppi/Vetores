function lerVetor() {
    var inputElement = document.getElementById("inputVector");
    var vetorString = inputElement.value;
    var vetor = vetorString.split(',');
    vetor = vetor.map(function(item) {
        return parseInt(item.trim(), 10);
    });

    var outputElement = document.getElementById("output");
    outputElement.innerHTML = "<div class='output-container'><h2>Vetor Original</h2><p>" + vetor.join(', ') + "</p></div>";

    var pares = vetor.filter(function(num) {
        return num % 2 === 0;
    });
    var impares = vetor.filter(function(num) {
        return num % 2 !== 0;
    });

    outputElement.innerHTML += "<div class='output-container'><h2>Pares</h2><p>" + pares.join(', ') + "</p></div>";

    outputElement.innerHTML += "<div class='output-container'><h2>Ímpares</h2><p>" + impares.join(', ') + "</p></div>";
}