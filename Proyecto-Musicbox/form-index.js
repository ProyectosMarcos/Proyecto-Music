// const usuario = document.getElementById("Usuario");
// const correo = document.getElementById("Email");
// const asunto = document.getElementById("Asunto");
// const recomendacíon = document.getElementById("input-recomendacíon");
// const formulario = document.getElementById("formulario");
// const listInputs = document.querySelectorAll(".form-input");

// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let condicion = validacionForm();
//   if (condicion) {
//     enviarFormulario();
//   }
// });

// function validacionForm() {
//   formulario.lastElementChild.innerHTML = "";
//   let condicion = true;
//   listInputs.forEach((element) => {
//     element.lastElementChild.innerHTML = "";
//   });

//   if (correo.value.length < 1 || correo.value.trim() == "") {
//     mostrarMensajeError("Email", "Nombre no valido*");
//     condicion = false;
//   }
  
//   if (usuario.value.length < 1 ||usuario.value.trim() == "") {
//     mostrarMensajeError("Usuario", "Correo no valido*");
//     condicion = false;
//   }
  
//   if (asunto.value.length < 1 || asunto.value.trim() == "") {
//     mostrarMensajeError("Asunto", "Contraseña no valido*");
//     condicion = false;
//   }
 
//   return condicion;
// }

// function mostrarMensajeError(claseInput, mensaje) {
//   let elemento = document.querySelector(`.${claseInput}`);
//   elemento.lastElementChild.innerHTML = mensaje;
// }

// function enviarFormulario() {
//   formulario.reset();
//   formulario.lastElementChild.innerHTML = "Listo!";
// }