import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "./styles.css";

const Map = ({ latitude, longitude }) => {
  const position = [latitude, longitude];

  return (
    <div className="mapWrapper">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
        />
        <Marker position={position} />
      </MapContainer>
    </div>
  );
};

export default Map;
