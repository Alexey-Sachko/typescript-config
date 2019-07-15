import * as React from 'react';
import { Component } from 'react';
import './app.scss';

export interface HelloProps { compiler: string; framework: string; }


export class App extends Component<HelloProps, any> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}

console.log('hello world')