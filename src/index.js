import React from 'react';
import ReactDOM from 'react-dom';
import AppLayout from './AppLayout';
import {ThemeProvider} from 'react-css-themr';
import theme from './theme.js';
import style from './style';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <AppLayout />
    </ThemeProvider>, document.getElementById('mission-sampler'));