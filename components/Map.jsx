import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  return (
    <div className="map">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{
          height: "400px",
          width: "100%",
          boxShadow: "0px 0px 18px 3px #00000040",
          borderRadius: "15px",
        }}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
}

export default Map;
