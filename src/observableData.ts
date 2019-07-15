import Vue from 'vue';
import {GengreTypesEnum, IMovieDataFields, MovieDataFieldsEnum} from '@/types';

const allMovies: Array<IMovieDataFields> = [
  {
    name: 'Spider-Man: Far From Home',
    rating: 4,
    filmDirector: 'Jon Watts',
    duration:  129,
    year:  2019,
    description: 'Peter Parker\'s relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission. The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire -- emerge from a hole torn in the universe. Parker soon finds himself donning the Spider-Man suit to help Fury and fellow superhero Mysterio stop the evil entities from wreaking havoc across the continent.',
    gengre: [
      GengreTypesEnum.action,
      GengreTypesEnum.adventure,
      GengreTypesEnum.comedy,
      GengreTypesEnum.fantasy
    ],
    posterPath: 'https://dz7u9q3vpd4eo.cloudfront.net/admin-uploads/posters/spiderman-farfromhome-poster_1547571424.jpg?d=270x360&q=50'
  }, {
    name: 'The Lion King',
    rating: 5,
    filmDirector: 'Jon Favreau',
    duration:  118,
    year:  2017,
    description: 'Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny on the plains of Africa. But not everyone in the kingdom celebrates the new cub\'s arrival. Scar, Mufasa\'s brother -- and former heir to the throne -- has plans of his own. The battle for Pride Rock is soon ravaged with betrayal, tragedy and drama, ultimately resulting in Simba\'s exile. Now, with help from a curious pair of newfound friends, Simba must figure out how to grow up and take back what is rightfully his.',
    gengre: [
      GengreTypesEnum.adventure,
      GengreTypesEnum.children
    ],
    posterPath: 'https://dz7u9q3vpd4eo.cloudfront.net/admin-uploads/posters/image001_1542928720.png?d=270x360&q=50'
  }, {
    name: 'Men in Black: International',
    rating: 3,
    filmDirector: 'F. Gary Gray',
    duration:  155,
    year:  2018,
    description: 'The Men in Black have expanded to cover the globe but so have the villains of the universe. To keep everyone safe, decorated Agent H and determined rookie M join forces -- an unlikely pairing that just might work. When aliens that can take the form of any human arrive on Earth, H and M embark on a globe-trotting adventure to save the agency -- and ultimately the world -- from their mischievous plans.',
    gengre: [
      GengreTypesEnum.adventure,
      GengreTypesEnum.comedy,
      GengreTypesEnum.sciFi
    ],
    posterPath: 'https://dz7u9q3vpd4eo.cloudfront.net/admin-uploads/posters/mibi_1545332594.jpg?d=270x360&q=50'
  }
];

export const store = Vue.observable({
  movies: [...allMovies],
  selectedMovie: <IMovieDataFields>{},
  findedMovies: <Array<IMovieDataFields>>[]
});

export const storeMutations = {
  filterMovies(sortField: MovieDataFieldsEnum) {
    store.movies.sort(({[sortField]: f1}, {[sortField]: f2}) => <number>f1 - <number>f2);
  },

  searchMovies(searchPrase: string, searchField: MovieDataFieldsEnum) {
    const findedMovies = allMovies.filter(({[searchField]: field}) => {
      const stringValue = Array.isArray(field) ? field.join(' ') : field;

      return stringValue.toString().toLocaleLowerCase().includes(searchPrase);
    });

    store.movies = [...findedMovies];
  },

  setAllMovies() {
    store.movies = [...allMovies];
  },

  setSelectedMovie(movie: IMovieDataFields) {
    store.selectedMovie = movie;
  },

  clearSelectedMovie() {
    store.selectedMovie = <IMovieDataFields>{};
  },

  setFindedMovies(movies: Array<IMovieDataFields>) {
    store.findedMovies = [...movies];
  },
};

export const getters = {
  getMoviesLength() {
    return store.movies.length;
  }
}
