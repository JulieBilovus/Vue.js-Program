import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import WithRender from './logo.component.html';

require('./logo.component.less');

@WithRender
@Component({})
export default class Logo extends Vue {
  @Prop()
  isLink: boolean | undefined;

  public callbackCall() {
    if (this.isLink) {
      this.$emit('logoClick');
    }
  }
}

