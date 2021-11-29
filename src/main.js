import { filterByProdAndDirec, filterBy, filterPeopleByFilms, filterCharacters } from "./data.js";
import data from "./data/ghibli/ghibli.js";

/*Interacción con el DOM */
/*Asignando a variables la data extraida de Studio Ghibli */
let dataFilms = data.films;
let titleFilms = dataFilms.map((x) => x.title);
let directorFilms = dataFilms.map((x) => x.director);
let producerFilms = dataFilms.map((x) => x.producer);
let posterFilms = dataFilms.map((x) => x.poster);
let peopleFilms = dataFilms.map((x) => x.people);

/* Filtrado de personajes por pelicula */
let cbo = document.getElementById("selectCharacters");
cbo.addEventListener("change", () => {
  document.getElementById("result-characters").textContent = "";
  let cbo = document.getElementById("selectCharacters");
  let selected = cbo.options[cbo.selectedIndex].text;
  let filterResult = filterPeopleByFilms(dataFilms, "title", selected);
  document.getElementById("result-title-characters").textContent = selected;
  for (let i = 0; i < filterResult.people.length; i++) {
    let containerPoster = document.createElement("div");
    containerPoster.classList.add("containerImgInfo");
    let containerImg = document.createElement("div");
    containerImg.classList.add("containerFilImg");
    let containerInfo = document.createElement("div");
    containerInfo.classList.add("containerFilmInfo");
    document.getElementById("result-characters").appendChild(containerPoster);
    containerPoster.appendChild(containerImg);
    containerPoster.appendChild(containerInfo);
    let img = document.createElement("img");
    img.src = filterResult.people[i].img;
    let viewNamePeople = document.createElement("p");
    let namePeople = filterResult.people[i].name;
    viewNamePeople.textContent = namePeople;
    containerImg.appendChild(img);
    containerInfo.appendChild(viewNamePeople);

  }
});

// Poblar select con especies
let fillInSpecies = peopleFilms.map(x => {
  return x.map(person => person.specie)
});
console.log("AQUI: ",fillInSpecies);
let allSpecies = fillInSpecies.reduce(function (a, b) {
  return a.concat(b);
});

console.log("allSpecies", allSpecies);

let resultSpecies = allSpecies.filter((item, index) => {
  return allSpecies.indexOf(item) === index;
});
console.log("RESULT ESPECIES: ",resultSpecies);


let sortedSpecies = resultSpecies.sort();

function cargarEspecies() {
  for (var i in sortedSpecies) {
    document.getElementById("specieCharacters").innerHTML += "<option id='" + sortedSpecies[i] + "' value='" + sortedSpecies[i] + "'>" + sortedSpecies[i] + "</option>";
  }
}

cargarEspecies();

/* Ordering posters Especies */
let specieCharacters = document.getElementById("specieCharacters");
specieCharacters.addEventListener("change", () => {
  let selectedSpecies = specieCharacters.options[specieCharacters.selectedIndex].text;
  document.getElementById("result-characters").innerHTML = "";
  let allCharacters = peopleFilms.reduce(function (a, b) {
    return a.concat(b);
  });
  let filterResult = filterCharacters(allCharacters, "specie", selectedSpecies);
  document.getElementById("result-title-characters").textContent = selectedSpecies;
  for (let i = 0; i < filterResult.length; i++) {
    let containerPoster = document.createElement("div");
    containerPoster.classList.add("containerImgInfo");
    let containerImg = document.createElement("div");
    containerImg.classList.add("containerFilImg");
    let containerInfo = document.createElement("div");
    containerInfo.classList.add("containerFilmInfo");
    document.getElementById("result-characters").appendChild(containerPoster);
    containerPoster.appendChild(containerImg);
    containerPoster.appendChild(containerInfo);
    let img = document.createElement("img");
    img.src = filterResult[i].img;
    let viewNamePeople = document.createElement("p");
    let namePeople = filterResult[i].name;
    viewNamePeople.textContent = namePeople;
    containerImg.appendChild(img);
    containerInfo.appendChild(viewNamePeople);
  }
});

/* Slider */
const myslide = document.querySelectorAll(".myslider"),
  dot = document.querySelectorAll(".dot");
let counter = 1;
let timer = setInterval(autoslide, 8000);
timer;
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
function loadFilmsPoster() {
  for (let i = 0; i < posterFilms.length; i++) {
    let img = document.createElement("img");
    img.src = posterFilms[i];
    img.id = "ghibliFilms";
    img.classList.add("classModalImage");
    document.getElementById("mainMovieContainer").appendChild(img);
  }
}
loadFilmsPoster();

