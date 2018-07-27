import React from 'react';
import SiteLogo from '../../../assets/images/logo-h-vjobs.png'
import {Link} from 'react-router-dom'

const header = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className="navbar-brand" to="/">
            <img
                className="logo"
                src={SiteLogo}
                alt=""
                style={{
                width: '100px'
            }}/>
        </Link>

        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link text-white" to="/vagas">Vagas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/sobre">Sobre</Link>
                </li>
            </ul>
        </div>

        <a
            className="nav-item nav-link text-white">
            {props.username}
        </a>

        <button
            type='button'
            className="btn btn-primary text-white"
            onClick={() => props.logoutCallback}>
            <i className="fas fa-sign-out-alt"></i>
        </button>
    </nav>
);

export default header; //exportando o arquivo -> o retorno default do arquivo é a função header