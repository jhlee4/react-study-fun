


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
const Header = (props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
           {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props)=>{
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled = {!props.hasOptions}
            >
            What should i do?
            </button>
        </div>
    );
};

const Options = (props)=>{
    return (
        <div>
        <button onClick={props.handleRemoveAllOptions}>Remove all</button>
        {props.options.length ===0 && <p>Please add an option to get started</p>}
            {
                props.options.map((option)=>(
                    <Option 
                    key={option}
                    optionText = {option}
                    handleRemoveOption = {props.handleRemoveOption}
                    />
                    ))
            }
        </div>

    );
}

const Option = (props)=>{
    return (
        <div>
            {props.optionText}
            <button
           onClick = {(e)=>{
               props.handleRemoveOption(props.optionText);
           }}>
            Remove
            </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        }
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


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));