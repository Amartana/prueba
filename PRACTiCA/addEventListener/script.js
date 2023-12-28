const h1 = document.querySelector('h1');
const form = document.querySelector('#form'); 
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//SIN FORM:
btn.addEventListener('click', sumarInputValues)
//variableQueTieneGuaradadoElElemento.addEventListener('evento', funcion a ejectutar-SIN LOS PARENTESIS-)

function sumarInputValues() {
     const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
  }

//-------------------------------------------------------------------

  //Si hago un formulario en html, los form por defecto agarran el ultimo boton del formulario y lo convierten en un boton de type "submit", lo que hace que al apretarlo se recargue la pagina por lo que se va a borrar ese pResult
  // Hay DOS formas de resolver eso:
  //    1) Agregarle el atributo type con el valor "bottom" al botton, así le cambiamos el que le atribuye el form por defecto que sería "submit".
  
  // 2) En lugar de escuchar el clik del boton, escuchar el submit del form:
        form.addEventListener('submit', sumarInputValues)
  // La función sumarInputValues no lleva los parentesis porque se los pone automaticamente el navegador. Ese parentesis automatico lleva un parametro, que no vemos pero lo pone el navegador: 
  //                        (Event). 
  // Y el argumento que le va a pasar al ejecutarlo, tambien automaticamente, es: 
  //                (SubmitEvent). 
  //Ese Submit.Event tiene muchas propiedades, una de ellas es la de:
  //                   .preventDefault()
  // (Lo que hace es evitar que se reinicie a página al aprentar el submit). Entonces a la función que tenia, ANTES de darle las intrucciones que de que sume los valores, le digo que haga el preventDefault del evento:
function sumarInputValues(event) {
  event.preventDefault();
console.log({event}); // Con esto puedo ver la lista de propiedades del SubmitEvent.
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}
