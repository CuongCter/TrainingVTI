const initialState = {
    data: null,
    loading: false,
    error: null,
    list: []
  };
  
  const weatherReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
      case 'FETCH_WEATHER_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_WEATHER_SUCCESS':
        return { ...state, data: action.payload, loading: false, list: action.payload.list };
      case 'FETCH_WEATHER_FAILURE':
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  };
  
  export default weatherReducer;