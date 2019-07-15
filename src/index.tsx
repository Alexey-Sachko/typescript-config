import * as React from 'react';
import { render } from 'react-dom';
import { App } from './components/app';

render(
    <App compiler="typescript" framework="react" />, 
    document.getElementById('root')
);