//Poblar productores
let resultProducer = producerFilms.filter((item, index) => {
  return producerFilms.indexOf(item) === index;
});

function loadProducers() {
  for (var i in resultProducer) {
    document.getElementById("cboProducer").innerHTML += "<option id='" + resultProducer[i] + "' value='" + resultProducer[i] + "'>" + resultProducer[i] + "</option>";
  }
}
loadProducers();

//Directores
let resultDirector = directorFilms.filter((item, index) => {
  return directorFilms.indexOf(item) === index;
});

function loadDirectors() {
  for (var i in resultDirector) {
    document.getElementById("cboDirector").innerHTML +=
      "<option value='" +
      resultDirector[i] +
      "'>" +
      resultDirector[i] +
      "</option>";
  }
}
loadDirectors();

//Ordering posters SortBy
let sortBy = document.getElementById("sortBy");
sortBy.addEventListener("change", () => {
  let selectedFilms = sortBy.options[sortBy.selectedIndex].text;
  document.getElementById("mainMovieContainer").innerHTML = "";
  let dataFilterFilms = filterBy(dataFilms, selectedFilms);
  for (let i = 0; i < dataFilterFilms.length; i++) {
    // Mostrar posters de la data filtrada
    let containerPosterFilms = document.createElement("div");
    containerPosterFilms.classList.add("containerImgInfo");
    let containerFilImg = document.createElement("div");
    containerFilImg.classList.add("containerFilImg");
    let containerFilmInfo = document.createElement("div");
    containerFilmInfo.classList.add("containerFilmInfo");
    document.getElementById("mainMovieContainer").appendChild(containerPosterFilms);
    containerPosterFilms.appendChild(containerFilImg);
    containerPosterFilms.appendChild(containerFilmInfo);
    let datafilPoster = dataFilterFilms[i].poster;
    let img = document.createElement("img");
    img.src = datafilPoster;
    let datafilTitle = dataFilterFilms[i].title;
    let datafilRD = dataFilterFilms[i].release_date;
    let datafilRate = dataFilterFilms[i].rt_score;
    let text = document.createElement("p");
    text.textContent =`Title: ${datafilTitle}
    Release date: ${datafilRD}
    Score: ${datafilRate} `;
    containerFilImg.appendChild(img);
    containerFilmInfo.appendChild(text);
  }
});

//Ordering posters Director
let cboDirector = document.getElementById("cboDirector");
cboDirector.addEventListener("change", () => {
  let selectedFilm = cboDirector.options[cboDirector.selectedIndex].text;
  let director = "director";
  document.getElementById("mainMovieContainer").innerHTML = "";
  let dataFilterFilms = filterByProdAndDirec(dataFilms, selectedFilm, director);
  for (let i = 0; i < dataFilterFilms.length; i++) {
    // Mostrar posters de la data filtrada
    let containerPosterFilms = document.createElement("div");
    containerPosterFilms.classList.add("containerImgInfo");
    let containerFilImg = document.createElement("div");
    containerFilImg.classList.add("containerFilImg");
    let containerFilmInfo = document.createElement("div");
    containerFilmInfo.classList.add("containerFilmInfo");
    document.getElementById("mainMovieContainer").appendChild(containerPosterFilms);
    containerPosterFilms.appendChild(containerFilImg);
    containerPosterFilms.appendChild(containerFilmInfo);
    let datafilPoster = dataFilterFilms[i].poster;
    let img = document.createElement("img");
    img.src = datafilPoster;
    let datafilTitle = dataFilterFilms[i].title;
    let datafilRD = dataFilterFilms[i].release_date;
    let datafilRate = dataFilterFilms[i].rt_score;
    let text = document.createElement("p");
    text.textContent =`Title: ${datafilTitle}
    Release date: ${datafilRD}
    Score: ${datafilRate} `;
    containerFilImg.appendChild(img);
    containerFilmInfo.appendChild(text);
  }
});

