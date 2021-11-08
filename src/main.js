import { example } from './data.js';


import data from './data/ghibli/ghibli.js'

    /*Interacción con el DOM */
    // let cboPersonajes = document.getElementById("cboPersonajes");

    
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
    // console.log(posterFilms);
    let release_dateFilms = dataFilms.map(x => x.release_date);
    let rt_scoreFilms = dataFilms.map(x => x.rt_score);
    let peopleFilms = dataFilms.map(x => x.people);

    /* Data personajes y sus detalles */
    // let dataPeopleFilms=data.films.people; 
    // let idPeople=dataPeopleFilms.map(x => x.id);
    // console.log(idPeople);
    


    /*Pagina 3 */

    let cbo=document.getElementById("cboPersonajes");
    cbo.addEventListener('change', ()=>{
        let cbo = document.getElementById("cboPersonajes");
        let selected = cbo.options[cbo.selectedIndex].text;
        document.getElementById("resultado-cbo").innerHTML=selected;
    })

    // function ShowSelected(){
    //     let cbo = document.getElementById("cboPersonajes");
    //     let selected = cbo.options[cbo.selectedIndex].text;
    //     document.getElementById("resultado-cbo").innerHTML=selected;
    // }


    // Slider
    const myslide = document.querySelectorAll('.myslider'), dot = document.querySelectorAll('.dot');

    let counter = 1;
    let timer = setInterval(autoslide, 8000);
    function autoslide() {
        counter += 1;
        slidefun(counter);
    }
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
/*
    function currentSlide(n) {
        counter = n;
        slidefun(counter);
        resetTimer();
    }
    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(autoslide, 8000);
    }
*/
    function slidefun(n) {
        let i;
        console.log("LUZSIFER")
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



    start();

console.log(example, data);