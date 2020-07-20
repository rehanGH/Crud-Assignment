import React, {Component} from "react";
import PropTypes from "prop=types"

class CampusCard extends Component{
    render(){
        return (
        <div className="campu-card col-6">
            <img src ={this.props.imageUrl} alt="Campus"/>
            <h3>{this.props.name}</h3>
            <p>{this.props.students} students</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
        );
    }
}

export default CampusCard;


CampusCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    students: PropTypes.number.isRequired
}