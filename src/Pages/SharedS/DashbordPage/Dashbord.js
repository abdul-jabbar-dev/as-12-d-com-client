import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import ManageProducts from '../../AdminPage/ManageProducts/ManageProducts';
import ManageCart from '../../AdminPage/ManageCart.js/ManageCart';
import DashBoardNav from './DashBoardNav';
import { Container } from '@mui/material';
import AddProduct from '../../AdminPage/AddProduct/AddProduct';
import AddAdmin from '../../AdminPage/AddAdmin/AddAdmin';

const Dashbord = () => {
    let { path, url } = useRouteMatch();
    return (
        <Container sx={{mt:0}}>
            <DashBoardNav url={url}></DashBoardNav>
            <Switch>
                <Route exact path={`${path}/`}>
                    <ManageProducts></ManageProducts>
                </Route>
                <Route path={`${path}/addproduct`}>
                    <AddProduct></AddProduct>
                </Route>
                <Route path={`${path}/addadmin`}>
                    <AddAdmin></AddAdmin>
                </Route>
                <Route path={`${path}/managecart`}>
                    <ManageCart></ManageCart>
                </Route>
            </Switch>
        </Container >
    );
};

export default Dashbord;