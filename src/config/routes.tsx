import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { HomeView } from 'views';

export const getRoutes = () => {
    return (
        <Fragment>
            <Route path="/" component={HomeView} />
        </Fragment>
    );
};
