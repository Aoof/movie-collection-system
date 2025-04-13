export default class Movie {
    constructor(title, director, releaseYear, isAvailable = true) {
        this.title = title;
        this.director = director;
        this.releaseYear = releaseYear;
        this.isAvailable = isAvailable;
    }

    display() {
        return `${this.title} (${this.releaseYear}) - ${this.director} - ${this.isAvailable ? 'Available' : 'Not Available'}`;
    }
}
