import { isEmpty } from 'ramda';

export const getPrincipalPerson = (persons) => {
  let person = {};

  if (!isEmpty(persons)) {
    person = persons[0];
  }

  return person;
};
