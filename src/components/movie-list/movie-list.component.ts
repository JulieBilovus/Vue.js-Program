import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './movie-list.component.html';
import { IButtonProps, IMovieDataFields, MovieDataFieldsEnum } from '@/types';
import { store, storeMutations } from '@/observableData';
import FilterButtons from '@/components/filter-buttons/filter-buttons.component';
import MovieItem from '@/components/movie-list/movie-item/movie-item.component';

require('./movie-list.component.less');

@WithRender
@Component({
  components: {
    FilterButtons,
    MovieItem
  }
})
export default class MovieList extends Vue {
  public label = 'Sort By';

  public buttonsSet: Array<IButtonProps> = [
    {
      label: 'Release Date',
      filterField: MovieDataFieldsEnum.year,
    }, {
      label: 'Rating',
      filterField: MovieDataFieldsEnum.rating
    }
  ];

  get movies(): Array<IMovieDataFields> {
    return store.movies;
  }

  public sortMovies(sortField: MovieDataFieldsEnum) {
    storeMutations.filterMovies(sortField);
  }
}
