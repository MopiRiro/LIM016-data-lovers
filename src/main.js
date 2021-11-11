import { example } from './data.js';

import data from './data/ghibli/ghibli.js'
console.log(example, data);


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

    let img_people=peopleFilms[0].map(x=> x.img);
    // let img_people_1=peopleFilms[1].map(x=> x.img);
    let cbo=document.getElementById("cboPersonajes");
    cbo.addEventListener('change', ()=>{
        let cbo = document.getElementById("cboPersonajes");
        let selected = cbo.options[cbo.selectedIndex].text;
        document.getElementById("resultado-cbo-titulo").innerHTML=selected;
        if(selected=="Castle in the Sky"){
            for (let i = 0; i < img_people.length; i++) {
                let img = document.createElement("img");
                img.src = img_people[i];
                document.getElementById("resultado-cbo-personajes").appendChild(img);
            }
            
        // }else if(selected=="My Neighbor Totoro"){
        //     for (let i = 0; i < img_people_1.length; i++) {
        //         let img1 = document.createElement("img");
        //         img1.src = img_people_1[i];
        //         document.getElementById("resultado-cbo-personajes").appendChild(img1);
        //     }
        }else{
            console.log("ayudaaa");
        }
    })

    

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
        for (i = 0; i < myslide.length; i++){
            myslide[i].style.display = "none";
        }
        for (i = 0; i < dot.length; i++){
            dot[i].classList.remove('active');
        }
        if(n > myslide.length){
            counter = 1;
        }
        if(n < 1){
            counter = myslide.length;
        }
        myslide[counter-1].style.display = "block";
        dot[counter-1].classList.add('active');
    }

// Mostrar posters 
for (let i = 0; i < posterFilms.length; i++) {
    let img = document.createElement("img");
    let imgName = titleFilms[i];
    let imgTxt = document.createElement("p");
    img.src = posterFilms[i];
    img.id = "ghibliFilms";
    document.getElementById("div1").appendChild(img);
}

//Productores
let resultProducer = producerFilms.filter((item,index)=>{
    return producerFilms.indexOf(item) === index;
})
/* console.log(resultProducer); */
function cargarProductores(){
    for(var i in resultProducer){
        document.getElementById("cboProducer").innerHTML+="<option id='"+resultProducer[i]+"' value='"+resultProducer[i]+"'>"+resultProducer[i]+"</option>";
        /* console.log(resultProducer[i]); */
    }
}
cargarProductores();

const productor = resultProducer[0];
console.log(productor);
let producerFilmsToShow = [];
const showFilms = {
    "Isao Takahata"  : () => {
        for (let i = 0; i < dataFilms.length; i++) {
            producerFilmsToShow.push();
            console.log(producerFilmsToShow);
            /*let img = document.createElement("img");
            img.src = posterFilms[i];
            document.getElementById("div1").appendChild(img); */
        }
    },
    "Hayao Miyazaki" : "Hola1",
    "Toru Hara" : "Hola2",
    "Toshio Suzuki" : "Hola3",
    "Yoshiaki Nishimura" : "Hola4"
}
const show = showFilms[productor];
console.log(show);



//let img_people=peopleFilms[0].map(x=> x.img);
// let img_people_1=peopleFilms[1].map(x=> x.img);
/*let cbo=document.getElementById("cboPersonajes");
    cbo.addEventListener('change', ()=>{
        let cbo = document.getElementById("cboPersonajes");
        let selected = cbo.options[cbo.selectedIndex].text;
        document.getElementById("resultado-cbo-titulo").innerHTML=selected;
        if(selected=="Castle in the Sky"){
            for (let i = 0; i < img_people.length; i++) {
                let img = document.createElement("img");
                img.src = img_people[i];
                document.getElementById("resultado-cbo-personajes").appendChild(img);
            }*/
            
        // }else if(selected=="My Neighbor Totoro"){
        //     for (let i = 0; i < img_people_1.length; i++) {
        //         let img1 = document.createElement("img");
        //         img1.src = img_people_1[i];
        //         document.getElementById("resultado-cbo-personajes").appendChild(img1);
        //     }
        /*}else{
            console.log("ayudaaa");
        }
    })*/



//Directores
let resultDirector = directorFilms.filter((item,index)=>{
    return directorFilms.indexOf(item) === index;
})
//console.log(resultDirector);
function cargarDirectores(){
    for(var i in resultDirector){
        document.getElementById("cboDirector").innerHTML+="<option value='"+resultDirector[i]+"'>"+resultDirector[i]+"</option>"; 
    }
}
cargarDirectores();

//Poblar select con data de titulos de peliculas
function cargarPeliculas(){
    for(var i in titleFilms){
        document.getElementById("cboPersonajes").innerHTML+="<option value='"+titleFilms[i]+"'>"+titleFilms[i]+"</option>"; 
    }
}
cargarPeliculas();




