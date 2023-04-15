import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { blueGrey, grey } from '@mui/material/colors';
import {Link} from 'react-router-dom';

const backgroundImage =
  'https://d1d5i0xjsb5dtw.cloudfront.net/portada.jpeg';


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[500],
    '&:hover': {
      backgroundColor: grey[700],
    },
  }));

const ColorButtonOne = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blueGrey[500]),
    backgroundColor: blueGrey[500],
    '&:hover': {
      backgroundColor: blueGrey[900],
    },
  }));

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
      Servicios Mecánicos e Industriales 
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Somos una empresa líder con nuevas soluciones en la industria metalmecánica.
      </Typography>

      <Box sx={{display:'flex'}}>
      {/* <Stack direction="row" spacing={2}> */}

        <ColorButtonOne 
            variant="contained"
            component={Link}
            to="servicios"
            >
        Servicios
        </ColorButtonOne>

       <ColorButton 
            variant="contained"
            component={Link}
            to="productos"
            >
       <Typography color="black" align="center" marked="center">
         Productos
      </Typography>
        
        </ColorButton>
      {/* </Stack> */}

      </Box>
      
    </ProductHeroLayout>
  );
}
