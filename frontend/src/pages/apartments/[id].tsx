import { NextPage } from 'next';
import { fetchApartmentById } from '../../redux/actions/apartment';
import { useEffect } from 'react';
import { Typography, Box, useMediaQuery, useTheme, Card, CardContent, Divider, Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import { useRouter } from 'next/router';

const Apartment: NextPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { id } = router.query;
  const { currentApartment } = useAppSelector((state) => state.apartment);

  useEffect(() => {
    if (id) {
      dispatch(fetchApartmentById(id));
    }
  }, [dispatch, id]);

  if (!currentApartment) {
    return (
      <Box padding={isMobile ? 2 : 4}>
        <Typography variant="h5">Apartment details not found.</Typography>
        <Button variant="contained" color="primary" onClick={() => router.back()}>
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <Box padding={isMobile ? 2 : 4}>
      <Typography variant="h4" gutterBottom>
        Apartment Details
      </Typography>
      <Button variant="contained" color="primary" onClick={() => router.back()} sx={{ mb: 2 }}>
        Go Back
      </Button>
      <Card>
        <CardContent>
          <Typography variant="h6">Address:</Typography>
          <Typography>{currentApartment.address}</Typography>
          <Divider sx={{ my: 2 }} />

          <Typography variant="h6">Location:</Typography>
          <Typography>{currentApartment.location}</Typography>
          <Divider sx={{ my: 2 }} />

          <Typography variant="h6">City:</Typography>
          <Typography>{currentApartment.city}</Typography>
          <Divider sx={{ my: 2 }} />

          <Typography variant="h6">Price:</Typography>
          <Typography>${currentApartment.price}</Typography>
          <Divider sx={{ my: 2 }} />

          {currentApartment.comission && (
            <>
              <Typography variant="h6">Commission:</Typography>
              <Typography>${currentApartment.comission}</Typography>
              <Divider sx={{ my: 2 }} />
            </>
          )}

          {currentApartment.downPayment && (
            <>
              <Typography variant="h6">Down Payment:</Typography>
              <Typography>${currentApartment.downPayment}</Typography>
              <Divider sx={{ my: 2 }} />
            </>
          )}

          {currentApartment.deliveryYear && (
            <>
              <Typography variant="h6">Delivery Year:</Typography>
              <Typography>{currentApartment.deliveryYear.getFullYear()}</Typography>
              <Divider sx={{ my: 2 }} />
            </>
          )}

          <Typography variant="h6">Ready to Move:</Typography>
          <Typography>{currentApartment.readyToMove ? 'Yes' : 'No'}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Apartment;
