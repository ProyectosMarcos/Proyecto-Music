const { createApp } = Vue
createApp({
 data() {
 return {
    nombreLista: "Rock de los 70s",
    descripcion: "Esta lista contiene las verdaderas canciones del rock",
    cantAlbumes:0,
    albumes:[
    ]
}
 }
}).mount('.contenedor-grid')
