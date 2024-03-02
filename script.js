function insert(num) {
let numero = document.getElementById('resultado').innerHTML; // declarando para pegar o elemento id resultado e acessar o conteudo html
document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
 document.getElementById('resultado').innerHTML = '';
}


function calcular() {
 const res = document.getElementById('resultado').innerHTML;
if(res) {
 document.getElementById('resultado').innerHTML = eval(res);
} else {
 alert('Coloque algum Calculo!!')
 } 
}

