import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { ListItem } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

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
        <Grid container spacing={2}>

          <Grid item xs={12} md={6}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://d1d5i0xjsb5dtw.cloudfront.net/mision_sitio.jpg"
                alt="suitcase"
                sx={{ height: 100 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                MISIÓN 
              </Typography>
              <Typography variant="h5">
                
                {
                  'Proveer de repuestos industriales y cuchillas para las compañías de productos de bienes, servicios y la industria en general, involucrándose con:'
                }

                  <ListItem>
                        <ListItemIcon><CheckRoundedIcon/></ListItemIcon>
                        <ListItemText><Typography variant="h5">{`Diseño`}</Typography></ListItemText>
                  </ListItem>

                  <ListItem>
                        <ListItemIcon><CheckRoundedIcon/></ListItemIcon>
                        <ListItemText><Typography variant="h5">{`Fabricación`}</Typography></ListItemText>
                  </ListItem>

                  <ListItem>
                        <ListItemIcon><CheckRoundedIcon/></ListItemIcon>
                        <ListItemText><Typography variant="h5">{`Desarrollo del sistema`}</Typography></ListItemText>
                  </ListItem>

                {
                  'Partes componentes de las mismas donde se utiliza procesos seguro, con calidad y responsabilidad ambiental esto con el fin de cumplir los requerimientos y satisfacer las necesidades demandadas. Trabajando con personal competente, consistente, honesto, responsable, comprometido para cumplir con los requerimientos del cliente.'
                }
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://d1d5i0xjsb5dtw.cloudfront.net/vision_sitio.jpg"
                alt="graph"
                sx={{ height: 100 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                VISIÓN
              </Typography>
              <Typography variant="h5">
                {
                  'Lograr reconocimiento en el mercado gracias a nuestra gestión de calidad, seguridad industrial, responsabilidad ambiental en todos sus trabajos. Buscar satisfacer las necesidades del cliente trabajando con el mejor capital humano y tecnológico para ofrecer siempre excelencia en calidad y servicio.'
                }
              </Typography>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
