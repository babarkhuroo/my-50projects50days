//API Key = 102568db51f7574c4f738df5cf0cd2bd

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=102568db51f7574c4f738df5cf0cd2bd&page=1'
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=102568db51f7574c4f738df5cf0cd2bd&query='

const form = document.getElementById('form')
const search = document.getElementById('search')

getMoviesData(API_URL)

async function getMoviesData(url) {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.results)
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
