import React from 'react';

const newJobForm = (props) => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <div className="collapse justify-content-center" id="collapseExample">
                        <div className="card card-body">
                            <form>
                                <div className="container justify-content-center">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="inputName" className="font-weight-bold">Nome</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputName"
                                                    placeholder="Ana Maria"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputDescription" className="font-weight-bold">Descrição</label>
                                                <textarea className="form-control" id="inputDescription" rows="3"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="inputSkills" className="font-weight-bold">Habilidades necessárias</label>
                                                <textarea className="form-control" id="inputSkills" rows="3"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputSalary" className="font-weight-bold">Salário base</label>
                                                <input
                                                    type="numer"
                                                    className="form-control"
                                                    id="inputSalary"
                                                    placeholder="10,00"
                                                    min="0"
                                                    step="0.1"/>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="inputJobForPcd"/>
                                                    <label className="form-check-label" htmlFor="inputJobForPcd">Vaga para PCD</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="inputDifferential" className="font-weight-bold">Diferenciais</label>
                                                <textarea className="form-control" id="inputDifferential" rows="3"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputDifferential" className="font-weight-bold">Área</label>
                                                <select className="custom-select">
                                                    <option selected value="dev">Desenvolvimento</option>
                                                    <option value="mngmnt">Manager</option>
                                                    <option value="test">Tester</option>
                                                    <option value="scrummaster">Scrum Master</option>
                                                    <option value="reqanaly">Analista de Requisitos</option>
                                                    <option value="arch">Arquitetura</option>
                                                    <option value="infra">Infraestrutura</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-success float-right">Criar vaga</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default newJobForm;