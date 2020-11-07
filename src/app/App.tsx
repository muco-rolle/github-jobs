import React from 'react';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { GeistTheme } from 'theme';
import { getRoutes } from 'config';

import 'typeface-inter'; // global font

export function App() {
    const routes = getRoutes();

    return (
        <GeistProvider theme={GeistTheme}>
            <CssBaseline />
            <Router>
                <Switch>{routes}</Switch>
            </Router>
        </GeistProvider>
    );
}
