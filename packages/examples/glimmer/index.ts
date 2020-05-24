import { renderComponent } from '@glimmerx/core';
import App from './src/app';
import TodosService from 'src/services/todos';

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('app');

  renderComponent(App, { element: element!, services: {
    todos: new TodosService()
  } });
}, {
  once: true
});