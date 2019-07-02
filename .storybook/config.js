import { configure } from '@storybook/vue';

function loadStories() {
  const req = require.context('../src/stories', true, /\.stories\.ts$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
