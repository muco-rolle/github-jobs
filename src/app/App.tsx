import React from 'react';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';

import { GeistTheme, theme } from 'theme';
import { getRoutes } from 'config';

import 'typeface-inter'; // global font
import { ThemeProvider } from 'styled-components';

export function App() {
    const routes = getRoutes();
    const cache = new QueryCache();

    return (
        <ReactQueryCacheProvider queryCache={cache}>
            <ThemeProvider theme={theme}>
                <GeistProvider theme={GeistTheme}>
                    <CssBaseline />
                    <ReactQueryDevtools initialIsOpen />
                    <Router>
                        <Switch>{routes}</Switch>
                    </Router>
                </GeistProvider>
            </ThemeProvider>
        </ReactQueryCacheProvider>
    );
}
