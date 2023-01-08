import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip, Rating } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import './Card.scss';

const PlaceDetails = ({ place, selected, refProp }) => {
  console.log('selected: ', selected);
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: '350px' }}
        image={place.photo ? place.photo.images.large.url : 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/bloomington/Uptown_May2018_38_ddab358b-f1bd-4a30-bb3f-75bf6abd9217.jpg'}
        title={place.name}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>{place.name}</Typography>
        <Box display='flex' justifyContent='space-between'>
          <Rating value={Number(place.rating)} readOnly />
          <Typography variant="subtitle1">Out of {place.num_reviews} reviews</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant="subtitle1">Price</Typography>
          <Typography variant="subtitle1">{place.price_level}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography variant="subtitle1">{place?.ranking}</Typography>
        </Box>

        {place?.awards?.map(award => (
          <Box key={award.display_name} my={1} display='flex' justifyContent='space-between'>
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color='secondary'>{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size='small' label={name} className='chip' />
        ))}

        {place.address && (
          <Typography variant='subtitle2' gutterBottom color='textSecondary' className='subtitle'>
            <LocationOnOutlinedIcon /> {place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography variant='subtitle2' gutterBottom color='textSecondary' className='spacing'>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}

        <CardActions>
          {/* <Button size='small' color='primar' onClick={() => window.open(place.web_url, '_blank')}>
            Trip Advisor
          </Button> */}
          {/* <Button size='small' color='primar' onClick={() => window.open(place.website, '_blank')}>
            Website
          </Button> */}
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default PlaceDetails;