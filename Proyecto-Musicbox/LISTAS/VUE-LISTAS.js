const { createApp } = Vue
createApp({
 data() {
 return {
    cantListas: 4,
    listas:[
        {nombreLista:"Rock 70s", listadoAlbumes: [
                                        {nombreAlbum:"/Proyecto-Musicbox/albums/The_Wall.png"},
                                        {nombreAlbum:"/Proyecto-Musicbox/albums/The_Wall.png"},
                                        {nombreAlbum:"/Proyecto-Musicbox/albums/The_Wall.png"},
                                        {nombreAlbum:"/Proyecto-Musicbox/albums/The_Wall.png"}
                                    ],
        refLista:"detalle_lista_propia.html"
        },
        {nombreLista:"Rock 80s", listadoAlbumes: [
                                        {nombreAlbum:"/Proyecto-Musicbox/albums/The_Wall.png"},
                                        {nombreAlbum:"/Proyecto-Musicbox/albums/The_Wall.png"},
                                        {nombreAlbum:"/Proyecto-Musicbox/albums/The_Wall.png"}
                                    ],
        refLista:"detalle_lista_propia.html"
        },
        {nombreLista:"Rock 90s", listadoAlbumes: [
                                        {nombreAlbum:"/Proyecto-Musicbox/albums/The_Wall.png"},
                                        {nombreAlbum:"/Proyecto-Musicbox/albums/The_Wall.png"}
                                    ],
        refLista:"detalle_lista_propia.html"
        },
        {nombreLista:"Rock 60s", listadoAlbumes: [
                                        {nombreAlbum:"/Proyecto-Musicbox/albums/The_Wall.png"}
                                    ],
        refLista:"detalle_lista_propia.html"
        }
    ]}
 }
}).mount('.contenedor-grid')
