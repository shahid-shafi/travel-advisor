import React, { createRef } from 'react';
import './List.scss';
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
} from '@mui/material';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({ places, childClicked, isLoading }) => {
  const [type, setType] = React.useState('resturants');
  const [rating, setRating] = React.useState('');
  const [elRefs, setElRefs] = React.useState([]);

  console.log({childClicked});

  React.useEffect(() => {
    setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <Box className="container">
      <Typography variant="h4">
        Resturants, Hotels & Attractions around you
      </Typography>
      {isLoading ? (
        <Box className="loading">
          <CircularProgress size="5rem" />
        </Box>
      ) : (
        <>
          <FormControl className="formControl">
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="resturants">Resturants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="formControl">
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className="list">
            {places?.map((place, i) => (
              <Grid item key={place.name} xs={12}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default List;
