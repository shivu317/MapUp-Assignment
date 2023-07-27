import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Create a custom icon for the marker
const customIcon = new L.Icon({
  iconUrl: 'path/to/your/marker-icon.png', 
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
});

function Map({ selectedRegion }) {
  
  const latitude = selectedRegion?.latitude || 0;
  const longitude = selectedRegion?.longitude || 0;

  return (
    <MapContainer center={[latitude, longitude]} zoom={10} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
     
      {selectedRegion && (
        <Marker position={[latitude, longitude]} icon={customIcon}>
          <Popup>
            <div>
              <h2>{selectedRegion.name}</h2>
              <p>Additional information about the selected region</p>
            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default Map;
