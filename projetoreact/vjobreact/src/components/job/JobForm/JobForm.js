import React, {Component} from 'react';
import Axios from 'axios';
import DefaultModal from '../../navigation/DefaultModal/DefaultModal'
import Button from '../../navigation/Button/Button'
import {Link} from 'react-router-dom';

/*
Default     ->  add
/newJob     ->  add
/editJob/:id -> edit
*/

class JobForm extends Component { //ou React.Component se não quiser colocar no import
    state = {
        newJob: {},
        mode: "add",
        hasError: false,
        errorMessage: undefined
    }

    callBacks = {
        addCallback : this.foolCallback,
        updateCallback : this.foolCallback,
    }

    postDataHandler = (event) => {
        let newJob = {
            ...this.state.newJob
        }

        if (this.state.mode == "edit") {
            Axios
                .put('/jobs', newJob)
                .then((response) => {
                    const newId = response.data.id;
                    newJob.id = newId;
                    this
                        .callBacks
                        .updateCallback(newJob);
                })
                .catch((error) => {
                    console.log(`An error happend : ${error}`);
                    this.setState({hasError: true, errorMessage: `Erro ao criar nova vaga ${error}`});
                })
                .preventDefault();

        } else {
            Axios
                .post('/jobs', newJob)
                .then((response) => {
                    const newId = response.data.id;
                    newJob.id = newId;
                    this
                        .callBacks
                        .addCallback(newJob);
                })
                .catch((error) => {
                    console.log(`An error happend : ${error}`);
                    this.setState({hasError: true, errorMessage: `Erro ao criar nova vaga ${error}`});
                })
                .preventDefault();
        }
    }

    getJob(id) {
        console.log(`Trying to get job #${id}`);
        Axios
            .get(`/jobs/${id}`)
            .then((response) => {
                this.setState({newJob: response.data});
            })
            .catch((error) => {
                console.error(`Um erro ocorreu ao fazer GET : ${error}`)
                this.setState({hasError: true, errorMessage: `Erro ao carregar a vaga ${error}`})
            })
    }

    changeValueHandler = (attributeName, value) => {

        if(this.props.addCallback !== undefined){
            this.callBacks.addCallback = this.props.addCallback;
        }

        if(this.props.updateCallback !== undefined){
            this.callBacks.updateCallback = this.props.updateCallback;
        }

        let currentJob = this.state.newJob;
        currentJob[attributeName] = value;
        this.setState({newJob: currentJob});
    }

    componentDidMount() {
        console.log('componentDidMount() CALLED');
        console.log(this.props);

        try {

            let id = undefined;
            let mode = undefined;

            console.log(`Id received: ${this.props.id}`);
            console.log(`Mode received: ${this.props.mode}`);

            if (this.props.mode !== undefined && this.props.id !== undefined) {
                if (this.props.mode === 'edit') {
                    console.log('SETTING MODE TO EDIT - VIA PROPS')
                    mode = 'edit';
                    id = this.props.id;

                }
                if (this.props.mode === 'add') {
                    console.log('SETTING MODE TO ADD - VIA PROPS')
                    mode = 'add'
                }
            } else if (this.props.match !== undefined) {
                console.log(`Path name: ${this.props.location.pathname}`);
                console.log(`Id received: ${this.props.match.params.id}`)

                if (this.props.match.path == "/job/edit/:id") {
                    console.log('SETTING MODE TO EDIT - VIA URL');
                    mode = 'edit';
                    id = this.props.match.params.id;
                }
                if (this.props.match.path == "/job/add") {
                    console.log('SETTING MODE TO ADD - VIA URL');
                    mode = 'add';
                }
            }

            if (mode == 'edit') {
                this.setState({mode: 'edit'});
                this.getJob(id);
            } else {
                this.setState({mode: 'add'});
            }

        } catch (error) {
            console.log(`ERROR! : ${error}`);
            this.setState({hasError: true, errorMessage: `Erro ao definir o tipo de componente ${error}`});
        }
    }

