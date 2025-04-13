export default class MovieCollection {
    constructor() {
        this.movies = [];
    }

    add(movie) {
        this.movies.push(movie);
    }

    display() {
        return this.movies.map(movie => movie.display()).join('\n');
    }
}
