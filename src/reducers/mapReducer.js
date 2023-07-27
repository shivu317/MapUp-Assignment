import { SET_SELECTED_REGION } from '../actions/mapActions';

// Initial state for the map reducer
const initialState = {
  selectedRegion: null,
};

// Reducer function for the map
const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_REGION:
      return {
        ...state,
        selectedRegion: action.payload,
      };
    default:
      return state;
  }
};

export default mapReducer;
