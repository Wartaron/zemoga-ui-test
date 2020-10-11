import {
  GET_PERSONS_DATA_SUCCESS,
  GET_PERSONS_DATA_REQUEST,
  GET_PERSONS_DATA_ERROR,
  RESET_PERSONS_DATA,
  SET_CALIFICATION,
} from '../constants/actions.constants.json';

import { getPrincipalPerson } from '../utils/personsUtils';

const initialState = {
  success: false,
  loading: false,
  data: [],
  principalPerson: {},
  error: null,
};

const personsReducer = (state = initialState, action) => {
  let nextState = { ...state };

  switch (action.type) {
    case GET_PERSONS_DATA_REQUEST:
      nextState.loading = true;
      nextState.error = false;
      nextState.success = false;
      break;

    case GET_PERSONS_DATA_ERROR:
      nextState.loading = false;
      nextState.error = true;
      nextState.success = false;
      break;

    case GET_PERSONS_DATA_SUCCESS:
      nextState.loading = false;
      nextState.error = false;
      nextState.success = true;
      nextState.data = action.payload.data.slice(1);
      nextState.principalPerson = getPrincipalPerson(action.payload.data);
      break;

    case SET_CALIFICATION:
      const { personId, isPositive } = action.payload;

      nextState.data = nextState.data.map((person) => {
        if (person.id === personId) {
          isPositive
            ? (person.thumbsUp = person.thumbsUp + 1)
            : (person.thumbsDown = person.thumbsDown + 1);
        }

        return person;
      });

      break;

    case RESET_PERSONS_DATA:
      nextState = initialState;
      break;
  }

  return nextState;
};

export default personsReducer;
