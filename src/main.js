import { filterByProdAndDirec, filterBy, filterPeopleByFilms } from './data.js';
import ghibli from './data/ghibli/ghibli.js';
import data from './data/ghibli/ghibli.js'

/*Interacción con el DOM */
/*Aginando a variables la data extraida de Studio Ghibli */
let dataFilms = data.films;
// console.log(data.films);
let titleFilms = dataFilms.map(x => x.title);
// console.log(titleFilms);
let descriptionFilms = dataFilms.map(x => x.description);
// console.log(descriptionFilms);
let directorFilms = dataFilms.map(x => x.director);
// console.log(directorFilms);
let producerFilms = dataFilms.map(x => x.producer);
// console.log(producerFilms);
let posterFilms = dataFilms.map(x => x.poster);
//console.log(posterFilms);
let release_dateFilms = dataFilms.map(x => x.release_date);
let rt_scoreFilms = dataFilms.map(x => x.rt_score);
let peopleFilms = dataFilms.map(x => x.people);
// console.log(peopleFilms);

/*Pagina 3 */
let img_people = peopleFilms[0].map(x => x.img);
// let img_people_1=peopleFilms[1].map(x=> x.img);
let cbo = document.getElementById("cboPersonajes");
cbo.addEventListener('change', () => {
  let cbo = document.getElementById("cboPersonajes");
  let selected = cbo.options[cbo.selectedIndex].text;
  document.getElementById("resultado-cbo-titulo").innerHTML = selected;
  if (selected == "Castle in the Sky") {
    for (let i = 0; i < img_people.length; i++) {
        console.log(img_people);
      let img = document.createElement("img");
      img.src = img_people[i];
      document.getElementById("resultado-cbo-personajes").appendChild(img);
    }
  } 
})

// Todas las peliculas con las imagenes de los personaes
// let dataImg = [];
// for(let i=0; i<data.films.length; i++){
// dataImg[i] = data.films[i].people.map(item=>item.img);
// }
// console.log("Data de personajes por pelicula: ",dataImg);

// data.films.forEach((film)=>{
//   dataImg.push(film.people.map(item=>item.img));
// })

// /* Intentando el bucle foreach*/

// dataImg.forEach(filterPeopleByFilms(data,condition,itemFilms)=>{


    
//   });


// Slider
const myslide = document.querySelectorAll('.myslider'), dot = document.querySelectorAll('.dot');
let counter = 1;
let timer = setInterval(autoslide, 8000);
function autoslide() {
  counter += 1;
  slidefun(counter);
};
//Botones del slider
const next = document.getElementById("next");
next.addEventListener("click",
  function () {
    counter += 1;
    slidefun(counter);
  }
);
const prev = document.getElementById("prev");
prev.addEventListener("click",
  function () {
    counter -= 1;
    slidefun(counter);
  }
);
function slidefun(n) {
  let i;
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].classList.remove('active');
  }
  if (n > myslide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].classList.add('active');
}

// Mostrar all the posters
function cargarPosterPeliculas(){
  for (let i = 0; i < posterFilms.length; i++) {
  let img = document.createElement("img");
  let imgName = titleFilms[i];
  img.src = posterFilms[i];
  img.id = "ghibliFilms";
  document.getElementById("div1").appendChild(img);
  }
};

cargarPosterPeliculas();

//Poblar productore
let resultProducer = producerFilms.filter((item, index) => {
  return producerFilms.indexOf(item) === index;
})

function cargarProductores() {
  for (var i in resultProducer) {
    document.getElementById("cboProducer").innerHTML += "<option id='" + resultProducer[i] + "' value='" + resultProducer[i] + "'>" + resultProducer[i] + "</option>";
  }
};
cargarProductores();

// mostrar el nombre seleccionado
let select = document.querySelector("#cboProducer");
let result = document.querySelector('#producerName');
select.addEventListener('change', function () {
  result.textContent = this.value;
});


//Directores
let resultDirector = directorFilms.filter((item, index) => {
  return directorFilms.indexOf(item) === index;
})
function cargarDirectores() {
  for (var i in resultDirector) {
    document.getElementById("cboDirector").innerHTML += "<option value='" + resultDirector[i] + "'>" + resultDirector[i] + "</option>";
  }
}
cargarDirectores();


//Ordering posters
let sortBy = document.getElementById("sortBy");
sortBy.addEventListener("change", () => {
  let selectedFilms = sortBy.options[sortBy.selectedIndex].text;
  document.getElementById("div1").innerHTML = '';
  let datafiltrada = filterBy(data, selectedFilms);
  //console.log("data: ", datafiltrada);
  console.log("selected: ", selected)
  for (let i = 0; i < datafiltrada.length; i++) {
    // Mostrar posters de la data filtrada
    let datafilPoster = datafiltrada[i].poster;
    let img = document.createElement("img");
    img.src = datafilPoster;
    document.getElementById("div1").appendChild(img);
    let datafilTitle = datafiltrada[i].title;
    let datafilRD = datafiltrada[i].release_date;
    let datafilRate = datafiltrada[i].rt_score;
    let datafilDescription = datafiltrada[i].description;
    let datafilDirector = datafiltrada[i].director;
    let datafilProducer = datafiltrada[i].producer;
    let text = document.createElement("p");
    let rate = document.createElement("p");
    text.textContent = "Title: " + datafilTitle + " " + "Release date: " + datafilRD;
    /*+ " " + "Score: " + datafilRate + " " + "Description: " + datafilDescription + " " + "Director: " + datafilDirector + " " + "Producer: " + datafilProducer; */
    /* rate.textContent = datafilRate; */
    document.getElementById("div1").appendChild(text);
    /* document.getElementById("año").appendChild(rate); */

  }
});

//Ordering posters
/* let sortBy = document.getElementById("sortBy");
sortBy.addEventListener("change", () => {
  let selected = sortBy.options[sortBy.selectedIndex].text;
  //   document.getElementById("div1").innerHTML = selected;
  console.log(selected);
  let datafiltrada = filterBy(data, selected);
  console.log("data: ", datafiltrada);
  for (let i = 0; i < datafiltrada.length; i++) {
    // Mostrar posters de la data filtrada
    let datafilPoster = datafiltrada[i].poster;
    let datafilRD = datafiltrada[i].release_date;
    // let containerPosterFilms=document.getElementById("containerPosterFilms");
    let div1 = document.getElementById("div1");
    // let divContenedor=document.createElement("div");
    let img = document.createElement("img");
    img.src = datafilPoster;
    div1.textContent = datafilRD;
    div1.appendChild(img);
    console.log(img);
  }
}); */

//Poblar select con data de titulos de peliculas
function cargarPeliculas() {
  for (var i in titleFilms) {
    document.getElementById("cboPersonajes").innerHTML += "<option value='" + titleFilms[i] + "'>" + titleFilms[i] + "</option>";
  }
};
cargarPeliculas();



// //Buscador de personajes en tiempo real
// const formulario= document.querySelector('#buscador');
// const btnBuscador=document.querySelector('#btnBuscador');

// const filtrarPersonajes =()=>{
//     // console.log(formulario.value);
//     const texto = formulario.value.toLowerCase();
//     for (let personajesAll of dataImg ){
//         let 
//     }

// }
// btnBuscador.addEventListener('click', filtrarPersonajes)


//Estadisticas
// let miCanvas=document.getElementById("Estadisticas");
// let etiquetas = producerFilms; 
