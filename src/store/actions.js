/* --- Types --- */
// Search
export const AUTOCOMPLETE = 'AUTOCOMPLETE';
export const AUTOCOMPLETE_SUCCESS = 'AUTOCOMPLETE_SUCCESS';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SUGGEST = 'SUGGEST';

/* --- actions --- */
// search
export const autocomplete = () => ({
  type: AUTOCOMPLETE,
});

export const autocompleteSuccess = (list) => ({
  type: AUTOCOMPLETE_SUCCESS,
  list,
});

export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const suggest = (place) => ({
  type: SUGGEST,
  place,
});