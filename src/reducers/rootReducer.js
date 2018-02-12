import { combineReducers } from 'redux-immutable';
import { Record } from 'immutable';
import { globalReducer } from './globalReducer';

const stateRecord = Record({
  global: undefined,
});

const rootReducer = combineReducers(
  {
    global: globalReducer,
  },
  stateRecord,
);

export default rootReducer;
