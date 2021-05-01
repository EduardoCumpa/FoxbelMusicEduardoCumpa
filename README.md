# FoxbelMusicEduardoCumpa

# Objetivo
Es un proyecto de prueba para consumir la API de deezer `https://developers.deezer.com/api`

# Tener instalado
El proyecto fue generado con:
 - Angular versión 11.2.7
 - Nodejs versión 14.16.0
 - npm versión 6.14.11

# Para ejecutar
Para inicializar el proyecto asegurarse de haber ejecutado el comando "npm install" para descargar los paquetes de la carpeta node_modules.
Una vez descargados los paquetes, debemos inicializar con el comando "npm start" y abrir `http://localhost:4200` (asegurarse que 4200 es el puerto en donde se ejecuta el servidor, sino cambiarlo) en una pestaña del navegador.

# Funciones
Es responsive.
El proyecto lista las canciones que se asemejan al parámetro de búsqueda haciendo un GET request al endpoint `https://api.deezer.com/search?=`.
Al dar clic en una canción esta se reproduce automáticamente.
Se puede pausar/reanudar la canción.
Se puede subir y bajar el volumen.
Se puede mutear y desmutear el volumen.

# Estructura de carpetas
├───app
│   ├───components
│   │   ├───album-info
│   │   ├───display-music
│   │   ├───music-player
│   │   ├───nav-menu
│   │   └───search-bar
│   ├───interfaces
│   ├───pages
│   │   └───home
│   └───services
├───assets
│   ├───fonts
│   │   └───Quicksand
│   │       └───static
│   └───images
└───environments