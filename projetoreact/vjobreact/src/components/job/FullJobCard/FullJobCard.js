import React, {Component} from 'react';
import Axios from 'axios';
import JobCard from '../JobCard/JobCard';
import Loading from '../../navigation/Loading/Loading';
import {Link} from 'react-router-dom';

class FullJobCard extends Component { //ou React.Component se não quiser colocar no import
    state = {
        job: {},
        hasError: false,
        errorMessage: "",
        deleted: false
    }

    componentDidMount() { //Assim que o componente for montado => só posso alterar o state depois disso
        const id = this.props.match.params.id;

        Axios
            .get(`/jobs/${id}`)
            .then((response) => {
                let loadedCard = response.data;
                this.setState({job: loadedCard})
            })
            .catch((error) => {
                console.error(`Um erro ocorreu ao fazer GET : ${error}`)
                this.setState({hasError: true, errorMessage: `Erro ao carregar a vaga`})
            })
    }

    jobRemoveHandler = (id, name) => {
        //Terminar com "Handler" em métodos que manipulam eventos
        Axios
            .delete(`/jobs/${id}`)
            .then((response) => {
                this.setState({deleted: true})
            })
            .catch((error) => {
                console.error(`Um erro ocorreu ao fazer GET : ${error}`)
                this.setState({hasError: true, errorMessage: `Erro ao remover a vaga`})
            })
    }

    jobEditHandler = (id, name) => {
        window.alert(`A vaga '${name}' foi editada com sucesso`);
        console.log(`Editing register with id ${id}`);
    }

    getCard() {
        const loadedCard = this.state.job;
        return (
            <div className="container mt-4">
                <div className="col-sm-12 col-md-12 col-lg-12 mb-3 text-left">
                    <JobCard
                        {...loadedCard}
                        cardType='fullCard'
                        hasBackButton={true}
                        key={loadedCard.id}
                        removeHandler=
                        {() => this.jobRemoveHandler(loadedCard.id, loadedCard.name)}
                        editHandler=
                        {() => this.jobEditHandler(loadedCard.id, loadedCard.name)}></JobCard>
                </div>
            </div>
        )
    }

    render() { //deve retornar o que quero renderizar no componente]
        let htmlGerado = undefined;

        if (this.state.hasError) {
            htmlGerado = <div class="alert alert-danger" role="alert">
                <h4 class="alert-heading">Ooops...</h4>
                <p>{this.state.errorMessage}</p>

                <hr/>

                <Link to={`/vagas`} className="btn btn-secondary my-5 btn-lg btn-block">
                    <i class="fas fa-arrow-alt-circle-left"></i>
                    Voltar
                </Link>
            </div>
        } else if (this.state.deleted == true) {
            htmlGerado = <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Sucesso ao deletar</h4>
                A vaga
                <strong> "{this.state.job.name}" </strong>
                foi removida com sucesso.

                <hr/>

                <Link to={`/vagas`} className="btn btn-secondary my-5 btn-lg btn-block">
                    <i class="fas fa-arrow-alt-circle-left"></i>
                     Voltar
                </Link>
            </div>
        } else if (this.state.job !== undefined) {
            htmlGerado = this.getCard();
        } else {
            htmlGerado = <Loading/>
        }

        return (
            <div>
                <div className="container mt-4">
                    <div className="row justify-content-center">
                        {htmlGerado}
                    </div>
                </div>
            </div>
        )
    }
}

export default FullJobCard;