import React, { Component } from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'
import {Icon} from "leaflet"
class Carte extends Component{
  state={
    lat:43.547710,
    long:6.446850,
    zoom:10
  }

  render() {
    const position = [this.state.lat, this.state.long]

    if (typeof window !== 'undefined') {
      const icon = new Icon({
        iconUrl: require('../../../static/markerIcon.png'),
        iconSize: [34, 40],
        iconAnchor: [0, 40],
      })
    return (
      <Map center={position} zoom={this.state.zoom} style={{height:'400px', maxWidth:'600px', width:'100vw', margin:'auto'}}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={icon} position={position}/>
      </Map>
    )
    }
    return null
  }
}

export default Carte;