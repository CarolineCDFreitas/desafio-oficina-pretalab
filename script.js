/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas.
Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/

let medalhas = {};

while (true) {
    let pais = prompt("Digite o nome do país (ou 'sair' para encerrar):");

    if (pais === 'sair') {
        break;
    }

    let totalMedalhas = prompt("Digite o total de medalhas:");
    medalhas[pais] = totalMedalhas;
}

console.log("#Ranking de medalhas:");
for (let pais in medalhas) {
    console.log(pais + ": " + medalhas[pais] + " medalhas");
}
