import * as React from 'react';
import Box from '@mui/material/Box';
import {Link as RouterLink, matchPath, useLocation} from 'react-router-dom'
// import { Link } from "react-router-dom";

import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

import withRoot from '../withRoot';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';



const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;


const RootStyle = styled(AppBar)(({ theme }) => ({
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile

  // [theme.breakpoints.up('lg')]: {
  //   width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  // },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

AppAppBar.propTypes = {
  onOpenSidebar: PropTypes.func,
};

// const rightLink = {
//   fontSize: 16,
//   color: 'common.white',
//   ml: 3,
// };

function AppAppBar({ setState}) {

  const { pathname } = useLocation();

  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);

  return (
        <RootStyle>
        <ToolbarStyle>

          {/* <Box sx={{ flex: 1}} /> */}

          <List >
            <ListItem disablePadding>
              <ListItemButton
              component={RouterLink}
              to="/"
              sx={{
                px: 1,
                pt: 1,
                pb: true ? 0 : 2.5,
                '&:hover': {
                  backgroundColor: 'grey',
                },
              }} 
              >
                <ListItemText primary="SERMEIN" 
                    primaryTypographyProps={{
                    fontSize: 30,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '2px',
                  }}/>
                  <i className='fab fa-whmcs' />
              </ListItemButton>
            </ListItem>
          </List>

          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>

          <List sx={
          {
          display: { xs: 'none', sm: 'flex'} ,
          flexDirection: 'row',
          p: 1,
          m: 1,
          borderRadius: 1,
          }} >

            <ListItem disablePadding>
              <ListItemButton
              component={RouterLink}
              to="servicios"
              sx={{
                px: 1,
                pt: 1,
                pb: true ? 0 : 2.5,
                '&:hover': {
                  backgroundColor: 'grey',
                },
                ...(match('servicios') &&  {
                  backgroundColor: 'grey',
                }),

              }} 
              >
                <ListItemText primary="Servicios" 
                    primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '2px',
                  }}/>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
              <ListItemButton
              component={RouterLink}
              to="productos"
              sx={{
                px: 1,
                pt: 1,
                pb: true ? 0 : 2.5,
                '&:hover': {
                  backgroundColor: 'grey',
                },
                ...(match('productos') &&  {
                  backgroundColor: 'grey',
                }),
              }} 
              >
                <ListItemText primary="Productos" 
                    primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '2px',
                  }}/>
              </ListItemButton>
            </ListItem>
          </List>

            <IconButton
            onClick={() => setState(true)}
            size="large"
            edge="end"
            color="inherit"
            //aria-label="open drawer"
            sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
            >
            <MenuIcon />
          </IconButton>
          </Box>
          
        </ToolbarStyle>
        </RootStyle>
  );
}

export default withRoot(AppAppBar);
