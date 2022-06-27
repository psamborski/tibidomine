import React from 'react'
import './Map.scss'
import 'leaflet/dist/leaflet.css'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

import {
  MapContainer,
  TileLayer,
  Marker,
  // Popup,
} from 'react-leaflet'
import L from 'leaflet'

import iconRetina from '../../../assets/images/map_marker@x2.png'
import iconMarker from '../../../assets/images/map_marker.png'

export const Map = ({
  children, coordinates, id, ...restProps
}) => {
  const defaultPosition = {
    lat: 52.2296756,
    lon: 21.0122287,
  }

  const position = [coordinates?.lat || defaultPosition.lat, coordinates.lon || defaultPosition.lon]

  const icon = L.icon({
    iconRetinaUrl:iconRetina,
    iconUrl: iconMarker,
    shadowUrl: iconShadow,
  })

  return (
    <MapContainer
      center={position}
      className='Map'
      dragging
      id={id}
      maxZoom={18}
      minZoom={12}
      scrollWheelZoom
      wheelPxPerZoomLevel={90}
      zoom={16}
      zoomDelta={0.5}
      zoomSnap={0}
    >
      <TileLayer
        attribution='&copy; Mapbox'
        url='https://api.mapbox.com/styles/v1/sambeeek/cl4cw3j81002c15t92t7bhftz/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FtYmVlZWsiLCJhIjoiY2w0Y3Z6bWV5MDJuODNpcGFrNndsdWIxYyJ9.Xj5bj-3GWXX26xq2juipKQ' // todo env keys
      />
      <Marker
        icon={icon}
        position={position}
      >
        {/* <Popup> */}
        {/*  Sth */}
        {/* </Popup> */}
      </Marker>
    </MapContainer>
)
}

Map.defaultProps = {
  coordinates: {
    lat: null,
    lon: null,
  },
  id: 'Map',
}
