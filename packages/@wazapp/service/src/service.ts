import { Owner, setOwner } from '@wazapp/core';

export default class Service {
  constructor(owner: Owner) {
    setOwner(this, owner);
  }
};