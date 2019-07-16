import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { storeMutations } from '@/observableData';
import WithRender from './movie-item.component.html';
import {IMovieDataFields} from '@/types';

require('./movie-item.component.less');

@WithRender
@Component
export default class MovieItem extends Vue {
  @Prop()
  movie: IMovieDataFields | undefined;

  setCurrentMovie(movie: IMovieDataFields) {
    storeMutations.setSelectedMovie(movie);
  }
}
