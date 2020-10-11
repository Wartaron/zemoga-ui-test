//vendors
import { pathOr } from 'ramda';

//constants
import en from '../translations/en.json';

export const getTranslation = (context, value) => {
  const values = pathOr('', [context], en);

  return pathOr(values, [value], values);
};
