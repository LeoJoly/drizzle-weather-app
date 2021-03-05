/* --- Types --- */
// Search
export const AUTOCOMPLETE = 'AUTOCOMPLETE';
export const AUTOCOMPLETE_SUCCESS = 'AUTOCOMPLETE_SUCCESS';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CLOSE_SEARCH = 'CLOSE_SEARCH';
export const SEARCH_INIT = 'SEARCH_INIT';
export const SEARCH_TOGGLE = 'SEARCH_TOGGLE';
export const SUGGEST = 'SUGGEST';

// Weather
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const HANDLE_GEOLOC = 'HANDLE_GEOLOC';
export const HANDLE_GEOLOC_SUCCESS = 'HANDLE_GEOLOC_SUCCESS';

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

export const closeSearch = () => ({
  type: CLOSE_SEARCH,
});

export const searchInit = () => ({
  type: SEARCH_INIT,
});

export const searchToggle = () => ({
  type: SEARCH_TOGGLE,
});

export const suggest = (place) => ({
  type: SUGGEST,
  place,
});

// Weather
export const getWeatherSuccess = (current, daily, hourly) => ({
  type: GET_WEATHER_SUCCESS,
  current,
  daily,
  hourly,
});

export const handleGeoloc = (slug) => ({
  type: HANDLE_GEOLOC,
  slug
});

export const handleGeolocSuccess = (position, label) => ({
  type: HANDLE_GEOLOC_SUCCESS,
  position,
  label,
});