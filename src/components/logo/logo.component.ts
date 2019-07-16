import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import WithRender from './logo.component.html';

require('./logo.component.less');

@WithRender
@Component({})
export default class Logo extends Vue {
  @Prop()
  callback: Function | undefined;

  public isLink = !!this.callback;

  public callbackCall() {
    if (this.callback) {
      this.callback();
    }
  }
}

