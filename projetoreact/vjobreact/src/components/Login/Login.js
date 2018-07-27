import React from 'react';

export default class Login extends React.Component{


    //loginCallback

    state = {
        email : '',
        password : ''
    }


    shouldComponentUpdate(){
        return false;
    }


    render(){
        return (
            <div className="container mt-4">
            {/*<pre>
                <strong>email:</strong> {this.state.email}
            </pre>
            <pre>
                <strong>password:</strong> {this.state.password}
            </pre>*/}
            
                
            
            <div>
                <div className="card mt-4" style={{ width: '35rem', margin: '0 auto'}}>
                    <div className="card-body">
                        <h5 className="card-title"><img src={require('../../assets/images/logo-h-vjobs.png')}/></h5>
                        <h6 className="card-subtitle mb-2 text-muted">Insira seu email e senha para entrar no sistema</h6>
            
                        <div className="form-group col-12">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                onChange = {(event) => {this.setState({email : event.target.value})}}
                                />
                        </div>
                        <div className="form-group col-sm-12">
                            <label htmlFor="password">Senha</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                onChange = {(event) => {this.setState({password : event.target.value})}}
                                />
                        </div>
            
                        <div className="form-group col-12 text-right mb-0">
                            <button 
                                type="submit" 
                                className="btn btn-success"
                                onClick = { 
                                    () => { this.props.loginCallback(
                                            this.state.email, 
                                            this.state.password
                                        )} 
                                }
                                >
                                Entrar
                                </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        )

    }

}