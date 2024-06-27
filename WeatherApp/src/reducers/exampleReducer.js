// Một reducer đơn giản để quản lý trạng thái
const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_DATA_SUCCESS':
        return { ...state, data: action.payload, loading: false };
      case 'FETCH_DATA_FAILURE':
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  };
  
  export default exampleReducer;