import React from 'react'
import { CCardHeader } from '@coreui/react'
import GoogleMapsImage from './Google-Maps.jpg' // Adjust the path if necessary

const LiveTrack = () => {
  return (
    <>
      <CCardHeader>Live Tracking</CCardHeader>
      <img src={GoogleMapsImage} alt="Google Maps" style={{ width: '100%', height: 'auto' }} />
    </>
  )
}

export default LiveTrack
