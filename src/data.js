// estas funciones son de ejemplo

export const example = () => {
  return 'example';
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

// Función para Release Date
export const sortData = (data, items) =>{
  switch(items){
    case 'yearDescending':{
      const yearDesc = data.sort((a, b) => (b.release_date - a.release_date));
      return yearDesc;
    }
    case 'yearAscending':{
      const yearAsc = data.sort((a, b) => (a.release_date - b.release_date));
      return yearAsc;
    }
    case 'a-to-z':{
      const fromAtoZ = data.sort((a, b) => {
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
    case 'z-to-a':{
      const fromZtoA = data.sort((a, b) => {
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
    default:{
      break;
    }
  }
};
/*const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      state.count++;
      break;
    case 'DECREMENT':
      state.count--;
      break;
  }
  return state;
};*/