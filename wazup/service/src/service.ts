import { Container, setContainer } from '@wazaap/core';

export default class Service {
  constructor(container: Container) {
    setContainer(this, container);
  }
};