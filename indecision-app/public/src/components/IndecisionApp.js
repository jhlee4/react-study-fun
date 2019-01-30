import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from'./Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleModalClose = () =>{
        console.log('modal close clicked');
        this.setState(()=>({selectedOption : undefined}));
    };
    
    handleRemoveOption = (optionToRemove) => {
        this.setState((prev)=>({
            options: prev.options.filter((option)=>{
                return optionToRemove != option;
            })
        }));
    }

    handlePick = ()=>{
        console.log('handle pick button clicked');
        let options = this.state.options;
        let random = Math.floor(Math.random()*options.length);
        let option = options[random];
        this.setState(()=>{
            return{
                selectedOption: option
            }
        });
    }

    handleRemoveAllOptions = ()=>{
        console.log('remove all button clicked');
        // this.setState(()=>{
        //     return{
        //         options : []
        //     };
        // });

        this.setState(()=>({options:[]}));
        console.log(this.state.options);
    }

    handleAddOption = (option) =>{
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


    componentDidMount(){
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
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    render() {
        const subtitle = 'Put your life in the hand of a computer';

        return (
            <div>
                <Header subtitle = {subtitle}/>
                <div className="container">
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
                <OptionModal
                    selectedOption = {this.state.selectedOption}
                    handleModalClose = {this.handleModalClose}
                ></OptionModal>
            </div>
           
        );
    }
}

export default IndecisionApp;