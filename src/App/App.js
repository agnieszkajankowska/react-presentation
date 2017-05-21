import React, {Component} from 'react';
import {Counter} from '../App/Counter/Counter'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello world</h1>
                <Counter />
            </div>
        );
    }
}

export default App;
