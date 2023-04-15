import './App.css';
import { useState } from 'react';
// routes
import Router from './routes';
import { HashRouter } from 'react-router-dom'
import AppAppBar from './pages/modules/views/AppAppBar';
import { styled } from '@mui/material/styles';
import SiderBar from './pages/modules/views/SideBar';

// theme

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

function App() {

  const [state, setState] = useState(false);

  return (
    <HashRouter>
      <RootStyle>
        <AppAppBar setState= {setState}/>
        <SiderBar isOpenSidebar={state} onCloseSideBar = {() => setState(false)}/>
        <MainStyle>
        <Router />
        </MainStyle>
    </RootStyle>
    </HashRouter> 
  );
}

export default App;