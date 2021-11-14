import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import UseFirebase from '../../Utilitis/Auth/UseFirebase';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DashboardIcon from '@mui/icons-material/Dashboard';

const MainListItems = ({ open }) => {
  const { user, logoutUser, isAdmin } = UseFirebase()
  const activeStyle = {
    color: 'gray',
  }
  const icoHover = {
    cursor: 'pointer',
    ":hover":
    {
      transform: 'scale(1.2)'
      , transition: '.1s all'
    }, ":active": {
      transform: 'scale(.97)'
    },
  }

  return (
    <div>
      {user.uid && <IconButton
        size='large'
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        sx={{ width: '50%', display: 'block', mx: 'auto', borderRadius: '30px' }}
        color="inherit"
      >
        {
          open && <Avatar
            sx={{ mx: 'auto', bgcolor: 'gray', minWidth: '70px', minHeight: '70px', borderRadius: '100%' }}
            alt={user.displayName}
            src={user.photoURL}
          />
        }

      </IconButton>}

      <NavLink style={{ textDecoration: 'none', color: 'black' }} to={'/'}><ListItem button>
        <ListItemIcon>
          <HomeIcon sx={icoHover} />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem></NavLink>

      <NavLink activestyle={activeStyle}
        exact style={{ textDecoration: 'none', color: 'black' }} to={'/products'}><ListItem button>
          <ListItemIcon>
            <StoreIcon sx={icoHover} />
          </ListItemIcon >
          <ListItemText primary="Store" />
        </ListItem></NavLink>

      <NavLink activestyle={activeStyle} style={{ textDecoration: 'none', color: 'black' }} to={'/reviews'}><ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon sx={icoHover} />
        </ListItemIcon>
        <ListItemText primary="My Orders" />
      </ListItem></NavLink>

      <NavLink activestyle={activeStyle} style={{ textDecoration: 'none', color: 'black' }} to={'/userreviews'}><ListItem button>
        <ListItemIcon>
          <RateReviewIcon sx={icoHover} />
        </ListItemIcon>
        <ListItemText primary="Make review" />
      </ListItem></NavLink>

      <NavLink activestyle={activeStyle} style={{ textDecoration: 'none', color: 'black' }} to={'/pay'}><ListItem button>
        <ListItemIcon>
          <AttachMoneyIcon sx={icoHover} />
        </ListItemIcon>
        <ListItemText primary="Pay" />
      </ListItem></NavLink>


      {
        isAdmin ?
          < Box >
            {(open && <Typography color={'gray'} textAlign={'center'} letterSpacing={1.8} mt={1} fontSize={'12px'}>Admin panal</Typography>)} <NavLink activestyle={activeStyle} style={{ textDecoration: 'none', color: 'black' }} to={'/dashbord'}><ListItem button>
              <ListItemIcon>
                <DashboardIcon sx={icoHover} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem></NavLink></Box> : ''
      }




      {
        !user.uid ?
          <NavLink activestyle={activeStyle} style={{ textDecoration: 'none', color: 'black' }} to={'/login'}><ListItem button>
            <ListItemIcon>
              <LoginIcon sx={icoHover} />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem></NavLink> :

          <ListItem activestyle={activeStyle} button onClick={logoutUser}>
            <ListItemIcon>
              <LogoutIcon sx={icoHover} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
      }

    </div>
  )
}
export default MainListItems
