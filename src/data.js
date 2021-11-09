// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

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

export const searchData = (data, condition, value) => {
  return data.filter(item => item[condition].toLowerCase().includes(value.toLowerCase()));
}