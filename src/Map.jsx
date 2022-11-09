import React from 'react';
import './Map.css'
import {  MapContainer , TileLayer } from 'react-leaflet'
function Map( {center, zoom}) {
  return (
    <div className='Map' >
  <MapContainer center={center} zoom={zoom}>
    <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a hreaf= "http://osm.org/copyright">OpenstreetMap</a> contributors '/>
</MapContainer>
    </div>
  )
}

export default Map;
