import { combineReducers } from 'redux';
import types from '../types/contact-types';

const initialContactsState = [];

const items = (state = initialContactsState, { type, payload }) => {
  switch (type) {
    case types.ADD:
      if (
        state.find(
          ({ name, number }) =>
            name === payload.name || number === number.payload,
        )
      ) {
        alert(`${payload.name} is already in contacts`);
        return [...state];
      }
      return [...state, payload];
    case types.DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const initialFilterState = '';

const filter = (state = initialFilterState, { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({ items, filter });
