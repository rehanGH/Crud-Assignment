import React, {Component} from 'react';
import CampusCard from "./components/CampusCard";
import CampusForm from "./components/CampusForm";
import './App.css';
import Campuses from './components/Campuses';

class App extends Component {
  render(){
    return (
      <div className="container">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            CURD App
            </a>
        </nav>
        <CampusForm />
        <Campuses />
      </div>
      );
  }
}

export default App;
