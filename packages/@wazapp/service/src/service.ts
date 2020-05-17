import { Container, setContainer } from '@wazapp/core';

export default class Service {
  constructor(container: Container) {
    setContainer(this, container);
  }
};