import MovieCollection from './MovieCollection.js';
import Movie from './Movie.js';

const collection = new MovieCollection();

[
    new Movie('The Shawshank Redemption', 'Frank Darabont', 1994),
    new Movie('Spirited Away', 'Hayao Miyazaki', 2001),
    new Movie('Inception', 'Christopher Nolan', 2010, false),
    new Movie('Parasite', 'Bong Joon-ho', 2019),
    new Movie('Interstellar', 'Christopher Nolan', 2014),
    new Movie('Incendies', 'Denis Villeneuve', 2010, false),
].forEach(movie => collection.add(movie));

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const results = document.getElementById('results');

function search(query) {
    const q = query.trim().toLowerCase();
    if (!q) return collection.movies;
    return collection.movies.filter(movie =>
        movie.title.toLowerCase().includes(q) ||
        movie.director.toLowerCase().includes(q) ||
        String(movie.releaseYear).includes(q)
    );
}

function render(movies) {
    results.innerHTML = '';

    if (movies.length === 0) {
        const empty = document.createElement('li');
        empty.className = 'empty';
        empty.textContent = 'No movies match your search.';
        results.appendChild(empty);
        return;
    }

    movies.forEach(movie => {
        const item = document.createElement('li');
        item.className = movie.isAvailable ? 'available' : 'unavailable';

        const text = document.createElement('span');
        text.textContent = movie.display();

        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.textContent = movie.isAvailable ? 'Check out' : 'Return';
        toggle.addEventListener('click', () => {
            movie.isAvailable = !movie.isAvailable;
            render(search(input.value));
        });

        item.append(text, toggle);
        results.appendChild(item);
    });
}

form.addEventListener('submit', event => {
    event.preventDefault();
    render(search(input.value));
});

input.addEventListener('input', () => render(search(input.value)));

console.log(collection.display());
render(collection.movies);
