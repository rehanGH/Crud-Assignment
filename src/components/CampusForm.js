import React, {Component} from 'react';


class CampusForm extends Component{
    constructor(props){
        super(props)
        this.state = { name: ""};
    }

    handleChange = (event) => {
        this.setState({name:event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefualt();
        this.props.
    };
    
    
    render(){
        return(
            <form onSubmit={() =>this.props.onSubmit }>
                <input 
                input="text" 
                name="campusName"
                onChange={this.handleChange}
                value = {this.state.name}
                ></input>
                <button>Now Campus</button>
            </form>
        );
    }
}

export default CampusForm;
