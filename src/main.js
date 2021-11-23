import { filterByProdAndDirec, filterBy, filterPeopleByFilms } from "./data.js";
import data from "./data/ghibli/ghibli.js";
//console.log(filterCharacters);

/*Interacción con el DOM */
/*Aginando a variables la data extraida de Studio Ghibli */
let dataFilms = data.films;
// console.log(data.films);
let titleFilms = dataFilms.map((x) => x.title);
// console.log(titleFilms);
let descriptionFilms = dataFilms.map((x) => x.description);
// console.log(descriptionFilms);
let directorFilms = dataFilms.map((x) => x.director);
// console.log(directorFilms);
let producerFilms = dataFilms.map((x) => x.producer);
// console.log(producerFilms);
let posterFilms = dataFilms.map((x) => x.poster);
//console.log(posterFilms);
let release_dateFilms = dataFilms.map((x) => x.release_date);
let rt_scoreFilms = dataFilms.map((x) => x.rt_score);
let peopleFilms = dataFilms.map((x) => x.people);

// console.log(peopleFilms);
//console.log("Personajes: ", peopleFilms);

/* Buscador de Pesonajes */
// let searchCharacteres = document.getElementById("search");
// searchCharacteres.addEventListener("keyup", (e) => {
//   document.getElementById("resultado-cbo-personajes").textContent = "";
  
//   console.log("view e", e);
// });

// const dataPersonajes = (claseCharacter) => {
//   let id = [];
//   let nameCharacter = [];

//   for (let i = 0; claseCharacter.length; i++) {
//     id[i] = claseCharacter[i].getAttribute("id");
//     console.log(id);
//   }

//     for (let i = 0; i < id.length; i++) {
//       let filterP = dataFilms.filter((film) => film.title === selected);
//       for (let i = 0; i < filterP.people.length; i++) {
//         nameCharacter[i] = filterP.people[i].name;
        
//     }
//   }
//   return nameCharacter;
// };


/* Filtrado de personajes por pelicula */
let cbo = document.getElementById("cboPersonajes");
cbo.addEventListener("change", () => {
  document.getElementById("resultado-cbo-personajes").textContent = "";
  let cbo = document.getElementById("cboPersonajes");
  let selected = cbo.options[cbo.selectedIndex].text;
  // let filterResult = dataFilms.find(film => film.title === selected);
  let filterResult = filterPeopleByFilms(dataFilms, "title", selected);
  // console.log("Filter Result:", filterResult);
  document.getElementById("resultado-cbo-titulo").textContent = selected;
  for (let i = 0; i < filterResult.people.length; i++) {
    // console.log(filterResult.people[i]);
    let img = document.createElement("img");
    img.src = filterResult.people[i].img;
    let iconName = document.createElement("i");
    iconName.classList.add("fas");
    iconName.classList.add("fa-file-signature");
    let viewNamePeople = document.createElement("p");
    let namePeople = filterResult.people[i].name;
    viewNamePeople.textContent = namePeople;
    document.getElementById("resultado-cbo-personajes").appendChild(iconName);
    document.getElementById("resultado-cbo-personajes").appendChild(viewNamePeople);
    document.getElementById("resultado-cbo-personajes").appendChild(img);
  }
});

// Poblar select con especies
let resultadoEspecies = peopleFilms.map(x => {
  return x.map(person => person.specie)
});
//console.log(resultadoEspecies);
let integrado = resultadoEspecies.reduce(function (a, b) {
  return a.concat(b);
});
//console.log(integrado);
let resultSpecies = integrado.filter((item, index) => {
  return integrado.indexOf(item) === index;
});
//console.log(resultSpecies);
let especiesOrdenadas = resultSpecies.sort();
console.log("especiesOrdenadas", especiesOrdenadas);
function cargarEspecies() {
  for (var i in especiesOrdenadas) {
    document.getElementById("cboEspeciesPersonajes").innerHTML += "<option id='" + especiesOrdenadas[i] + "' value='" + especiesOrdenadas[i] + "'>" + especiesOrdenadas[i] + "</option>";
  }
};
cargarEspecies();

