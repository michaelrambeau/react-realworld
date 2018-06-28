import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  require('../src/components/PlayerList/stories');
}

configure(loadStories, module);
