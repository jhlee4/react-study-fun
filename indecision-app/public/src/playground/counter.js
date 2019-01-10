class Counter extends React.Component{
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count:0
        };
    }

    componentDidMount(){
        const json = localStorage.getItem('count');
        const count = JSON.parse(json);
        this.setState(()=>({
            count: count
        }));
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count',json);
        }
    }

    addOne() {
        this.setState((prev)=>{
            return {
                count: prev.count+1
            }
        })
        console.log('+1');
    }
    minusOne() {
        this.setState((prev)=>{
            return {
                count: prev.count-1
            }
        })
        console.log('-1');
    }
    reset() {
        this.setState(()=>{
            return {
                count:0
            }
        })
        console.log('reset');
    }
    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter count={23}/>, document.getElementById('app'));