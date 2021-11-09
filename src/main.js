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
    console.log(posterFilms);
    let release_dateFilms = dataFilms.map(x => x.release_date);
    let rt_scoreFilms = dataFilms.map(x => x.rt_score);
    let peopleFilms = dataFilms.map(x => x.people);
    // console.log(peopleFilms);


    


    /*Pagina 3 */

    let cbo=document.getElementById("cboPersonajes");
    cbo.addEventListener('change', ()=>{
        let cbo = document.getElementById("cboPersonajes");
        let selected = cbo.options[cbo.selectedIndex].text;
        document.getElementById("resultado-cbo").innerHTML=selected;
    })

    

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


    let img = document.createElement("img");                 
    img.src=posterFilms[0];                     
    document.getElementById("div1").appendChild(img);

    let img2 = document.createElement("img");                 
    img2.src=posterFilms[1];                     
    document.getElementById("div2").appendChild(img2);

    let img3 = document.createElement("img");                 
    img3.src=posterFilms[2];                     
    document.getElementById("div3").appendChild(img3);

    let img4 = document.createElement("img");                 
    img4.src=posterFilms[3];                     
    document.getElementById("div4").appendChild(img4);



    
    // for (let i = 0; i < posterFilms.length; i++) {
    //     // let img = document.createElement("img");                 
    //     img.src=posterFilms[i]; 
    //     document.getElementById("div1").createElement("img");
    //     img.classList.add("div1");
    //    }