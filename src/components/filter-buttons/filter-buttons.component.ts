import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { IButtonProps } from '@/types';
import WithRender from './filter-buttons.component.html';
import {defaults} from "ts-jest/presets";
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

  public runCallback(index: number) {
    this.activeButtonIndex = index;

    this.$emit('changeFieldName', this.activeButtonIndex);
  }
}
