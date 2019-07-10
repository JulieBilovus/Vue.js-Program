import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './footer.component.html';
import Logo from '@/components/logo/logo.component';

require('./footer.component.less');

@WithRender
@Component({
  components: {
    Logo,
  }
})
export default class Footer extends Vue {}

