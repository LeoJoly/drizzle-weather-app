const initialState = {
  city: '',
  country: '',
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    default:
      return {
        ...oldState,
      };
  };
};

export default reducer;