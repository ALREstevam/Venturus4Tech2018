import React, {Component} from 'react'; //Exportação não padrão -> React (padrão) e Component
//import logo from './logo.svg';
import './App.css';

import Header from './components/navigation/Header/Header';
import JobList from './components/job/JobList/JobList';
import Main from './components/navigation/Main/Main'
import About from './components/About/About';
import FullJobCard from './components/job/FullJobCard/FullJobCard'
import {Switch, Route} from 'react-router-dom'

// import JobForm from './components/job/AddJobForm/AddJobForm';
// import Collapse from './components/hoc/Collapse/Collapse'
//import Loading from './components/navigation/Loading/Loading'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Main>
                    <Switch>
                        <Route exact path='/' component={JobList}/>
                        <Route path='/vagas' component={JobList}/>
                        <Route path='/sobre' component={About}/>
                        <Route path="/job/:id" component={FullJobCard} />
                    </Switch>
                </Main>
            </div>
        );
    }
}

export default App;

/*
            <div className="App">
                <Header/>
                <Collapse buttonName="Criar nova vaga" collapseId="addJobCollapse" buttonClass="btn-primary">
                    <JobForm/>
                </Collapse>
                <JobList/>
            </div>
*/