import React from 'react';
import { useDispatch } from 'react-redux';
import { loadRegionData } from '../actions/mapActions';

const LoadButton = () => {
  const dispatch = useDispatch();

  const handleLoadButtonClick = () => {
    const selectedRegion = 'your_selected_region_here'; 
    dispatch(loadRegionData(selectedRegion));
  };

  return (
    <button onClick={handleLoadButtonClick}>Load Map</button>
  );
};

export default LoadButton;
