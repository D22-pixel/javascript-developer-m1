
const notas = [lista];

notas.push(10);
notas.push(10);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);

anotações

console.log(aluno.pop()); - tira o ultimo item da lista e coloca separado 
                    shift - pega o primeiro numero da lista em separado
length - mostra tamanho  da lista
