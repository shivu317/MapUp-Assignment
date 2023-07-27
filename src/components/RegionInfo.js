import React from 'react';
import { useSelector } from 'react-redux';

function RegionInfo() {
  const selectedRegion = useSelector((state) => state.map.selectedRegion);

  // Sample data for region info
  const regionInfoData = {
    USA: {
      currency: 'USD',
      speedUnit: 'mph',
      distanceUnit: 'miles',
      volumeUnit: 'gallons',
      timezone: 'GMT-5 to GMT-10',
    },
    IND: {
      currency: 'INR',
      speedUnit: 'kmph',
      distanceUnit: 'kilometers',
      volumeUnit: 'liters',
      timezone: 'GMT+5:30',
    },
    UK: {
      currency: 'GBP',
      speedUnit: 'mph',
      distanceUnit: 'miles',
      volumeUnit: 'liters',
      timezone: 'GMT+1',
    },
  };

  // Get region info based on selectedRegion
  const info = regionInfoData[selectedRegion];

  return (
    <div className="region-info">
      {info ? (
        <>
          <h2>Region Info</h2>
          <p>Currency Symbol: {info.currency}</p>
          <p>Speed Unit: {info.speedUnit}</p>
          <p>Distance Unit: {info.distanceUnit}</p>
          <p>Volume Unit: {info.volumeUnit}</p>
          <p>Timezone: {info.timezone}</p>
        </>
      ) : (
        <p>Please select a region to load the info.</p>
      )}
    </div>
  );
}

export default RegionInfo;
