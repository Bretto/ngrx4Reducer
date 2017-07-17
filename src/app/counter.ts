import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export type State = number;


const REDUCER_METADATA_KEY = 'reducers';

export function Reducer(eventType: any) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const oldReducers = (Reflect as any).getOwnMetadata(REDUCER_METADATA_KEY, target) || {};
    const newReducers = Object.assign({}, oldReducers, {[eventType]: descriptor.value});
    (Reflect as any).defineMetadata(REDUCER_METADATA_KEY, newReducers, target);
  };
}

export function registerReducer(clazz: any, initState: any) {
  return function (state = initState, action: any) {
    const reducers = (Reflect as any).getMetadata(REDUCER_METADATA_KEY, clazz.prototype);
    if (!reducers) {
      throw new Error(`No @Reducer was found on ${clazz} to initialize the Store`);
    }
    return reducers[action.type] ? reducers[action.type](state, action) : state;
  };
}

export class MyReducers {

  @Reducer(INCREMENT)
  increment(state, event) {
    return state + 1;
  }

  @Reducer(DECREMENT)
  decrement(state, event) {
    return state - 1;
  }

  @Reducer(RESET)
  reset(state, event) {
    return 0;
  }
}
