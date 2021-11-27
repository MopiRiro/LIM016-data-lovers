import { filterByProdAndDirec, filterBy, filterPeopleByFilms, filterCharacters } from '../src/data.js';

const ghibliMock = [
  {
    "title": "Spirited Away",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
    "release_date": "2001",
    "rt_score": "97",
    "people": [
      {"name": "Chihiro Ogino/Sen"}]
  },
  {
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "release_date": "1988",
    "rt_score": "93",
    "people": [
      {"name": "Satsuki Kusakabe"}]
  },
  {
    "title": "Grave of the Fireflies",
    "director": "Isao Takahata",
    "producer": "Toru Hara",
    "release_date": "1988",
    "rt_score": "97",
    "people": [
        {"name": "Seita Yokokawa"
      }]
  }

];

describe('filterByProdAndDirec', () => {
  it('is a function FilterByProdAndDirec', () => {
    expect(typeof filterByProdAndDirec).toBe('function');
  });

  const director = "director";
  it('Should return `Hayao Miyazaki`', () => {
    expect(filterByProdAndDirec(ghibliMock, "Hayao Miyazaki", director)).toEqual(
      "Hayao Miyazaki");
  });
});

describe(filterBy, () => {
  it('is a function FilterBy', () => {
    expect(typeof filterBy).toBe('function');
  });

  it('returns `example`', () => {
    expect(filterBy()).toEqual('example');
  });
});

describe(filterPeopleByFilms, () => {
  it('is a function FilterPeopleByFilms', () => {
    expect(typeof filterPeopleByFilms).toBe('function');
  });

  it('returns `example`', () => {
    expect(filterPeopleByFilms()).toEqual('example');
  });
});

describe(filterCharacters, () => {
  it('is a function FilterCharacters', () => {
    expect(typeof filterCharacters).toBe('function');
  });

  it('returns `example`', () => {
    expect(filterCharacters()).toEqual('example');
  });
});
