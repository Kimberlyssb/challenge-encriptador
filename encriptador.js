/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"}
*/

const textoIngresado = document.getElementById('textoParaEncriptar');
let noMensaje = document.getElementById('noMensaje');

const encriptar = () => {
    let container = document.getElementById('cuadroResultado');
    let muñeco = document.getElementById('muñeco');
    let copiar = document.getElementById('botonCopiar');

    const contieneMayuscula = /[A-Z]/.test(textoIngresado.value)

    if (contieneMayuscula) {
        alert('No se permiten mayusculas o  caracteres especiales');
        throw new Error('No se permiten mayusculas')
    }

    textoIngresado.value = textoIngresado.value.replace(/e/g, "enter");
    textoIngresado.value = textoIngresado.value.replace(/i/g, "imes");
    textoIngresado.value = textoIngresado.value.replace(/a/g, "ai");
    textoIngresado.value = textoIngresado.value.replace(/o/g, "ober");
    textoIngresado.value = textoIngresado.value.replace(/u/g, "ufat");

    noMensaje.textContent = textoIngresado.value
    textoIngresado.value = ""
    container.removeChild(muñeco)
    copiar.style.display = "inline";

}

let botonEncriptar = document.getElementById('encriptar');
botonEncriptar.addEventListener("click", encriptar);


const desencriptar = () => {
    let container = document.getElementById('cuadroResultado');
    let muñeco = document.getElementById('muñeco');
    let copiar = document.getElementById('botonCopiar');
    // let textoIngresado = document.getElementById('textoParaEncriptar');

    const contieneMayuscula = /[A-Z]/.test(textoIngresado.value)

    if (contieneMayuscula) {
        alert('No se permiten mayusculas o  caracteres especiales');
        throw new Error('No se permiten mayusculas')
    }

    textoIngresado.value = textoIngresado.value.replace(/enter/g, "e");
    textoIngresado.value = textoIngresado.value.replace(/imes/g, "i");
    textoIngresado.value = textoIngresado.value.replace(/ai/g, "a");
    textoIngresado.value = textoIngresado.value.replace(/ober/g, "o");
    textoIngresado.value = textoIngresado.value.replace(/ufat/g, "u");

    noMensaje.textContent = textoIngresado.value
    textoIngresado.value = "";
    container.removeChild(muñeco);
    copiar.style.display = "inline";

}

let botonDesencriptar = document.getElementById('desencriptar');
botonDesencriptar.addEventListener("click", desencriptar);

async function copiar() {
    try {
        await navigator.clipboard.writeText(noMensaje.textContent);
        alert('Contenido copiado al portapapeles');
        /* Resuelto - texto copiado al portapapeles con éxito */
      } catch (err) {
        console.error('Error al copiar: ', err);
        /* Rechazado - fallo al copiar el texto al portapapeles */
      } 
        
}

let botonCopiar = document.getElementById("botonCopiar");
botonCopiar.addEventListener("click", copiar)