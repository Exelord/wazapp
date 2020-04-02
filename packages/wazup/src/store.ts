import { autoTracking } from './tracking';
import { Container } from './app';

export default class Store {
  protected context: Container;

  constructor(container: Container) {
    this.context = container;
    autoTracking(this.constructor as any)
  }
}; 