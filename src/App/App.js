import React, {Component} from 'react';
import {Counter} from '../App/Counter/Counter'
import {Counter2} from '../App/Counter/Counter2'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello world</h1>
                <Counter />
                <Counter2 minValue={0} maxValue={20} style="danger"/>
                <Counter2 minValue={-5} maxValue={15} style="success"/>
            </div>
        );
    }
}

export default App;
