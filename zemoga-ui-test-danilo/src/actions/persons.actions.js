import axios from 'axios';

import {
  GET_PERSONS_DATA_SUCCESS,
  GET_PERSONS_DATA_REQUEST,
  GET_PERSONS_DATA_ERROR,
  RESET_PERSONS_DATA,
} from '../constants/actions.constants.json';

export const getPersonsCall = () => {
  return axios.get(
    'http://my-json-server.typicode.com/Wartaron/json-server-data/persons'
  );
};

export const getPersonsRequest = () => ({
  type: GET_PERSONS_DATA_REQUEST,
});

export const getPersonsError = () => ({
  type: GET_PERSONS_DATA_ERROR,
});

export const resetPersons = () => ({
  type: RESET_PERSONS_DATA,
});

export const getPersonsSucess = (data) => ({
  type: GET_PERSONS_DATA_SUCCESS,
  payload: data,
});

export const getPersons = () => (dispatch) => {
  dispatch(getPersonsRequest);

  return getPersonsCall()
    .then((response) => dispatch(getPersonsSucess(response)))
    .catch(() => {
      dispatch(getPersonsError());
    });
};
