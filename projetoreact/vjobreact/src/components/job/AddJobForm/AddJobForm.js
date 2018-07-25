import React, {Component} from 'react';
import Axios from 'axios';
import DefaultModal from '../../navigation/DefaultModal/DefaultModal'
import Button from '../../navigation/Button/Button'

/*
Default     ->  add
/newJob     ->  add
/editJob/:id -> edit

*/


class JobForm extends Component { //ou React.Component se não quiser colocar no import
    state = {
        newJob: {},
        mode : "add"
    }

    postDataHandler = (event) => {
        let newJob = {
            ...this.state.newJob
        }

        if(this.state.mode == "edit"){
            
        }else{
            Axios
            .post('/jobs', newJob)
            .then((response) => {
                const newId = response.data.id;
                newJob.id = newId;
                this
                    .props
                    .addToListFunction(newJob);
            })
            .catch((error) => {
                console.log(`An error happend : ${error}`);
            })
            
            event.preventDefault();
        }
    }

    changeValueHandler = (attributeName, value) => {
        let currentJob = this.state.newJob;
        currentJob[attributeName] = value;

        this.setState({newJob: currentJob});
    }

    render() {
        const buttonSumbitName = (this.state.mode == "edit") ? 
            "Salvar vaga" : "Criar vaga"


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
                                        onChange={(event) => this.changeValueHandler('name', event.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputDescription" className="font-weight-bold">Descrição</label>
                                    <textarea
                                        required
                                        className="form-control"
                                        id="inputDescription"
                                        rows="3"
                                        onChange={(event) => this.changeValueHandler('description', event.target.value)}></textarea>
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
                                        onChange={(event) => this.changeValueHandler('skills', event.target.value)}></textarea>
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
                                        onChange={(event) => this.changeValueHandler('salary', event.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="inputJobForPcd"
                                            onChange={(event) => this.changeValueHandler('isPcd', event.target.checked)}/>
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
                                        onChange={(event) => this.changeValueHandler('differentials', event.target.value)}></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputArea" className="font-weight-bold">Área</label>
                                    <select
                                        required
                                        className="custom-select"
                                        id="inputArea"
                                        onChange={(event) => this.changeValueHandler('area', event.target.value)}>
                                        <option selected disabled value="">Selecione...</option>
                                        <option value="desenvolvimento">Desenvolvimento</option>
                                        <option value="desenvolvimento">Back-end</option>
                                        <option value="desenvolvimento">Full-stack</option>
                                        <option value="testes">Testes</option>
                                        <option value="design">Design</option>
                                        <option value="design">Front-end</option>
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
}

// onClick={this.postDataHandler()} -> não use, será chamado assim que a página
// for executada () => this.postDataHandler use desta forma para mandar
// parâmetros onChange={(event) => this.setState({'newJob' : {'name' :
// event.target.value}})}

export default JobForm;