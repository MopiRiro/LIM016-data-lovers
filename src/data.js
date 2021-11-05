// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//Funciones para pagina personajes



export const dataPersonajes = (data) =>{


  
}

export const filterByProducer = (data,producer) => {
  return data.films.filter((item) => {
      return item.producer === producer;
  });
}