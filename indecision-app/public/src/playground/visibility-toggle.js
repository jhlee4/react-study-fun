console.log("visibility-toggle active");

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state={
            visibility : false
        }
    }
    handleToggle() {
        this.setState((prev) => {
            return {
                visibility: !prev.visibility
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility toggle</h1>
                <button onClick={this.handleToggle}>
                    {!this.state.visibility ? 'Show details' : 'Hide details'}
                </button>
                {this.state.visibility &&(
                    <div>
                    <p>Hey. These are some details you can now see</p>
                    </div>
                    )}
            </div>
        );
        
    }

}

ReactDOM.render(<VisibilityToggle/>,document.getElementById("app"));