import React, { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import marker icons for Leaflet
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Fix Leaflet's default marker icon in Webpack
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});
const MainChart = () => {
  return (
    <>
      <MapContainer
      center={[21.1458, 79.0882]}
      zoom={13}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; RocketSales, HB Gadget Solutions Nagpur"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty marker.<br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </>
  )
}

export default MainChart
