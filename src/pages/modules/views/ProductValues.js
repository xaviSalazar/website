import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="https://d1d5i0xjsb5dtw.cloudfront.net/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://d1d5i0xjsb5dtw.cloudfront.net/mision_sitio.jpg"
                alt="suitcase"
                sx={{ height: 100 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                MISION
              </Typography>
              <Typography variant="h5">
                {
                  'From the latest trendy boutique hotel to the iconic palace with XXL pool'
                }

                {
                  ', go for a mini-vacation just a few subway stops away from your home.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://d1d5i0xjsb5dtw.cloudfront.net/vision_sitio.jpg"
                alt="graph"
                sx={{ height: 100 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                VISION
              </Typography>
              <Typography variant="h5">
                {
                  'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '
                }

                {'your Sundays will not be alike.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://d1d5i0xjsb5dtw.cloudfront.net/valores_sitio.jpeg"
                alt="clock"
                sx={{ height: 100 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                VALORES
              </Typography>
              <Typography variant="h5">
                {'By registering, you will access specially negotiated rates '}
                {'that you will not find anywhere else.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;