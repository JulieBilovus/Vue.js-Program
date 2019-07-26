import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './movie-list.component.html';
import { IButtonProps, IMovieDataFields, MovieDataFieldsEnum } from '@/types';
import { store, storeMutations } from '@/observableData';
import FilterButtons from '@/components/filter-buttons/filter-buttons.component';
import MovieItem from '@/components/movie-list/movie-item/movie-item.component';
import { mapGetters } from "vuex";

require('./movie-list.component.less');

@WithRender
@Component({
  components: {
    FilterButtons,
    MovieItem
  },
  computed: mapGetters({
    movies: 'getSortedMovies',
    moviesCount: 'getMoviesCount'
  })
})
export default class MovieList extends Vue {
  public label = 'Sort By';

  public buttonsSet: Array<IButtonProps> = [
    {
      label: 'Release Date',
      filterField: MovieDataFieldsEnum.release_date,
    }, {
      label: 'Rating',
      filterField: MovieDataFieldsEnum.vote_average
    }
  ];

  public sortMovies(filterFieldIndex: number) {
    storeMutations.filterMovies(this.buttonsSet[filterFieldIndex].filterField);
  }
}
