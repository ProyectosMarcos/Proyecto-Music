const { createApp } = Vue
createApp({
 data() {
 return {
    nombreUsuario: 'gabo_alvarez',
    artistasFavoritos:[
        {nombre:"adele",nombreArtistaArchivo:"/Proyecto-Musicbox/perfil/album-modificado/adele.png"},
        {nombre:"soda_stereo",nombreArtistaArchivo:"/Proyecto-Musicbox/perfil/album-modificado/Cerati.png"},
        {nombre:"queen",nombreArtistaArchivo:"/Proyecto-Musicbox/perfil/album-modificado/Queen.png"},
        {nombre:"the_beatles",nombreArtistaArchivo:"/Proyecto-Musicbox/perfil/album-modificado/The Beatles.png"}
    ],
    albumesFavoritos:[
        {nombre:"The Dark Side of The Moon1",nombreAlbumArchivo:"/Proyecto-Musicbox/albums/triangulo.png"},
        {nombre:"The Dark Side of The Moon2",nombreAlbumArchivo:"/Proyecto-Musicbox/albums/triangulo.png"},
        {nombre:"The Dark Side of The Moon3",nombreAlbumArchivo:"/Proyecto-Musicbox/albums/triangulo.png"},
        {nombre:"The Dark Side of The Moon4",nombreAlbumArchivo:"/Proyecto-Musicbox/albums/triangulo.png"},
        {nombre:"The Dark Side of The Moon5",nombreAlbumArchivo:"/Proyecto-Musicbox/albums/triangulo.png"}
    ],
    actividadReciente:[
        {nombre:"The Dark Side of The Moon",nombreAlbumArchivo:"/Proyecto-Musicbox/albums/triangulo.png"},
        {nombre:"The Dark Side of The Moon",nombreAlbumArchivo:"/Proyecto-Musicbox/albums/triangulo.png"},
        {nombre:"The Dark Side of The Moon",nombreAlbumArchivo:"/Proyecto-Musicbox/albums/triangulo.png"},
        {nombre:"The Dark Side of The Moon",nombreAlbumArchivo:"/Proyecto-Musicbox/albums/triangulo.png"}
    ]
    }
 }
}).mount('.contenedor-grid')
