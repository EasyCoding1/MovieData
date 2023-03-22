const movieData = {
    "The Darjeeling Limited": {
        plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
        cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
        runtime: 151,
        rating: 7.2,
        year: 2007,
      },
      "The Royal Tenenbaums": {
        plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
        rating: 7.6,
        year: 2001,
        cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
        runtime: 170,
      },
      "Fantastic Mr. Fox": {
        year: 2009,
        plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
        cast: [
          "George Clooney",
          "Meryl Streep",
          "Bill Murray",
          "Jason Schwartzman",
        ],
        runtime: 147,
        rating: 7.9,
      },
      "The Grand Budapest Hotel": {
        rating: 8.1,
        runtime: 159,
        year: 2014,
        plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
        cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
      },
    };
  
  
  const movieContainer = document.querySelector('.movie-container');
  
  function createMovieCard(movie, details) {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
  
    movieCard.innerHTML = `
      <h2>${movie}</h2>
      <p><strong>Plot:</strong> ${details.plot}</p>
      <p><strong>Cast:</strong> ${details.cast.join(', ')}</p>
      <p><strong>Runtime:</strong> ${details.runtime} minutes</p>
      <p><strong>Rating:</strong> ${details.rating}</p>
      <p><strong>Year:</strong> ${details.year}</p>
    `;
  
    return movieCard;
  }
  
  function renderMovieCards() {
    for (const movie in movieData) {
      const movieCard = createMovieCard(movie, movieData[movie]);
      movieContainer.appendChild(movieCard);
    }
  }
  
  renderMovieCards();



  document.getElementById('sort').addEventListener('change', (event) => {
    const sortBy = event.target.value;
    const sortedData = Object.entries(movieData).sort((a, b) => {
      return b[1][sortBy] - a[1][sortBy];
    });
  
    movieContainer.innerHTML = '';
  
    for (const [movie, details] of sortedData) {
      const movieCard = createMovieCard(movie, details);
      movieContainer.appendChild(movieCard);
    }
  });
  
  const addMovieForm = document.getElementById('add-movie-form');
  
  addMovieForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const plot = document.getElementById('plot').value;
    const cast = document.getElementById('cast').value.split(',').map((name) => name.trim());
    const runtime = parseInt(document.getElementById('runtime').value, 10);
    const rating = parseFloat(document.getElementById('rating').value);
    const year = parseInt(document.getElementById('year').value, 10);
  
    movieData[title] = {
      plot,
      cast,
      runtime,
      rating,
      year,
    };
  
    const movieCard = createMovieCard(title, movieData[title]);
    movieContainer.appendChild(movieCard);
    addMovieForm.reset();
  });


const scrollButton = document.querySelector('#newMovieButton')
const scrollTo = document.querySelector('#add-movie-form')

const scrollToForm = function () {
    scrollTo.scrollIntoView({ behavior: 'smooth' });
};

scrollButton.addEventListener('click', scrollToForm);