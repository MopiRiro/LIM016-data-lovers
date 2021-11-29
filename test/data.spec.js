import { filterByProdAndDirec, filterBy, filterPeopleByFilms, filterCharacters, getOrderAscendent, getOrderDescendent } from '../src/data.js';

const ghibliMock = [
  {
    "title": "Spirited Away",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
    "release_date": "2001",
    "rt_score": "97",
    "people": [
      { "name": "Chihiro Ogino/Sen" }]
  },
  {
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "release_date": "1988",
    "rt_score": "93",
    "people": [
      { "name": "Satsuki Kusakabe" }]
  },
  {
    "title": "Grave of the Fireflies",
    "director": "Isao Takahata",
    "producer": "Toru Hara",
    "release_date": "1988",
    "rt_score": "97",
    "people": [
      {
        "name": "Seita Yokokawa"
      }]
  }
];

describe('filterByProdAndDirec', () => {
  it('is a function FilterByProdAndDirec', () => {
    expect(typeof filterByProdAndDirec).toBe('function');
  });

  const director = "director";
  it('Should return `Isao Takahata`', () => {
    expect(filterByProdAndDirec(ghibliMock, "Isao Takahata", director)).toEqual(
      [{
        "title": "Grave of the Fireflies",
        "director": "Isao Takahata",
        "producer": "Toru Hara",
        "release_date": "1988",
        "rt_score": "97",
        "people": [
          {
            "name": "Seita Yokokawa"
          }]
      }]
    );
  });

  const producer = "producer";
  it('Should return `Toru Hara`', () => {
    expect(filterByProdAndDirec(ghibliMock, "Toru Hara", producer)).toEqual(
      [{
        "title": "Grave of the Fireflies",
        "director": "Isao Takahata",
        "producer": "Toru Hara",
        "release_date": "1988",
        "rt_score": "97",
        "people": [
          {
            "name": "Seita Yokokawa"
          }]
      }]
    );
  });

  it('Should return `break`', () => {
    expect(filterByProdAndDirec(ghibliMock, "Yoshiaki Nishimura", "none")).toEqual(
      []
    );
  });
});

describe(filterBy, () => {
  const ghibliForFilterBy = [
    {
      "title": "Spirited Away",
      "release_date": "2001",
      "rt_score": "97",
    },
    {
      "title": "My Neighbor Totoro",
      "release_date": "1988",
      "rt_score": "93",
    },
    {
      "title": "Grave of the Fireflies",
      "release_date": "1988",
      "rt_score": "97",
    }
  ];
  it('is a function FilterBy', () => {
    expect(typeof filterBy).toBe('function');
  });

  it('returns `Year Descending`', () => {
    expect(filterBy(ghibliMock, 'Year Descending')).toEqual(
      [{
        "title": "Spirited Away",
        "director": "Hayao Miyazaki",
        "producer": "Toshio Suzuki",
        "release_date": "2001",
        "rt_score": "97",
        "people": [
          { "name": "Chihiro Ogino/Sen" }]
      },
      {
        "title": "Grave of the Fireflies",
        "director": "Isao Takahata",
        "producer": "Toru Hara",
        "release_date": "1988",
        "rt_score": "97",
        "people": [
          {
            "name": "Seita Yokokawa"
          }]
      },
      {
        "title": "My Neighbor Totoro",
        "director": "Hayao Miyazaki",
        "producer": "Hayao Miyazaki",
        "release_date": "1988",
        "rt_score": "93",
        "people": [
          { "name": "Satsuki Kusakabe" }]
      }]
    );
  });

  it('returns `Year Ascending`', () => {
    expect(filterBy(ghibliForFilterBy, 'Year Ascending')).toEqual(
      [{
        "title": "Grave of the Fireflies",
        "release_date": "1988",
        "rt_score": "97",
      },
      {
        "title": "My Neighbor Totoro",
        "release_date": "1988",
        "rt_score": "93",
      },
      {
        "title": "Spirited Away",
        "release_date": "2001",
        "rt_score": "97",
      }]
    );
  });

  it('returns `A - Z`', () => {
    expect(filterBy(ghibliForFilterBy, 'A - Z')).toEqual(
      [{
        "title": "Grave of the Fireflies",
        "release_date": "1988",
        "rt_score": "97",
      },
      {
        "title": "My Neighbor Totoro",
        "release_date": "1988",
        "rt_score": "93",
      },
      {
        "title": "Spirited Away",
        "release_date": "2001",
        "rt_score": "97",
      }]
    );
  });

  it('returns `Z - A`', () => {
    expect(filterBy(ghibliMock, 'Z - A')).toEqual(
      [{
        "title": "Spirited Away",
        "director": "Hayao Miyazaki",
        "producer": "Toshio Suzuki",
        "release_date": "2001",
        "rt_score": "97",
        "people": [
          { "name": "Chihiro Ogino/Sen" }]
      },
      {
        "title": "My Neighbor Totoro",
        "director": "Hayao Miyazaki",
        "producer": "Hayao Miyazaki",
        "release_date": "1988",
        "rt_score": "93",
        "people": [
          { "name": "Satsuki Kusakabe" }]
      },
      {
        "title": "Grave of the Fireflies",
        "director": "Isao Takahata",
        "producer": "Toru Hara",
        "release_date": "1988",
        "rt_score": "97",
        "people": [
          {
            "name": "Seita Yokokawa"
          }]
      }]
    );
  });

  it('returns `Top rated`', () => {
    expect(filterBy(ghibliForFilterBy, "Top rated")).toEqual(
      [{
        "title": "Grave of the Fireflies",
        "release_date": "1988",
        "rt_score": "97",
      },
      {
        "title": "Spirited Away",
        "release_date": "2001",
        "rt_score": "97",
      },
      {
        "title": "My Neighbor Totoro",
        "release_date": "1988",
        "rt_score": "93",
      }]
    );
  });

  it('returns `Default`', () => {
    expect(filterBy(ghibliForFilterBy, "None")).toEqual(
      []
    );
  });
});

