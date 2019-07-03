import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class FooterComponent extends Vue {
  static mounted() {
    console.log('hello from app');
  }
}
