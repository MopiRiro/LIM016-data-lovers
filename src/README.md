# StudioGhibli Library

***

## 1. Resumen del proyecto 📌

Studio Ghibli Library es un aplicativo web, el cual permite visualizar un conjuntos de datos de la filmografía Studio Ghibli. Estos datos se presentan de manera ordenada, facilitando la busqueda de lo que se desea observar.


## 2. Definición del producto 📝

### ¿Quiénes son los principales usuarios de producto?
* Seguidors de las películas de Studio Ghibli
* Cualquiera que desee conocer datos importantes sobre Studio Ghibli

### ¿Cuáles son los objetivos de estos usuarios en relación con tu producto?
Visualizar de manera sencilla los datos más importantes de Studio Ghibli. Tales como:

* Películas 🎞️
* Personajes 🙋‍♀️
* Puntajes en Rotten Tomatoes 🍅


### ¿Cómo crees que el producto que estás creando está resolviendo sus problemas?

Studio Ghibli Library nos permite ver los datos de manera ordenada y sencilla. Permitiendo reducir el tiempo de busqueda según la necesidad del usuario.


## 3. Características del proyecto ✅

El desarrollo del producto proyecto utiliza diversos métodos para mostrar los datos de preferencia del usuario. 


## 4. Funcionalidad ⚙️

Para su correcto funcionamiento el usuario debera elegir entre los métodos de filtrado y ordenado que se presentan en la interfaz, como:

* Filtrado de peliculas por director
* Filtrado de peliculas por productor
* Filtrado de personajes por peliculas
* Filtrado de personajes por especies
* rdenado por puntajes Rotten Tomatoes
* Ordenado por años de estreno ascendente y descendente
* Ordenado por letras de abecedario


## 5. Historias de Usuario 🗂️

