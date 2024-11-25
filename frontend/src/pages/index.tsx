import { NextPage } from 'next';
import { fetchApartments } from '../redux/actions/apartment';
import { useEffect, useState } from 'react';
import {
  Typography,
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import ApartmentCard from '@/components/Apartments/ApartmentCard';
import AddApartmentModal from '@/components/Apartments/AddApartmentModal';
import Grid from '@mui/material/Grid';

const Home: NextPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useAppDispatch();
  const { list, total } = useAppSelector((state) => state.apartment);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchApartments());
  }, [dispatch]);

  return (
    <Box padding={isMobile ? 2 : 4}>
      <AddApartmentModal isOpen={isModalOpen} onCloseModal={() => setIsModalOpen(false)} />
      <Typography variant="h4" gutterBottom>
        Apartments
      </Typography>
      <Button variant="contained" color="primary" onClick={() => setIsModalOpen(true)} sx={{ mb: 2 }}>
        Add property
      </Button>

      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        {list.map((apt) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={apt._id}>
            <ApartmentCard apartment={apt} />
          </Grid>
        ))}
      </Grid>

      {/* Total number of apartments */}
      <Typography sx={{ marginTop: 3 }}>Total: {total}</Typography>
    </Box>
  );
};

export default Home;
