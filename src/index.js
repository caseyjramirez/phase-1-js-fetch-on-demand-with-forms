const movieURL = 'http://localhost:3000/movies'

const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.querySelector('input#searchByID')
        const id = input.value;

        fetch(`${movieURL}/${id}`)
        .then(res => res.json())
        .then(displayMovie)

    });

    function displayMovie(movie) {
        // return console.log(movie);
        const movieForm = document.querySelector('#movieDetails')
        const h4 = movieForm.getElementsByTagName('h4')[0]
        const p = movieForm.getElementsByTagName('p')[0]

        h4.textContent = movie.title
        p.textContent = movie.summary
        // console.log(h4, p);
    }

  
}

document.addEventListener('DOMContentLoaded', init);