//Ordering posters Especies
let cboEspeciesPersonajes = document.getElementById("cboEspeciesPersonajes");
cboEspeciesPersonajes.addEventListener("change", () => {
  let selectedSpecies = cboEspeciesPersonajes.options[cboEspeciesPersonajes.selectedIndex].text;
  console.log(selectedSpecies);
  document.getElementById("resultado-cbo-personajes").innerHTML = '';
  let datafiltrada = filterCharacters(dataFilms, selectedSpecies, selectedSpecies);
  console.log("data: ", datafiltrada);
  for (let i = 0; i < datafiltrada.length; i++) {
    // Mostrar posters de la data filtrada
    let img = document.createElement("img");
    img.src = datafiltrada.people[i].img;
    let iconName = document.createElement("i");
    iconName.classList.add("fas");
    iconName.classList.add("fa-file-signature");
    let viewNamePeople = document.createElement("p");
    let namePeople = datafiltrada.people[i].name;
    viewNamePeople.textContent = namePeople;
    document.getElementById("resultado-cbo-personajes").appendChild(iconName);
    document.getElementById("resultado-cbo-personajes").appendChild(viewNamePeople);
    document.getElementById("resultado-cbo-personajes").appendChild(img);
  }
});

// Slider
const myslide = document.querySelectorAll(".myslider"),
  dot = document.querySelectorAll(".dot");
let counter = 1;
let timer = setInterval(autoslide, 8000);
function autoslide() {
  counter += 1;
  slidefun(counter);
}
//Botones del slider
const next = document.getElementById("next");
next.addEventListener("click", function () {
  counter += 1;
  slidefun(counter);
});
const prev = document.getElementById("prev");
prev.addEventListener("click", function () {
  counter -= 1;
  slidefun(counter);
});

function slidefun(n) {
  let i;
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].classList.remove("active");
  }
  if (n > myslide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].classList.add("active");
}

// Mostrar all the posters
function cargarPosterPeliculas() {
  for (let i = 0; i < posterFilms.length; i++) {
    let img = document.createElement("img");
    let imgName = titleFilms[i];
    img.src = posterFilms[i];
    img.id = "ghibliFilms";
    document.getElementById("div1").appendChild(img);
  }
}
cargarPosterPeliculas();

//Poblar productores
let resultProducer = producerFilms.filter((item, index) => {
  return producerFilms.indexOf(item) === index;
});
function cargarProductores() {
  for (var i in resultProducer) {
    document.getElementById("cboProducer").innerHTML +=
      "<option id='" +
      resultProducer[i] +
      "' value='" +
      resultProducer[i] +
      "'>" +
      resultProducer[i] +
      "</option>";
  }
}
cargarProductores();

//Directores
let resultDirector = directorFilms.filter((item, index) => {
  return directorFilms.indexOf(item) === index;
});
function cargarDirectores() {
  for (var i in resultDirector) {
    document.getElementById("cboDirector").innerHTML +=
      "<option value='" +
      resultDirector[i] +
      "'>" +
      resultDirector[i] +
      "</option>";
  }
}
cargarDirectores();

//Ordering posters SortBy
let sortBy = document.getElementById("sortBy");
sortBy.addEventListener("change", () => {
  let selectedFilms = sortBy.options[sortBy.selectedIndex].text;
  document.getElementById("div1").innerHTML = "";
  let datafiltrada = filterBy(data, selectedFilms);
  //console.log("data: ", datafiltrada);
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
    text.textContent =
      "Title: " + datafilTitle + " " + "Release date: " + datafilRD;
    /*+ " " + "Score: " + datafilRate + " " + "Description: " + datafilDescription + " " + "Director: " + datafilDirector + " " + "Producer: " + datafilProducer; */
    /* rate.textContent = datafilRate; */
    document.getElementById("div1").appendChild(text);
    /* document.getElementById("año").appendChild(rate); */
  }
});

//Ordering posters Director
let cboDirector = document.getElementById("cboDirector");
cboDirector.addEventListener("change", () => {
  let selectedFilm = cboDirector.options[cboDirector.selectedIndex].text;
  console.log(selectedFilm);
  let director = "director";
  document.getElementById("div1").innerHTML = "";
  let datafiltrada = filterByProdAndDirec(data, selectedFilm, director);

  console.log("data: ", datafiltrada);
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
    //let rate = document.createElement("p");
    text.textContent =
      "Title: " +
      datafilTitle +
      " " +
      "Release date: " +
      datafilRD +
      " " +
      "Director: " +
      datafilDirector;
    /*+ " " + "Score: " + datafilRate + " " + "Description: " + datafilDescription + " " + "Director: " + datafilDirector + " " + "Producer: " + datafilProducer; */
    /* rate.textContent = datafilRate; */
    document.getElementById("div1").appendChild(text);
    /* document.getElementById("año").appendChild(rate); */
  }
});

