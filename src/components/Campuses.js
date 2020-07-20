import React, {Component} from 'react';
import CampusCard from "./CampusCard";
import CampusForm from './CampusForm';

class Campuses extends Component{
    constructor(props){
        super(props)
        this.state ={
            campuses: [
                {
                    name: "Brooklyn College", 
                    imageUrl: "https://via.placeholder.com/150", 
                    students: 32
                },
                {
                    name: "college of Staten Island", 
                    imageUrl: "https://via.placeholder.com/150", 
                    students: 26
                },
                {
                    name: "John Jay College", 
                    imageUrl: "https://via.placeholder.com/150", 
                    students: 25
                },
            ],
        };
    }


    handleAddCampus = (name) => {
        const newState = {...this.state};
        const newCampus = {
            name: name,
            imageUrl: "https://via.placeholder.com/150",
            student: 0
        }
        newState.campuses = newState.campuses.concat(newCampus);
        this.setState(newState);
    };

    render(){
        const campuses = () => 
            this.state.campuses.map((campus) => {
                return (
                <CampusCard
                    key={campus.name}
                    name={campus.name}
                    imageUrl={campus.imageUrl}
                    student={campus.student}
                />
                );
            });
        return (
        <div className="row campuses">
            <CampusForm onSubmit={this.handleAddCampus}/>
            {campuses()}
            </div>
        );
    }
}

export default Campuses;