//Ordering posters Producer
let cboProducer = document.getElementById("cboProducer");
cboProducer.addEventListener("change", () => {
  let selectedFilm = cboProducer.options[cboProducer.selectedIndex].text;
  let producer = "producer";
  document.getElementById("mainMovieContainer").innerHTML = "";
  let dataFilterFilms = filterByProdAndDirec(dataFilms, selectedFilm, producer);
  for (let i = 0; i < dataFilterFilms.length; i++) {
    // Mostrar posters de la data filtrada
    let containerPosterFilms = document.createElement("div");
    containerPosterFilms.classList.add("containerImgInfo");
    let containerFilImg = document.createElement("div");
    containerFilImg.classList.add("containerFilImg");
    let containerFilmInfo = document.createElement("div");
    containerFilmInfo.classList.add("containerFilmInfo");
    document.getElementById("mainMovieContainer").appendChild(containerPosterFilms);
    containerPosterFilms.appendChild(containerFilImg);
    containerPosterFilms.appendChild(containerFilmInfo);
    let datafilPoster = dataFilterFilms[i].poster;
    let img = document.createElement("img");
    img.src = datafilPoster;
    let datafilTitle = dataFilterFilms[i].title;
    let datafilRD = dataFilterFilms[i].release_date;
    let datafilRate = dataFilterFilms[i].rt_score;
    let text = document.createElement("p");
    text.textContent =`Title: ${datafilTitle}
    Release date: ${datafilRD}
    Score: ${datafilRate} `;
    containerFilImg.appendChild(img);
    containerFilmInfo.appendChild(text);
  }
});

// Search Bar
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", (e) => {
  let searchString = e.target.value.toLowerCase();
  let filteredFilms = dataFilms.filter((dataFilms) => {
    return dataFilms.title.toLowerCase().includes(searchString);
  });
  document.getElementById("mainMovieContainer").innerHTML = "";
  for (let i = 0; i < filteredFilms.length; i++) {
    // Mostrar posters de la data filtrada
    let filmPoster = filteredFilms[i].poster;
    let img = document.createElement("img");
    img.src = filmPoster;
    document.getElementById("mainMovieContainer").appendChild(img);
  }
});

//Poblar select con data de titulos de peliculas
function loadFilms() {
  for (var i in titleFilms) {
    document.getElementById("selectCharacters").innerHTML +=
      "<option value='" + titleFilms[i] + "'>" + titleFilms[i] + "</option>";
  }
}
loadFilms();

// Estadisticas
const ctx = document.getElementById("myChart").getContext("2d");
// eslint-disable-next-line no-undef
const myChart = new Chart(ctx, {
  type: "polarArea",
  data: {
    labels: titleFilms,
    datasets: [
      {
        label: "Films",
        data: [13, 10, 6, 5, 11, 7, 6, 9, 10, 5, 10, 9, 10, 8, 10, 8, 8, 8, 8, 10],
        backgroundColor: [
          "rgba(21, 122, 110, 0.8)",
          "rgba(26, 20, 35, 0.8)",
          "rgba(133, 96, 132, 0.8)",
          "rgba(132, 226, 150, 0.8)",
          "rgba(214, 245, 153, 0.8)",
          "rgba(17, 157, 164, 0.8)",
          "rgba(25, 100, 126, 0.8)",
          "rgba(255, 224, 102, 0.8)",
          "rgba(58, 124, 165, 0.8)",
          "rgba(22, 66, 91, 0.8)",
          "rgba(104, 142, 38, 0.8)",
          "rgba(22, 48, 43, 0.8)",
          "rgba(150, 2, 0, 0.8)",
          "rgba(127, 126, 255, 0.8)",
          "rgba(255, 22, 84, 0.8)",
          "rgba(255, 136, 17, 0.8)",
          "rgba(251, 159, 137, 0.8)",
          "rgba(130, 70, 112, 0.8)",
          "rgba(11, 201, 205, 0.8)",
          "rgba(255, 208, 70, 0.8)",
        ],
        borderColor: [
          "rgba(21, 122, 110, 1)",
          "rgba(26, 20, 35, 1)",
          "rgba(133, 96, 132, 1)",
          "rgba(132, 226, 150, 1)",
          "rgba(214, 245, 153, 1)",
          "rgba(17, 157, 164, 1)",
          "rgba(25, 100, 126, 1)",
          "rgba(255, 224, 102, 1)",
          "rgba(58, 124, 165, 1)",
          "rgba(22, 66, 91, 1)",
          "rgba(104, 142, 38, 1)",
          "rgba(22, 48, 43, 1)",
          "rgba(150, 2, 0, 1)",
          "rgba(127, 126, 255, 1)",
          "rgba(255, 22, 84, 1)",
          "rgba(255, 136, 17, 1)",
          "rgba(251, 159, 137, 1)",
          "rgba(130, 70, 112, 1)",
          "rgba(11, 201, 205, 1)",
          "rgba(255, 208, 70, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
  },
});
myChart;

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


// NavBar responsive
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle("nav-menu_visible");
  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Close menu");
  } else {
    navToggle.setAttribute("aria-label", "Open menu");
  }
});

const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
menuLinks.forEach(menuLink => {
  menuLink.addEventListener('click', function () {
    navMenu.classList.remove("nav-menu_visible");
  })
});
