import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class MovieItemComponent extends Vue {
  static mounted() {
    console.log('hello from app');
  }
}
