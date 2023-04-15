import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '@mui/material';

import ConstructionIcon from '@mui/icons-material/Construction';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import HomeIcon from '@mui/icons-material/Home';

import {Link} from 'react-router-dom';


import withRoot from '../withRoot';

function SideBar({ isOpenSidebar, onCloseSideBar}) {

  return (
          <Drawer
            open={isOpenSidebar}
            onClose={onCloseSideBar}
            anchor='right'
            PaperProps={{
                sx: { width: 200 },
              }}
          >
        <List>

        <ListItem >
            <ListItemButton
                onClick = {onCloseSideBar}
                component={Link}
                to="/"
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItemButton>
        </ListItem>

        <Divider />
        <Divider />
        <Divider />

          <ListItem >
            <ListItemButton
                onClick = {onCloseSideBar}
                component={Link}
                to="servicios"
            >
              <ListItemIcon>
                <ConstructionIcon />
              </ListItemIcon>
              <ListItemText primary="Servicios" />
            </ListItemButton>
          </ListItem>

          <Divider />
          <Divider />
          <Divider />

          <ListItem >
            <ListItemButton
             onClick = {onCloseSideBar}
             component={Link}
             to="productos"
            >
              <ListItemIcon>
                <LocalGroceryStoreIcon />
              </ListItemIcon>
              <ListItemText primary="Productos" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <Divider />
        <Divider />
        
          </Drawer>
  );
}

export default withRoot(SideBar)