describe(filterPeopleByFilms, () => {
  it('is a function FilterPeopleByFilms', () => {
    expect(typeof filterPeopleByFilms).toBe('function');
  });

  const peopleFilms = [
    {
      "title": "Spirited Away",
      "people":
        { "name": "Chihiro Ogino/Sen" }
    },
    {
      "title": "My Neighbor Totoro",
      "people": {
        "name": "Satsuki Kusakabe"
      }
    },
    {
      "title": "Grave of the Fireflies",
      "people":
        { "name": "Seita Yokokawa" }
    }]

  it('returns `Chihiro`', () => {
    expect(filterPeopleByFilms(peopleFilms, "title", "Spirited Away")).toEqual(
      {
        "title": "Spirited Away",
        "people":
          { "name": "Chihiro Ogino/Sen" }
      });
  });
});

describe(filterCharacters, () => {
  it('is a function FilterCharacters', () => {
    expect(typeof filterCharacters).toBe('function');
  });

  const ghibliMockPeople = [
    {
      "name": "Chihiro Ogino/Sen",
      "specie": "Human"
    },
    {
      "name": "Totoro",
      "specie": "Totoro"
    }
  ];
  it('returns `Totoro`', () => {
    expect(filterCharacters(ghibliMockPeople, "specie", "Totoro")).toEqual(
      [{
        "name": "Totoro",
        "specie": "Totoro"
      }]);
  });
});

describe(getOrderAscendent, () => {
  it('is a function getOrderAscendent', () => {
    expect(typeof getOrderAscendent).toBe('function');
  });

  const ghibliMockPeople = [
    {
      "title": "Spirited Away",
      "name": "Chihiro Ogino/Sen",
      "specie": "Human"
    },
    {
      "title": "My Neighbor Totoro",
      "name": "Totoro",
      "specie": "Totoro"
    }
  ];
  it('returns `My Neighbor Totoro & Spirited Away`', () => {
    expect(getOrderAscendent(ghibliMockPeople[0], ghibliMockPeople[1])).toEqual(-1);
  });
});

describe(getOrderDescendent, () => {
  it('is a function getOrderDescendent', () => {
    expect(typeof getOrderDescendent).toBe('function');
  });

  const ghibliMockPeople = [
    {
      "title": "Spirited Away",
      "name": "Chihiro Ogino/Sen",
      "specie": "Human"
    },
    {
      "title": "My Neighbor Totoro",
      "name": "Totoro",
      "specie": "Totoro"
    }
  ];
  it('returns `Spirited Away & My Neighbor Totoro`', () => {
    expect(getOrderDescendent(ghibliMockPeople[1], ghibliMockPeople[0])).toEqual(-1);
  });
});
