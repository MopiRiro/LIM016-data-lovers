export const filterByProdAndDirec = (data, name, items) => {
  switch (items) {
    case 'director': {
      return data.filter(film => film.director === name);
    }
    case 'producer': {
      return data.filter(film => film.producer === name);
    }
    default: {
      return [];
    }
  }
};

export const filterBy = (data, items) => {
  switch (items) {
    case "Year Descending": {
      const descYear = data.sort((a, b) => (a.release_date < b.release_date ? 1 : -1));
      return descYear;
    }
    case "Year Ascending": {
      const ascYear = data.sort((a, b) => (a.release_date > b.release_date ? 1 : -1));
      return ascYear;
    }
    case "A - Z": {
      const fromAtoZ = data.sort((a, b) => getOrderDescendent(a, b))
      return fromAtoZ;
    }
    case "Z - A": {
      const fromZtoA = data.sort((a, b) => getOrderAscendent(a, b))
      return fromZtoA;
    }
    case "Top rated": {
      const topRated = data.sort((a, b) => {
        if (parseInt(a.rt_score) < parseInt(b.rt_score)) {
          return 1;
        }
        if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
          return -1;
        }
        return 0;
      })
      return topRated;
    }
    default: {
      return [];
    }
  }
};

export const filterPeopleByFilms = (data, condition, itemFilms) => {
  return data.find(item => item[condition] === itemFilms);
}

export const filterCharacters = (data, condition, itemFilms) => {
  return data.filter(item => item[condition] === itemFilms);
}

export const getOrderAscendent = (a, b) => {
  if (a.title < b.title) {
    return 1;
  } else {
    return -1;
  }
}

export const getOrderDescendent = (a, b) => {
  if (a.title < b.title) {
    return -1;
  } else {
    return 1
  }
}
