import { NextPage } from "next";
import { fetchApartments, fetchApartmentById } from "../redux/actions/apartment";
import { useEffect } from "react";
import {
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";

const Home: NextPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useAppDispatch();
  const { list, total } = useAppSelector((state) => state.apartment);

  useEffect(() => {
    dispatch(fetchApartments());
  }, [dispatch]);

  return (
    <Box padding={isMobile ? 2 : 4}>
      <Typography variant="h2">APT.</Typography>
      {JSON.stringify(list)}
      {total}
    </Box>
  );
};

export default Home;
