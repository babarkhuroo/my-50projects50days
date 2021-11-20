//API Key = 102568db51f7574c4f738df5cf0cd2bd

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=102568db51f7574c4f738df5cf0cd2bd&page=1'
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=102568db51f7574c4f738df5cf0cd2bd&query='

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

getMoviesData(API_URL)

async function getMoviesData(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
        <img
        src="${IMG_URL + poster_path}"
        alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getVoteColor(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
        `
        main.appendChild(movieEl)
    })
}

function getVoteColor(value) {
    if (value >= 8) {
        return 'green'
    } else if (value >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = search.value

    if (searchTerm) {
        getMoviesData(SEARCH_URL + searchTerm)
        search.value = ''
    } else {
        window.location.reload()
    }
})
