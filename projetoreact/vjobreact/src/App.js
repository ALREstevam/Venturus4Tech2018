import React, {Component} from 'react'; //Exportação não padrão -> React (padrão) e Component
import Axios from 'axios';
//import logo from './logo.svg';
import './App.css';

import Login from './components/Login//Login'
import Header from './components/navigation/Header/Header';
import JobList from './components/job/JobList/JobList';
import Main from './components/navigation/Main/Main'
import About from './components/About/About';
import FullJobCard from './components/job/FullJobCard/FullJobCard'
import JobForm from './components/job/JobForm/JobForm'
import {Switch, Route} from 'react-router-dom'

// import JobForm from './components/job/AddJobForm/AddJobForm'; import Collapse
// from './components/hoc/Collapse/Collapse' import Loading from
// './components/navigation/Loading/Loading'

class App extends Component {

    state = {
        //Atribui se tiver um valor, se for null ou undefined atribui o que está depois do ||
        loggedUser: JSON.parse(window.localStorage.getItem('user')) || undefined,
        hasError : false,
        errorMessage : '',
    }

    getLoggedUser() {
        return this.state.loggedUser;
    }

    loginHandler = (emailVal, passwordVal) => {
        Axios
            .post('/login', {
            email: emailVal,
            password: passwordVal
        })
            .then((response) => {
                console.log(response)
                console.log(`FAZENDO LOGIN email: ${emailVal} | senha: ${passwordVal}`)
                
                window.localStorage.setItem('user', JSON.stringify(response.data.user));
                window.localStorage.setItem('token', response.data.token);

                this.setState({loggedUser : response.data.user})
            })
            .catch((error) => {
                alert('Erro ao fazer login, suas credenciais podem estar incorretas.');
                console.log(`Erro no login : ${error}`);
                this.setState({hasError : true, errorMessage : 'Erro ao fazer login'})
            })
    }

    logoutHandler = () => {
        window.localStorage.clear();
        this.setState({loggedUser : undefined});
    }

    render() {

        if (this.getLoggedUser()) {
            return (
                <div className="App">
                    <Header
                    logoutCallback={this.logoutHandler}
                    username = {this.state.loggedUser.name}
                    />
                    <Main>
                        <Switch>
                            <Route exact path='/' component={JobList}/>

                            <Route exact path='/vagas' component={JobList}/>
                            <Route exact path='/sobre' component={About}/>

                            <Route exact path='/job/edit/:id' component={JobForm}/>
                            <Route exact path='/job/add' component={JobForm}/>

                            <Route exact path='/job/:id' component={FullJobCard}/>
                        </Switch>
                    </Main>
                </div>
            );
        }

        return (
            <div className="App">
                <Login loginCallback={this.loginHandler}/>
            </div>
        )

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