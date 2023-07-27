

export const SET_SELECTED_REGION = 'SET_SELECTED_REGION';

// Action creator to set the selected region
export const setSelectedRegion = (region) => {
  return {
    type: SET_SELECTED_REGION,
    payload: region,
  };
};

// Async action to load region data
export const loadRegionData = (region) => {
  return (dispatch) => {
    
    setTimeout(() => {
      
      dispatch(setSelectedRegion(region));
    }, 1000); // Simulated 1-second delay
  };
};


