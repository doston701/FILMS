const elList = document.querySelector(".movies__list");
const elSelectGanres = document.querySelector(".select-list");
const elSearch = document.querySelector(".search");
const Searchresult = document.querySelector(".movies-result");

function getName(films) {
  let newArr = [];
  for (let movie of films) {
    for (let getCatog of movie.categories) {
      if (!newArr.includes(getCatog)) {
        newArr.push(getCatog);
      }
    }
  }

  return newArr;
}

function renderGenre(genres) {
  let addFilm = "";
  for (let categ of genres) {
    addFilm += `
    <option value= "${categ}">${categ}</option>
    `;
  }
  elSelectGanres.innerHTML += addFilm;
}

renderGenre(getName(movies));

function getMovie(addfilms) {
  let allfilm = "";
  for (let i of movies) {
    allfilm += ` 
    <li class="movies__item">
    <div class="card movies__card h-100">
      <img
        class="card-img-top"
        src="${i.smallThumbnail}"
      />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${i.title}</h5>
        <p>${i.year}</p>
        <p>${i.imdbRating}</p>
        <p>${i.language}</p>
        <div class="mt-auto d-flex justify-content-around">
          <a
            class="btn btn-outline-primary mt-auto"
            href="https://www.youtube.com/watch?v=${i.youtubeId}"
            >Watch Trailer</a
          ><button
            data-btn="${i.summary}"
            class="btn btn-outline-success bookmark mt-3"
          >
            Bookmark
          </button>
        </div>
      </div>
    </div>
  </li>
    `;
  }
  elList.innerHTML = allfilm;
}

Searchresult.textContent = movies.length;

getMovie(movies);

elSelectGanres.addEventListener("change", (evt) => {
  let optValue = evt.target.value;

  let filtred = movies.filter((moviesss) => {
    return moviesss.categories.includes(optValue);
  });

  getMovie(filtred);
});
