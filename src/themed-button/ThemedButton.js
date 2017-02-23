import React from 'react';
import { Button } from 'react-toolbox/lib/button/Button';
import buttonTheme from './button.scss';

const ThemedButton = (props) => (
    <Button theme={buttonTheme}  {...props} />
);

export default ThemedButton;