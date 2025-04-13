import { MovieCollection } from './MovieCollection';
import { Movie } from './Movie';

const movieCollection = new MovieCollection();
const movie1 = new Movie('The Shawshank Redemption', 'Frank Darabont', 1994);

movieCollection.add(movie1);
movieCollection.add(movie1);
movieCollection.add(movie1);
movieCollection.add(movie1);
console.log(movieCollection.display());
