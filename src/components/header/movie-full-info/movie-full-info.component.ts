import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { storeMutations } from '@/observableData';
import WithRender from './movie-full-info.component.html';
import { IMovieDataFields } from '@/types';

require('./movie-full-info.component.less');

@WithRender
@Component({})
export default class MovieFullInfo extends Vue {
  @Prop()
  movieInfo: IMovieDataFields | undefined;

  clearCurrentMovie() {
    storeMutations.clearSelectedMovie();
  }
}
