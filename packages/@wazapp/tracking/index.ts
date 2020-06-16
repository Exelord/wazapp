import { action as mobxAction } from 'mobx';

export * from "mobx";

export const action = mobxAction.bound;