import React from 'react'
import googleMapReact from 'google-map-react';
import { Paper, Typhography, useMediaQuery, Rating, Box } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './Map.scss';
const Map = () => {
  const isMobile = useMediaQuery('min-width: 600px')
  return (
    <Box className='mapContainer'>
      <googleMapReact bootstrapURLKeys={{key: ''}}>

      </googleMapReact>
    </Box>
  )
}

export default Map;