import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedRegion } from '../actions/mapActions';

function FormInput() {
  const dispatch = useDispatch();
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const handleLoadButtonClick = () => {
    dispatch(setSelectedRegion(selectedRegion));
  };

  return (
    <div className="form-input">
      <select value={selectedRegion} onChange={handleRegionChange}>
        <option value="">Select a region</option>
        <option value="USA">United States</option>
        <option value="IND">India</option>
        <option value="UK">United Kingdom</option>
      </select>
      <button onClick={handleLoadButtonClick}>Load</button>
    </div>
  );
}

export default FormInput;
