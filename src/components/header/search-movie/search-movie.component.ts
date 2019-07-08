import Vue from 'vue';
import Component from 'vue-class-component';
import FilterButtons from '@/components/filter-buttons/filter-buttons.component';
import WithRender from './search-movie.component.html';
import { IButtonProps, MovieDataFieldsEnum } from '@/types';
import { storeMutations } from '@/observableData';

require('./search-movie.component.less');

@WithRender
@Component({
  components: {
    FilterButtons,
  }
})
export default class SearchMovie extends Vue {
  public label = 'Search By';

  public buttonsSet: Array<IButtonProps> = [
    {
      label: 'Title',
      filterField: MovieDataFieldsEnum.name,
    }, {
      label: 'Gengre',
      filterField: MovieDataFieldsEnum.gengre
    }
  ];

  public fieldValue = '';

  public searchField = MovieDataFieldsEnum.name;

  public searchMovies(filterField: MovieDataFieldsEnum) {
    this.searchField = filterField;
  }

  public runSearch() {
    if (this.fieldValue.length) {
      storeMutations.searchMovies(this.fieldValue.toLocaleLowerCase(), this.searchField);
    } else {
      storeMutations.setAllMovies();
    }
  }
}
