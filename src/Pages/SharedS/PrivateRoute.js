import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../Utilitis/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) { return < CircularProgress /> }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.uid ? (
                    children
                ) : (
                    <Redirect

                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute
