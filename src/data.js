export const filterByProdAndDirec = (data, name, items) => {
  switch (items) {
    case 'director': {
      return data.films.filter(film => film.director === name);
    }
    case 'producer': {
      return data.films.filter(film => film.producer === name);
    }
    default: {
      break;
    }
  }
};


//Funciones para pagina personajes
    // export const dataPersonajes = (data) =>{
      
    // }

export const filterByFilms = (data,films) => {
  
}



export const filterByProducer = (producer) => {
  return data.films.filter((item) => {
    return item.producer === producer;
});
}


export const filterByDirector = (director) => {
}

export const filterByUpward = (data,upward) => {
  
}

export const filterByFalling = (data,falling) => {
  
}

export const filterBy = (data, items) => {
  switch (items) {
    case "Year Descending": {
      const descYear = data.films.sort((a, b) => (a.release_date < b.release_date ? 1 : -1));
      return descYear;
    }
    case "Year Ascending": {
      const ascYear = data.films.sort((a, b) => (a.release_date > b.release_date ? 1 : -1));
      return ascYear;
    }
    case "A - Z": {
      const fromAtoZ = data.films.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      })
      return fromAtoZ;
    }
    case "Z - A": {
      const fromZtoA = data.films.sort((a, b) => {
        if (a.title < b.title) {
          return 1;
        }
        if (a.title > b.title) {
          return -1;
        }
        return 0;
      })
      return fromZtoA;
    }
    default: {
      break;
    }
  }
};

export const filterPeopleByFilms = (data, item) => {
  // let dataImg = [];
  // for(let i=0; i<data.films.length; i++){
  // dataImg[i] = data.films[i].people.map(item=>item.img);
  // }
  // console.log(dataImg);

}

// export const filterSearchPeople = (data, value) => {
  
// }

