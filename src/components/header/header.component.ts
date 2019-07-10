import { Component, Vue } from 'vue-property-decorator';
import WithRender from './header.component.html';
import SearchMovie from '@/components/header/search-movie/search-movie.component';
import MovieFullInfo from '@/components/header/movie-full-info/movie-full-info.component';
import { store, storeMutations } from '@/observableData';
import { IMovieDataFields } from '@/types';

require('./header.component.less');

@WithRender
@Component({
  components: {
    SearchMovie,
    MovieFullInfo
  }
})
export default class Header extends Vue {
  get movieInfo(): IMovieDataFields {
    return <IMovieDataFields>store.selectedMovie;
  }

  public clearFilters() {
    storeMutations.setAllMovies();
  }
}
