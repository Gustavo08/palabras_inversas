function reverseWords () {
   let text = document.querySelector('#input-field').value;

   let response = text
      .split(" ") // dividimos la cadena en un array
      .reverse() // invertimos el array
      .join(" "); // unimos los elementos del array para formar la cadena nuevamente

   document.querySelector('#response').innerHTML = response;
}