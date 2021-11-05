import { dataPersonajes, example } from './data.js';


import data from './data/ghibli/ghibli.js'

let cboPersonajes = document.getElementById("cboPersonajes");





    // Slider
    const myslide = document.querySelectorAll('.myslider'), dot = document.querySelectorAll('.dot');

    let counter = 1;
    slidefun(counter);

    let timer = setInterval(autoslide, 8000);
    function autoslide() {
        counter += 1;
        slidefun(counter);
    }
    function plusSlides(n) {
        counter += n;
        slidefun(counter);
        resetTimer();
    }
    function currentSlide(n) {
        counter = n;
        slidefun(counter);
        resetTimer();
    }
    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(autoslide, 8000);
    }

    function slidefun(n) {
        let i;
        for (i = 0; i < myslide.length; i++){
            myslide[i].style.display = "none";
        }
        for (i = 0; i < dot.length; i++){
            dot[1].classList.remove('active');
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

/*Pagina 3 */
console.log(data.films);

const dataPersonajes=data.films; 


console.log(example, data);