[Trello Data Lovers](https://trello.com/b/YO0IYHJj/lp2-datalovers-l)


### 📖 HU01: Yo **COMO** usuario **QUIERO** un pagina de bienvenida dinámica con un menú  **PARA** visualizar las secciones con las que cuenta la página.

#### Criterios de Aceptación
* Botones permiten cambiar entre las imágenes de las películas
* Transiciones en las imágenes
* Menú de navegación con las diferentes secciones de la pagina
#### Definición de Terminado
* Se ejecutaron las pruebas de usabilidad necesarias
* Se realizaron las modificaciones señaladas en el test de usabilidad

### 📖HU02: Yo **COMO** usuario **QUIERO** una sección donde muestre las posters de las películas de Studio Ghibli **PARA** poder ver la información de cada una.
#### Criterios de Aceptación
* Mostrar los posters de las películas
* Menú de opciones para el filtrado por director
* Menú de opciones para el filtrado por productor
* Menú de selección para ordenar por años de estreno ascendente, descendente, A-Z, Z-A y según el puntaje de Rotten tomatoes
* Botón para borrar los filtros realizados por el usuario

#### Definición de Terminado
* Test de usabilidad
* Modificaciones señaladas en el test de usabilidad
* Test de la función de filtrado por director
* Test de la función de filtrado por productor
* Test de la función 'Sort' (Year ascending, year descending, A-Z, Z-A y Rotten Tomatoes)

### 📖HU03: Yo **COMO** usuario **QUIERO** ver a los personajes que participan en cada película **PARA** poder listarlo de manera ordenada.
#### Criterios de Aceptación
* Menú de opciones con las películas de Studio Ghibli
* Menú de opciones con las especies de los personajes
* Botón para borrar los filtros hechos por el usuario
* Sección con el titulo de cada pelicula
* Sección con las imágenes de cada personaje con su respectivo nombre

#### Definición de Terminado
* Test de usabilidad
* Modificaciones señaladas en el test de usabilidad
* Test de la función de filtrado por película
* Test de la función de filtrado por especies


### 📖HU04 : Yo **COMO** usuario **QUIERO**  una lista de las películas por su puntaje en Rotten Tomatoes **PARA** poder conocer las mejores puntuadas, así como para poder obversar el puntaje de cada una.

#### Criterios de Aceptación
* Hay un opción llamada "Top rated" que me permite observar las películas junto con su nombre, su año de publicación y su puntaje.
* Ordenar las películas de forma descendente.
#### Definición de Terminado
* Podemos observar la opción de "Top rated", al seleccionarla se presentan las 20 películas ordenadas por su puntaje de forma ascendente.
* Test de usabilidad.
* Pasó el test de la función.

### 📖HU05 : Yo **COMO** usuario **QUIERO** observar algunas estadísticas del Studio Ghibli **PARA** conocer más detalle de su trabajo.

#### Criterios de Aceptación
* Correcto entendimiento de las gráficas estadísticas.

#### Definición de Terminado
* Hay un botón en el navegador que nos permite dirigirnos a la sección de Stadistics.
* Hay una sección específica para la estadística.
* Se puede obsevar el número de personajes que hay en cada película.

### 📖HU06 : Yo **COMO** usuario **QUIERO** ingresar a la página web en diferentes dispositivos móviles **PARA** tener un fácil acceso a la información desde donde me encuentre.

#### Criterios de Aceptación
* Es adaptable para celulares y para tablets.
* Por el tamaño de las estadísticas se optó por eliminar la información de esta al llegar a dispositivos móviles más pequeños.
* Para los celularfes se usó el menú desplegable tipo hamburguesa.
#### Definición de Terminado
* La página web se puede visualizar desde cualquier tipo de dispositivo móvil, adaptándose a los diferentes tamaños. Para los dispositivos móviles en el header se observa el menú hamburguesa.


## 6. Prototipo ⚒️

*Prototipo baja fidelidad
## El prototipo inicial fue diseñado a mano 1️⃣

![imagen1](img/prototipo1-1.jpeg)
![imagen2](img/prototipo1-2.jpeg)
![imagen3](img/prototipo1-3.jpeg)
![imagen4](img/prototipo1-4.jpeg)

*Prototipo alta fidelidad
## El segundo prototipo fue diseñado con la herramienta Figma 2️⃣

Link : [Figma](https://www.figma.com/file/oyIhJuBaVWTKzi1VcKnVk3/Ghibli?node-id=0%3A1)

![imagen5](img/prototipo2.jpeg)


## 7. Decisiones de diseño 🎨

- Se utilizo el logo del largometraje y sus colores insignia.
- Se inserto un pie de página donde se muestran las redes sociales de Studio Ghibli.
- Se opto por implementar una interfaz intuitiva, presentando un diseño amigable y sencillo.


## 8. Interfaz de usuario 📱💻

La interfaz del usuario presenta un menú de navegación el cual ofrece las diferentes secciones con las que cuenta la pagina. También, un catálogo completo de las peliculas de Studio Ghibli. Del mismo modo cuenta con secciones que muestran los filtros que se puede utilizar para las busquedas.

## 9. Test usabilidad 📱

Se realizo varios testeos en los cuales pudimos detectar diversos problemas para el usuario, debido a esto se añadio y/o modifico los siguientes elementosl

- Tamaño carrusel:
  Al inicio el carrusel no ocupada toda la pantalla y se veia parte de la siguiente sección. Se aumento la altura para que pudiera solo observarse la sección de bienvenida
- Titulo de los posters de las película:
  Inicialmente el poster de la pelicula y su titulo no estaban agrupados, lo cual el usuario confundia el de las películas
- Navegador estatico:
  El navegador propuesto solo se mostraba en la sección de bienvenida, sin embargo el usuario deseaba cambiar de sección sin la necesidad de ir al inicio de la pagina
- Boton actualizar:
  Una ves seleccionado los filtros requeridos por el usuario no se podia volver a observar el catalogo inicial, se opto por agregar el boton para darle una mejor experiencia al usuario
- Boton de subida:
  Se observo que el usuario tardaba mucho en ir al inicio de la pagina, se opto por agregar un boton que facilitara el desplazamiento
- Navegador hamburguesa:
  Se observo que al ingresar a la pagina en celulares el navegador ocupada mucho espacio por lo que se dio la opción de aparecer y desaparecer las opciones de navegación


## Interfaz final 🤩

![imagen6](img/iu_1.JPG)
![imagen7](img/iu_2.JPGg)
![imagen8](img/iu_3.JPG)
![imagen9](img/iu_4.JPG)
![imagen10](img/iu_5.JPG)
![imagen11](img/iu_6.JPG)
![imagen12](img/iu_7.JPG)
![imagen13](img/iu_8.JPG)
![imagen14](img/iu_9.JPG)


Autoras ✒️

* Luz Elany Torres Villavicencio [GitHub](https://github.com/ElannyTorres)

* Mónica del Pilar Rivera Romero [GitHub](https://github.com/MopiRiro)