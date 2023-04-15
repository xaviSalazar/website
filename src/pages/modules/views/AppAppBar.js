import * as React from 'react';
import Box from '@mui/material/Box';
import {Link as RouterLink} from 'react-router-dom'
import Link from '@mui/material/Link';
// import { Link } from "react-router-dom";

import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

import withRoot from '../withRoot';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



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

//

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar({ setState}) {

  return (
        <RootStyle>
        <ToolbarStyle>

          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{ fontSize: 24 }}
          >
            {`SERMEIN  `}
            <i className='fab fa-whmcs' />
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end'}}>

          <Link
              color="inherit"
              variant="h6"
              underline="none"
              component={RouterLink}
              to="/"
              sx={{ ...rightLink, display: { xs: 'none', sm: 'block' } }}
            >
              {'Inicio'}
            </Link>

            <Link
              color="inherit"
              variant="h6"
              underline="none"
              component={RouterLink}
              to="/servicios"
              sx={{ ...rightLink, display: { xs: 'none', sm: 'block' } }}
            >
              {'Servicios'}
            </Link>

            <Link
              variant="h6"
              underline="none"
              component={RouterLink}
              to="/productos"
              sx={{ ...rightLink, color: 'secondary.main',display: { xs: 'none', sm: 'block' } }}
            >
              {'Productos'}
            </Link>

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
