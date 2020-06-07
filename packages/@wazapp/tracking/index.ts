import { action as mobxAction } from 'mobx';

export * from "mobx";
export { observer } from 'mobx-react';
export const action = mobxAction.bound;