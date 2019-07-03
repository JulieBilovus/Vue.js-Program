import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class MovieFullInfoComponent extends Vue {
  static mounted() {
    console.log('hello from app');
  }
}
