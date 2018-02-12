import { Record } from 'immutable';

const globalRecord = Record({
  loading: false,
});

export const globalReducer = (state = globalRecord()) => state;

export default globalReducer;
