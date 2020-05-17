import { Container, setContainer } from '@wazup/core';

export default class Service {
  constructor(container: Container) {
    setContainer(this, container);
  }
};