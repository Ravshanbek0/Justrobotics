import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



function Map() {
    const position = [40.3894, 71.7843]; // Farg'ona koordinatalari

    return (
        <div>
            <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
                <MapContainer center={position} zoom={13} className="w-full h-full">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>
                            Farg'ona, O'zbekiston
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

        </div>
    )
}

export default Map