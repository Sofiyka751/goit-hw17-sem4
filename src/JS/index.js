const newsList = document.getElementById("news-list");
const loadMoreButton = document.getElementById("load");

const url = "https://rickandmortyapi.com/api";
let page = 2;

const fetchMovieCharacters = async (page = 1) => {
  try {
    const newsData = await fetch(`${url}/character?page=${page}`);
    const { results, info } = await newsData.json();
    makeHtml(results, info.pages);
  } catch (error) {}
};

function makePagination(countOfPages) {
  const numbers = [];
  for (let i = 1; i <= countOfPages; i++) {
    numbers.push(i);
  }
  renderPagination(numbers);
}

fetchMovieCharacters(page);

function makeHtml(characters) {
  const markup = characters
    .map((character) => {
      return `<li class="news-item">
    <img class="news-list-photo" src="${character.image}" />
    <h1 class="news-list-name">${character.name}</h1>
    <p class="news-list-species">${character.species}</p>
    <p class="news-list-status">${character.status}</p>
    </li>`;
    })
    .join('');

  newsList.insertAdjacentHTML("beforeend", markup);
}

loadMoreButton.addEventListener("click", async () => {
  page++;
  fetchMovieCharacters(page);
});
