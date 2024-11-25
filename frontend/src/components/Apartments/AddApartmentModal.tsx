import React from 'react';
import {
  Box,
  Grid,
  Button,
  Typography,
  Modal,
  TextField,
  Checkbox,
  FormControlLabel,
  CircularProgress,
} from '@mui/material';
import { useAppDispatch } from '@/hooks/storeHooks';
import { createApartment } from '../../redux/actions/apartment';
import { ApartmentFormData } from '@/types/apartment';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 500,
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
};

interface AddApartmentModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

const AddApartmentModal: React.FC<AddApartmentModalProps> = ({
  isOpen,
  onCloseModal,
}) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState<ApartmentFormData>({
    address: '',
    location: '',
    city: '',
    readyToMove: false,
    price: 0,
    comission: undefined,
    downPayment: undefined,
    deliveryYear: null,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'readyToMove' ? checked : value,
    });
  };

  const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      deliveryYear: e.target.value ? new Date(e.target.value) : null,
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await dispatch(createApartment(formData));
    setIsLoading(false);
    onCloseModal();
    // TODO: add error handling
  };

  return (
    <Modal
      open={isOpen}
      onClose={onCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography style={{ textAlign: 'center', marginBottom: '16px' }} variant="h5" component="h2">
          Add Apartment
        </Typography>
        <Box component="form" onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={onChange}
                size="small"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Location"
                name="location"
                value={formData.location}
                onChange={onChange}
                size="small"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="City"
                name="city"
                value={formData.city}
                onChange={onChange}
                size="small"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.readyToMove}
                    onChange={onChange}
                    name="readyToMove"
                  />
                }
                label="Ready to Move"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Price"
                name="price"
                type="number"
                value={formData.price}
                onChange={onChange}
                size="small"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Comission"
                name="comission"
                type="number"
                value={formData.comission || ''}
                onChange={onChange}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Down Payment"
                name="downPayment"
                type="number"
                value={formData.downPayment || ''}
                onChange={onChange}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Delivery Date"
                name="deliveryYear"
                type="date"
                value={
                  formData.deliveryYear
                    ? formData.deliveryYear.toISOString().split('T')[0]
                    : ''
                }
                onChange={onDateChange}
                InputLabelProps={{ shrink: true }}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isLoading}
                startIcon={
                  isLoading ? <CircularProgress size={20} color="inherit" /> : null
                }
              >
                {isLoading ? 'Adding...' : 'Add Property'}
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={() => onCloseModal()}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddApartmentModal;
