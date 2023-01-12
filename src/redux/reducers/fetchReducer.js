const init = {
  loading: false,
  data: [],
  error: null,
};

export const fetchReducer = (state = init, action) => {
  switch (action.type) {
    case "GET_FETCH_PENDING":
      return { ...state, loading:true };
    case "GET_FETCH_SUCCESSFULLY":
      return { ...state, data: action.payload,loading:false  };
    case "GET_FETCH-ERROR":
      return { ...state, data: action.error ,loading:false };
    default:
      return state;
  }
};
