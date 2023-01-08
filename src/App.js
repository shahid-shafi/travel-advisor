import React from 'react';
import { CssBaseline, Grid } from '@mui/material';
import './App.scss';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { getPlacesData } from './api';
const App = () => {
  const [places, setPlaces] = React.useState([]);
  const [coordinates, setCoordinates] = React.useState({ lat: 34, lng: 74 });
  const [bounds, setBounds] = React.useState({});
  const [childClicked, setChildClicked] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  React.useEffect(() => {
    setIsLoading(true);
    getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {
        setPlaces(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} width="100%">
        <Grid item xs={12} md={8}>
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <List
            places={places}
            childClicked={childClicked}
            isLoading={isLoading}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
