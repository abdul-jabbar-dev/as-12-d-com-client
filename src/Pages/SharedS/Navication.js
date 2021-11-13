import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MainListItems from './listItems';
import UseFirebase from '../../Utilitis/Auth/UseFirebase';




const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  position: theme.fixed,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {

      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('xs')]: {
          width: theme.spacing(7),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function NavicationContent() {
  const { user } = UseFirebase()
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>

        <CssBaseline />
        <AppBar sx={{ bgcolor: '#1976D2', paddingX: '10px' }} position='fixed' open={open}>
          <Toolbar
            sx={{
              pr: '24px',
            }}
          > <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
              <MenuIcon />
            </IconButton>

            <Box display={'flex'} justifyContent={'space-between'}  >
              {
                user.uid ? <Typography variant='h5' mr={"32px"} lineHeight={'.9'} textAlign={'center'}><small style={{ fontSize: '14px' }}>Welcome!</small> <br />{user.displayName}</Typography> : <Typography variant='h5' >D-COM.co</Typography>
              } 



            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',

              backgroundColor: '#1976D2',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [0],
            }}
          >
            <Typography fontWeight={600} sx={{ color: '#FFFFFF' }} pr={3} pt={.6} variant='h4'> D-Com</Typography>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon sx={{ color: '#FFFFFF' }} />
            </IconButton>
          </Toolbar>
          <Divider />
          <MainListItems></MainListItems>
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,


            overflow: 'auto',
          }}
        >
          <Toolbar />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Navication() {
  return <NavicationContent />;
}