    render() {

        if (this.state.hasError) {
            return (
                <div class="alert alert-danger" role="alert">
                    <h4 class="alert-heading">Ooops...</h4>
                    <p>{this.state.errorMessage}</p>

                    <hr/>

                    <Link to={`/vagas`} className="btn btn-secondary my-5 btn-lg btn-block">
                        <i class="fas fa-arrow-alt-circle-left"></i>
                        Voltar
                    </Link>
                </div>
            )
        }

        const buttonSumbitName = (this.state.mode == "edit")
            ? "Salvar edições"
            : "Criar vaga"

        const forPcdChecked = (this.state.mode === "edit" && this.state.newJob.isPcd)
            ? 'checked'
            : '';
        console.log(`CHECKED: ${forPcdChecked} | MODE ${this.state.mode} | ISPCD : ${this.state.newJob.isPcd}`)

        //value = {this.state.newJob.salary}
        return (
            <div>
                <form onSubmit={this.postDataHandler}>
                    <div className="container justify-content-center">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="inputName" className="font-weight-bold">Nome</label>
                                    <input
                                        required
                                        type="text"
                                        className="form-control"
                                        id="inputName"
                                        onChange={(event) => this.changeValueHandler('name', event.target.value)}
                                        value={this.state.newJob.name}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputDescription" className="font-weight-bold">Descrição</label>
                                    <textarea
                                        required
                                        className="form-control"
                                        id="inputDescription"
                                        rows="3"
                                        onChange={(event) => this.changeValueHandler('description', event.target.value)}
                                        value={this.state.newJob.description}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="inputSkills" className="font-weight-bold">Habilidades necessárias</label>
                                    <textarea
                                        required
                                        className="form-control"
                                        id="inputSkills"
                                        rows="3"
                                        onChange={(event) => this.changeValueHandler('skills', event.target.value)}
                                        value={this.state.newJob.skills}></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputSalary" className="font-weight-bold">Salário base</label>
                                    <input
                                        required
                                        type="number"
                                        className="form-control"
                                        id="inputSalary"
                                        placeholder="10,00"
                                        min="0"
                                        step="0.01"
                                        onChange={(event) => this.changeValueHandler('salary', event.target.value)}
                                        value={this.state.newJob.salary}/>
                                </div>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="inputJobForPcd"
                                            onChange={(event) => this.changeValueHandler('isPcd', event.target.checked)}
                                            checked={this.state.newJob.isPcd}/>
                                        <label className="form-check-label" htmlFor="inputJobForPcd">Vaga para PCD</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="inputDifferential" className="font-weight-bold">Diferenciais</label>
                                    <textarea
                                        className="form-control"
                                        id="inputDifferential"
                                        rows="3"
                                        onChange={(event) => this.changeValueHandler('differentials', event.target.value)}
                                        value={this.state.newJob.differentials}></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputArea" className="font-weight-bold">Área</label>
                                    <select
                                        required
                                        className="custom-select"
                                        id="inputArea"
                                        onChange={(event) => this.changeValueHandler('area', event.target.value)}
                                        value={this.state.newJob.area}>
                                        <option defaultValue disabled value="">Selecione...</option>
                                        <option value="desenvolvimento">Desenvolvimento</option>
                                        <option value="backend">Back-end</option>
                                        <option value="fullstack">Full-stack</option>
                                        <option value="testes">Testes</option>
                                        <option value="design">Design</option>
                                        <option value="frontend">Front-end</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success float-right">
                        {buttonSumbitName}
                    </button>
                </form>

                {/*<DefaultModal title="Vaga editada" content={text} isHidden={true} id={modalId}>
                    <Button name='Cancelar' buttonType="primary" dataDismiss='modal'></Button>
                </DefaultModal>*/}
            </div>
        )
    }


    foolCallback(elem){
        console.log(`FOOL CALLBACK CALLED`);
        console.log(elem)
    }
}

// onClick={this.postDataHandler()} -> não use, será chamado assim que a página
// for executada () => this.postDataHandler use desta forma para mandar
// parâmetros onChange={(event) => this.setState({'newJob' : {'name' :
// event.target.value}})}
// this.setState({hasError: true, errorMessage: `Erro ao criar nova vaga ${error}`});
export default JobForm;