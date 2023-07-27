import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'antd';
import FormInput from './FormInput';
import RegionInfo from './RegionInfo';
import Map from './Map';
// import { setSelectedRegion } from '../actions/mapActions';
import { loadRegionData } from '../actions/mapActions';

function MainContent() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const dispatch = useDispatch();
  const regionData = useSelector((state) => state.map.selectedRegion);

  const handleFormSubmit = (selectedRegion) => {
    setSelectedRegion(selectedRegion);

    // Dispatch the loadRegionData action with the selected region
    dispatch(loadRegionData(selectedRegion));
  };

  const handleLoadButtonClick = () => {
    if (selectedRegion) {
      // Dispatch the setSelectedRegion action to update the state with the selected regions data
      dispatch(setSelectedRegion(selectedRegion));
    }
  };

  return (
    <div className="main-content">
      <h2>Main Content Area</h2>
      <FormInput onFormSubmit={handleFormSubmit} />
      <RegionInfo selectedRegion={regionData} />
      <Map selectedRegion={regionData} />
      {selectedRegion && (
        <Form.Item>
          <Button type="primary" onClick={handleLoadButtonClick}>
            Load Region
          </Button>
        </Form.Item>
      )}
    </div>
  );
}

export default MainContent;
