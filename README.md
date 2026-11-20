# Movie Collection Management

A small browser app for browsing a movie collection, written in plain JavaScript with ES modules and classes. Built as coursework at Collège LaSalle (March to April 2025).

**Live demo:** https://aoof.github.io/movie-collection-system/

## Features
- A `Movie` class (title, director, release year, availability) and a `MovieCollection` class that holds the movies.
- Search by title, director or year; results update as you type.
- Check a movie out or return it; unavailable movies are greyed out.

## Project structure
```
index.html              page layout and search form
src/Movie.js            Movie class
src/MovieCollection.js  MovieCollection class
src/index.js            sample data, search and rendering
src/main.css            styles
```

## Run it locally
ES modules don't load from `file://`, so serve the folder with any static server:

```bash
git clone https://github.com/Aoof/movie-collection-system.git
cd movie-collection-system
npx serve .        # or: python -m http.server
```

Then open the address it prints.

## Author
Abdulrahman (Aoof) Mousa · [aoof.ca](https://aoof.ca)
