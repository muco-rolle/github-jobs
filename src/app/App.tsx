import React from 'react';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { GeistTheme, theme } from 'theme';
import { getRoutes } from 'config';

import 'typeface-inter'; // global font
import { ThemeProvider } from 'styled-components';

export function App() {
    const routes = getRoutes();

    return (
        <ThemeProvider theme={theme}>
            <GeistProvider theme={GeistTheme}>
                <CssBaseline />
                <Router>
                    <Switch>{routes}</Switch>
                </Router>
            </GeistProvider>
        </ThemeProvider>
    );
}
