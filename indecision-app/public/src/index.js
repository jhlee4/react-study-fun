import React from 'react';
import ReactDOM from'react-dom';
import IndecisionApp from './components/IndecisionApp.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { registerObserver } from 'react-perf-devtool';
import registerServiceWorker from './registerServiceWorker';

const options = {
    shouldLog: true,
    port: 8080,
    components:['IndecisionApp']
}
const callback =(measure)=>{
    console.log(measure);
}


registerObserver(options,callback);

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

registerServiceWorker();
