import { configure } from '@storybook/react';
import '../src/index.css';

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
    // You can require as many stories as you need.

    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
