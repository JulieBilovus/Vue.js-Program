import Vue from 'vue';
import Component from 'vue-class-component';
import FilterButtons from '@/components/filter-buttons/filter-buttons.component';
import WithRender from './search-movie.component.html';
import { IButtonProps, MovieDataFieldsEnum } from '@/types';
import { storeMutations, getters } from '@/observableData';

require('./search-movie.component.less');

@WithRender
@Component({
  components: {
    FilterButtons,
  }
})
export default class SearchMovie extends Vue {
  get moviesLength() {
    return getters.getMoviesLength();
  }

  public label = 'Search By';

  public buttonsSet: Array<IButtonProps> = [
    {
      label: 'Title',
      filterField: MovieDataFieldsEnum.title,
    }, {
      label: 'Gengre',
      filterField: MovieDataFieldsEnum.genres
    }
  ];

  public fieldValue = '';

  public searchField = MovieDataFieldsEnum.title;

  public searchMovies(filterField: MovieDataFieldsEnum) {
    this.searchField = filterField;
  }

  public runSearch(filterFieldIndex: number) {
    if (this.fieldValue.length) {
      storeMutations.searchMovies(this.fieldValue.toLocaleLowerCase(), this.buttonsSet[filterFieldIndex].filterField);
    } else {
      storeMutations.setAllMovies();
    }
  }
}
