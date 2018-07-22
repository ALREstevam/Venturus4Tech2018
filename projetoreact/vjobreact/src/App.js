import React, {Component} from 'react'; //Exportação não padrão -> React (padrão) e Component
//import logo from './logo.svg';
import './App.css';

import Header from './components/navigation/Header/Header';
import JobList from './components/job/JobList/JobList';
import JobForm from './components/job/AddJobForm/AddJobForm';
import CollapeseButton from './components/job/AddJobForm/CollapseJobFormButton';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <CollapeseButton/>
                <JobForm/>
                <JobList/>
            </div>
        );
    }
}

export default App;
