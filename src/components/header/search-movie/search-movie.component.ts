import Vue from 'vue';
import Component from 'vue-class-component';
import FilterButtons from '@/components/filter-buttons/filter-buttons.component';
import WithRender from './search-movie.component.html';
import { IButtonProps, MovieDataFieldsEnum } from '@/types';

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

  public searchMovies(filterField: string) {
    console.log('movies searching ', filterField);
  }
}
