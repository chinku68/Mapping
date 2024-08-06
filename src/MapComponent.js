import React from 'react';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css';

const { BaseLayer, Overlay } = LayersControl;

const MapComponent = () => {
  return (
    <MapContainer center={[17.9693, 79.5926]} zoom={13} className="map-container">
      <LayersControl position="topright">
        <BaseLayer checked name="OpenStreetMap">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
        </BaseLayer>
        <Overlay name="GeoServer Layer">
          <TileLayer
            url="http://localhost:8080/geoserver/yourworkspace/wms?service=WMS&version=1.1.0&request=GetMap&layers=yourlayer&styles=&bbox=-180,-90,180,90&width=768&height=768&srs=EPSG:4326&format=image/png"
            attribution="&copy; GeoServer"
          />
        </Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default MapComponent;







