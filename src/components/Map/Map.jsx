import React from 'react';
import GoogleMapReact from 'google-map-react';
import {
  Paper,
  useMediaQuery,
  Rating,
  Box,
  Typography,
} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './Map.scss';

const Map = ({ coordinates, setBounds, setCoordinates, places, setChildClicked }) => {
  const isDesktop = useMediaQuery('(min-width: 600px)');
  console.log("MapKey", process.env.REACT_APP_JS_MAP_API_KEY)
  return (
    <Box className="mapContainer">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_JS_MAP_API_KEY }}
        defaultCenter={coordinates}
        defaultZoom={11}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {

          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        }}
        onChildClick={child => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <Box
            key={i}
            className="markerContainer"
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3}>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  className="paper"
                >
                  {place.name}
                </Typography>
                <img className='pointer' src={place.photo ? place.photo.images.large.url : 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/bloomington/Uptown_May2018_38_ddab358b-f1bd-4a30-bb3f-75bf6abd9217.jpg'} alt={place.name} />

                <Rating size='small' value={Number(place.rating)} readOnly />
              </Paper>
            )}
          </Box>
        ))}
      </GoogleMapReact>
    </Box>
  );
};

export default Map;
