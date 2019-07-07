import { Component, Vue } from 'vue-property-decorator';
import WithRender from './header.component.html';
import SearchMovie from '@/components/header/search-movie/search-movie.component';
import MovieFullInfo from '@/components/header/movie-full-info/movie-full-info.component';
import { GengreTypesEnum, IMovieDataFields } from '@/types';

require('./header.component.less');

@WithRender
@Component({
  components: {
    SearchMovie,
    MovieFullInfo
  }
})
export default class Header extends Vue {
  public movieInfo: IMovieDataFields = {
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
  }
}
