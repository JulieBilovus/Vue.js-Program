import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { IButtonProps } from '@/types';
import WithRender from './filter-buttons.component.html';
require('./filter-buttons.component.less');

@WithRender
@Component
export default class FilterButtons extends Vue {
  @Prop()
  label: String | undefined;

  @Prop()
  buttonsSet: Array<IButtonProps> | undefined;

  @Prop()
  callback: Function | undefined;

  public activeButtonIndex = 0;

  public runCallback(filterField: string, index: number) {
    if(this.callback) {
      this.callback(filterField);
    }

    this.activeButtonIndex = index;
  }
}
