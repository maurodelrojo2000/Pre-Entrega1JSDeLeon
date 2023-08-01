let nombre = prompt("Por favor,ingresa tu nombre");
let edad = parseInt(prompt("A continuacion,ingresa tu edad"));
if (edad < 18) {
  alert("No puede usar esta calculadora");
} else if (edad >= 18) {
  alert(nombre + " a continuacion,completa los datos para medir tu I.M.C");
}

let peso = parseInt(prompt("Ingresa tu peso en kg"));
let estatura = parseInt(prompt("Ingresa Tu estatura en cm"));

while (isNaN(peso) || isNaN(estatura)) {
  alert('datos no numéricos')
  peso = parseInt(prompt("Ingresa tu peso en kg"));
  estatura = parseInt(prompt("Ingresa Tu estatura en cm"));
}

function calcularIMC() {
  let resultado = peso / ((estatura / 100) * (estatura / 100));
  return resultado;
}

let imcResultado = calcularIMC();

if (imcResultado < 18.5) {
  alert("Tu peso es bajo");
} else if (imcResultado >= 18.5 && imcResultado < 25) {
  alert("Estas saludable");
} else if (imcResultado >= 25 && imcResultado < 30) {
  alert("Sobrepeso");
} else if (imcResultado >= 30) {
  alert("Obesidad :c");
}

alert(`Tu IMC es: ${imcResultado}`);