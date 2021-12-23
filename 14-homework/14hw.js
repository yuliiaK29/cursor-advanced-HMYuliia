const baseUrl = "https://swapi.dev/api/films/2";
const planetsUrl = "https://swapi.dev/api/planets/?page=";
const images = [
  {
    name: "R2-D2",
    image: "images/R2-D2.jpg",
  },
  {
    name: "Luke Skywalker",
    image: "images/Luke-Skywalker.jpg",
  },
  {
    name: "Leia Organa",
    image: "images/Leia-Organa.jpg",
  },
  {
    name: "C-3PO",
    image: "images/C-3PO.jpg",
  },
  {
    name: "Darth Vader",
    image: "images/Darth-Vader.jpg",
  },
  {
    name: "Chewbacca",
    image: "images/Chewbacca.jpg",
  },
  {
    name: "Obi-Wan Kenobi",
    image: "images/Wan-Kenobi.jpg",
  },
  {
    name: "Lobot",
    image: "images/Lobot.jpg",
  },
  {
    name: "Lando Calrissian",
    image: "images/Lando-Calrissian.jpg",
  },
  {
    name: "Bossk",
    image: "images/Bossk.jpg",
  },
  {
    name: "IG-88",
    image: "images/IG-88.jpg",
  },
  {
    name: "Boba Fett",
    image: "images/Boba-Fett.jpg",
  },
  {
    name: "Palpatine",
    image: "images/Palpatine.jpg",
  },
  {
    name: "Han Solo",
    image: "images/Han-Solo.jpg",
  },
  {
    name: "Wedge Antilles",
    image: "images/Wedge-Antilles.jpg",
  },
  {
    name: "Yoda",
    image: "images/Yoda.jpg",
  },
];

const getInformation = document.getElementById("get-info-button");
const result = document.getElementById("result");
const getMovies = () => {
  axios
    .get(`${baseUrl}`)
    .then(response => {
      const characters = response.data.characters;
      characters.forEach(character => {
        axios.get(`${character}`).then(person => {
          const personName = person.data.name;
          const characterImage = images.find(
            image => image.name === personName
          );
          const item = `<div class="characters__item">
          <h2 class="characters__item-name">${personName}</h2> 
          <div class="characters__item-birth">${person.data.birth_year}</div> 
          <div class="characters__item-gender">${person.data.gender}</div>
          <img class="characters__item-image" src=${characterImage.image}>`;
          result.innerHTML += item;
        });
      });
    })
    .catch(err => {
      console.log("Error:", err);
      result.innerHTML = "Error occured :" + err.message;
    });
};
getInformation.addEventListener("click", () => {
  clean();
  getMovies();
});

function clean() {
  if (result !== null) {
    result.innerHTML = "";
  }
}

const getInformationAboutPlanet = document.getElementById("get-all-planets");
const getPlanets = pageNumber => {
  axios.get(`${planetsUrl}${pageNumber}`).then(response => {
    const planets = response.data.results;
    planets.forEach(planet => {
      const item = `<div class="planets__item">${planet.name}</div>`;
      console.log(planet.name);
      result.innerHTML += item;
    });
  });
};

const nextPlanetsButton = document.getElementById("next-button");

getInformationAboutPlanet.addEventListener("click", () => {
  clean();
  getPlanets(1);
  nextPlanetsButton.style.display = "block";
});

let pageNumber = 1;
nextPlanetsButton.addEventListener("click", () => {
  clean();
  pageNumber = pageNumber + 1;

  if (pageNumber >= 6) nextPlanetsButton.style.display = "none";
  getPlanets(pageNumber);
});
