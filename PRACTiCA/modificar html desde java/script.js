//PARA SELECCIONAR ELEMENTOS DEL HTML Y GUARDARLOS EN VARIABLES

// ¡¡¡IMPORANTE!! GUARDARLOS EN VARIABLES PARA MANIPULARLOS
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
// tmb puedo usar querySelectorAll y ahi me va a seleccionar todas las etiquetas parrafo. Si uso querySelector para clase le tengo que poner .NombreDeLaClase y si lo uso con ID tengo que poner #NombreDelID (Igual que en CSS)
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);  //con eso obtengo el atributo value de una etiqueta input

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
}); //Con esto imprimo como una especie de objeto en el que cada variable que yo declare se me va a imprimir como una propiedad y me va a traer su valor.

h1.innerHTML = 'Patito <br> Feo'; //para introducir codigo html en un html
h1.innerText = 'Patito <br> Feo'; //para introducir texto en un html
//AMBOS REEMPLAZAN EL CONTENIDO QUE TUVIERA ESE CONTENEDOR

console.log(h1.getAttribute('class')); //busca el atributo que le indiquemos en la etiqueta
h1.setAttribute('class', 'rojo'); // Cambia o agrega (en el caso de que no tenga) el atributito indicado por el valor que le digamos (ATRIBUTO, VALOR) 
console.log(h1.getAttribute('class')); 



h1.classList.add('rojo'); //Este .classList.add me AGREGA una class (la agrega, osea ademas de la que el elemento ya tenia se le agrega)
h1.classList.remove('verde'); //Con classList.remove remuevo la class que le indico
h1.classList.toggle('verde'); //Agrega o quita la class dependiendo de si la tiene o no. Si la tiene se la quita y si no la tiene se la agrega.
h1.classList.contains('verde'); //devuelve true o false dependiende de si el elemento tiene o no la clase que le indicamos

//Para los atributos de los input, no necesito entrar (como con el getAttribute de otras etiquetas), sino que directamente pongo, por ejemplo, input.value = y le asigno el value que yo quiera modificar
input.value = "456"

document.createElement("img") //document.createElement me crea la etiqueta que yo le indique
// ACA LA GUARDO EN UNA VARIABLE, y ya puedo usarla como cualquier variable de js:
const img = document.createElement('img');
//llamo a mi variable y le hago un setAttribute para ponerle el atributo src y definirselo:
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');

// ACA LO QUE HAGO ES INSERTAR EN LA VARIABLE PID (Que era el parrafo que tiene el ID pid), la img que tengo guardada en la variable img
pid.append(img) //Tambien puedo usar appendChild, no sé cual es la diferencia
//si pongo más de un elemento entre parentesis ej.: (img1, img2), puedo insertar varios elementos

//Pero hasta ahora me lo está agregando al contenido que yo ya tenia en el parafo pid, si yo lo que quiero es reemplazarlo, le voy a poner un innerHTML con un string vacio (eso me va a reemplazar lo que ya tengo en el contenedor, y DESPUEs voy a insertar la imagen)

pid.innerHTML = "";
pid.append(img)
