import { APP_LOADING, APP_NOT_LOADING } from '../actions';

const INITIAL_STATE = {
  loading: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case APP_LOADING:
      return {
        ...state,
        loading: true,
      };

    case APP_NOT_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}