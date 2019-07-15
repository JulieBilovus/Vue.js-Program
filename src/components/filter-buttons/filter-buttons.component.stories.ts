import { storiesOf } from '@storybook/vue';

import FilterButtons from './filter-buttons.component';
import {MovieDataFieldsEnum} from '@/types';

// @ts-ignore

storiesOf("FilterButtons", module).add("to Storybook", () => ({
  components: { FilterButtons },
  template: '<FilterButtons :label="label" buttonsSet="" callback="action"></FilterButtons>',
  methods: { action: "click" },
  data() {
    return {
      label: "Sort by",
      buttonsSet: [
        {
          label: 'Title',
          filterField: MovieDataFieldsEnum.name,
        }, {
          label: 'Gengre',
          filterField: MovieDataFieldsEnum.gengre
        }
      ]
    };
  }
}));

// storiesOf("Button", module)
//   .add("My first button story", () => ({
//     components: { MyButton },
//     template: `
//  <my-button></my-button>
//   `
//   }))
//   .add("Now with some props", () => ({
//     components: { MyButton },
//     template: `
//  <my-button :msg="myMessage" :color="myColor"></my-button>
//   `,
//     data() {
//       return {
//         myMessage: "This is finally working",
//         myColor: "blue"
//       };
//     }
//   }));
