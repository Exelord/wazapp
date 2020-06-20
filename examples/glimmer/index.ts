import { renderComponent } from '@glimmerx/core';
import App from './src/app';

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('app');

  renderComponent(App, { element: element!, services: {
  } });
}, {
  once: true
});