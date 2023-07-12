// geração do valor aleatório
var y = Math.floor(Math.random() * 10 + 1);
// contagem de tentativas
// até acerto    
var guess = 1;

function submit() {
    var x = document.getElementById("guessField").value;

    if(x == y)
{
    alert("PARABENS!"+player_name+", você acertou em "+ guess + " tentativa(s)");
    guess= 1;
}
else if (x > y) {
    guess++;
    alert("Opa, você errou! Tente um número menor");
}
else
{
    guess++;
    alert("Opa, você errou! Tente um número maior");
}
}
function playAgain() {
     y = Math.floor(Math.random() * 10 + 1);
}
