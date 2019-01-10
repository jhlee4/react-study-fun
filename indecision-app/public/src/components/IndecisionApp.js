import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from'./Options';

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAllOptions = this.handleRemoveAllOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        this.state = {
            options : []
        }
    }

    componentDidMount() {
        try {
            
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({
                    options: options
                }));
            }
        } catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.options.length);
        console.log(this.state.options.length);
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    handleRemoveOption(optionToRemove) {
        this.setState((prev)=>({
            options: prev.options.filter((option)=>{
                return optionToRemove != option;
            })
        }));
    }

    handlePick(){
        console.log('handle pick button clicked');
        let options = this.state.options;
        let random = Math.floor(Math.random()*options.length);
        console.log(random);
        alert(options[random]);
    }

    handleRemoveAllOptions(){
        console.log('remove all button clicked');
        // this.setState(()=>{
        //     return{
        //         options : []
        //     };
        // });

        this.setState(()=>({options:[]}));
        console.log(this.state.options);
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid option value';
        }else if(this.state.options.indexOf(option)>-1){
            return 'option already exist';
        }
        // this.setState((prev)=>{
        //     return{
        //         options : prev.options.concat(option)
        //     };
        // });

        this.setState((prev)=>({
            options : prev.options.concat(option)
        }));
    }

    render() {
        const subtitle = 'Put your life in the hand of a computer';

        return (
            <div>
                <Header subtitle = {subtitle}/>
                <Action 
                hasOptions={this.state.options.length>0}
                handlePick = {this.handlePick}
                />
                <Options 
                options = {this.state.options}
                handleRemoveAllOptions = {this.handleRemoveAllOptions}
                handleRemoveOption = {this.handleRemoveOption}
                />
                <AddOption
                handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}

export default IndecisionApp;