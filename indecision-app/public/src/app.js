import React from 'react';
import ReactDOM from'react-dom';
import IndecisionApp from './components/IndecisionApp.js';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));



class OldSyntax{
    constructor(){
        this.name = 'mike';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting(){
        return `HI, my name is ${this.name}`;
    }
}

const olds = new OldSyntax();
const greeting = olds.getGreeting;
console.log(greeting());


class NewSyntax{
  name = 'jen';
  getGreeting = () =>{
    return `HI, my name is ${this.name}`;
  }
}

const news = new NewSyntax();
const newGreeting = news.getGreeting;

console.log(newGreeting());