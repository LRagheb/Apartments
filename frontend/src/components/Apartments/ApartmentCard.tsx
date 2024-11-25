import React from 'react';
import Link from 'next/link';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Apartment } from '@/types/apartment';

interface ApartmentCardProps {
  apartment: Apartment;
}

const ApartmentCard: React.FC<ApartmentCardProps> = (
  props: ApartmentCardProps
) => {
  const { apartment } = props;

  return (
    <Link href={`apartments/${apartment._id}`} className='apt-link'>
      <Card sx={{ maxWidth: 345, margin: 2 }} className='apt-card'>
        <CardContent>
          <Typography variant='h5' component='div' className='apt-card-location'>
            {apartment.location}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary'>
            {apartment.city}, Egypt
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 2,
            }}
          >
            <Typography variant='h5' className='bold-text'>
              {apartment.price.toLocaleString()} EGP
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ApartmentCard;