//Ordering posters Producer
let cboProducer = document.getElementById("cboProducer");
cboProducer.addEventListener("change", () => {
  let selectedFilm = cboProducer.options[cboProducer.selectedIndex].text;
  console.log(selectedFilm);
  let producer = "producer";
  document.getElementById("div1").innerHTML = "";
  let datafiltrada = filterByProdAndDirec(data, selectedFilm, producer);
  console.log("data: ", datafiltrada);
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
    //let rate = document.createElement("p");
    text.textContent =
      "Title: " +
      datafilTitle +
      " " +
      "Release date: " +
      datafilRD +
      " " +
      "Producer: " +
      datafilProducer;
    /*+ " " + "Score: " + datafilRate + " " + "Description: " + datafilDescription + " " + "Director: " + datafilDirector + " " + "Producer: " + datafilProducer; */
    /* rate.textContent = datafilRate; */
    document.getElementById("div1").appendChild(text);
    /* document.getElementById("año").appendChild(rate); */
  }
});

//Poblar select con data de titulos de peliculas
function cargarPeliculas() {
  for (var i in titleFilms) {
    document.getElementById("cboPersonajes").innerHTML +=
      "<option value='" + titleFilms[i] + "'>" + titleFilms[i] + "</option>";
  }
}
cargarPeliculas();

//console.log("Productores para Chart",resultProducer);

// Estadisticas
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: resultProducer,
    datasets: [
      {
        label: "Productores",
        data: [1, 2, 1, 5, 14, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

/*MEMORYPUZZLE */

// let img_people_castle=peopleFilms[0].map(x=> x.img);
// let img_1=img_people_castle[0];
// let img_2=img_people_castle[1];
// let img_3=img_people_castle[2];
// let img_4=img_people_castle[3];
// let img_5=img_people_castle[4];
// let img_6=img_people_castle[5];
// let img_7=img_people_castle[6];
// let img_8=img_people_castle[7];

// // console.log("imagenes recuperadas: ",img_people_castle);

// document.addEventListener('DOMContentLoaded', ()=>{

//   //card options
//   const cardArray= [
//     {
//       name: 'Pazu',
//       img: img_1
//     },
//     {
//       name: 'Sheeta',
//       img: img_2
//     },
//     {
//       name: 'Dola',
//       img: img_3
//     },
//     {
//       name: 'Muzka',
//       img: img_4
//     },
//     {
//       name: 'Uncle Pom',
//       img: img_5
//     },
//     {
//       name: 'Muoro',
//       img: img_6
//     }
//   ]

//   cardArray.sort(()=>0.5 - Math.random());

//   const grid=document.querySelector('.grid');
//   const resultDisplay =document.querySelector('#result');
//   var cardsChosen=[];
//   console.log(cardsChosen);
//   var cardsChosenId=[];
//   var cardsWon=[];

//   //create your board

//   function createBoard(){
//     for(let i=0; i<cardArray.length; i++){
//       var card=document.createElement('img');
//       console.log(card);
//       card.setAttribute('src', img_7);
//       card.setAttribute('data-id', i);
//       card.addEventListener('click',flipCard);
//       grid.appendChild(card);
//     }
//   }

//   //check for matches
//   function checkForMatch(){
//     var cards =document.querySelectorAll('img');
//     const optionOneId=cardsChosenId[0];
//     const optionTwoId=cardsChosenId[1];
//     if(cardsChosen[0] === cardsChosen[1]){
//       alert('You found a match');
//       cards[optionOneId].setAttribute('src',img_8);
//       cards[optionTwoId].setAttribute('src',img_8);
//       cardsWon.push(cardsChosen);
//     }else{
//       cards[optionOneId].setAttribute('src',img_7);
//       cards[optionTwoId].setAttribute('src',img_7);
//       alert('Sorry, try again');
//     }

//     cardsChosen = [];
//     cardsChosenId = [];
//     resultDisplay.textContent = cardsWon.length;
//     if(cardsWon.length === cardArray.length/2){
//       resultDisplay.textContent = " Congratulations! You found them all!";
//     }

//   }

//   createBoard();

//   //flip your card
//   function flipCard(){
//     var cardId=this.getAttribute('data-id');
//     cardsChosen.push(cardArray[cardId].name);
//     cardsChosenId.push(cardId);
//     this.setAttribute('src',cardArray[cardId].img);
//     if(cardsChosen.length===2){
//         setTimeout(checkForMatch,100);
//     }
//   }
//   }
// )

//Get the button:
const mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
