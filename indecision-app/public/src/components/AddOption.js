import React from 'react';

class AddOption extends React.Component {
    state = {
        error:undefined
    }
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

    }
    handleAddOption(e) {
        e.preventDefault();
        let option = e.target.elements.option.value.trim();
        let error = this.props.handleAddOption(option);

        this.setState(()=>({error:error}));
        if(!error){
          e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
                <input type='text' name='option'></input>
                <button >Add option</button>
            </form>
            </div>
        );
    }
}

export default AddOption;