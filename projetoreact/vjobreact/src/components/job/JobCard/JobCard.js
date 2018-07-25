import React from 'react';
import DefaultModal from '../../navigation/DefaultModal/DefaultModal'
import Button from '../../navigation/Button/Button'
import {Link} from 'react-router-dom';

import imgDeveloper from '../../../assets/images/developer.png';
import imgDesigner from '../../../assets/images/designer.png';
import imgTester from '../../../assets/images/tester.png';
import imgGeneral from '../../../assets/images/generalImage.jpg';

const generateNewModalId = () => {
    modalId = 'modal' + Math.floor(Math.random() * 9999999);
}

let modalId = generateNewModalId();

const card = (props) => {
    generateNewModalId();

    const imgMap = {
        "DEVELOPER": imgDeveloper,
        "DEV": imgDeveloper,
        "DESENVOLVIMENTO": imgDeveloper,
        "DESIGNER": imgDesigner,
        "DESIGN": imgDesigner,
        "TESTER": imgTester,
        "TESTE": imgTester,
        "TESTES": imgTester
    }

    let img = imgGeneral;

    if (props.area !== undefined && imgMap[
        props
            .area
            .toString()
            .toUpperCase()
    ]) {
        img = imgMap[
            props
                .area
                .toString()
                .toUpperCase()
        ]
    }

    let additional = {};
    if (props.cardType == 'fullCard') {
        additional.area = <div>
            <h3 className="card-title font-weight-bold small">Area</h3>
            <p>{props.area}</p>
        </div>

        additional.differentials = <div>
            <h3 className="card-title font-weight-bold small">Diferenciais</h3>
            <p>{props.differentials}</p>
        </div>

        additional.skills = <div>
            <h3 className="card-title font-weight-bold small">Habilidades necessárias</h3>
            <p>{props.skills}</p>
        </div>

        additional.forPcd = <div>
            <h3 className="card-title font-weight-bold small">Para PCD</h3>
            <p>{props.forPcd !== undefined && props.forPcd == true
                    ? "Sim"
                    : "Não"}</p>
        </div>

    }

    if(props.hasBackButton !== undefined && props.hasBackButton == true){
        additional.expandDexpand = 
        <Link to={`/vagas`} className="btn btn-secondary mx-1">
            <i class="fas fa-arrow-alt-circle-left"></i>
        Voltar
    </Link>
    }else{
        additional.expandDexpand = 
        <Link to={`/job/${props.id}`} type="button " className="btn btn-success mx-1">
                    <i class="fas fa-expand-arrows-alt"></i>
                </Link>
    }

    return (
        <div className="card">
            <img className="card-img-top" src={img} alt=""/>
            <div className="card-body">

                <h2 className="card-title">{props.name}</h2>
                <h3 className="card-title font-weight-bold small">Descrição</h3>
                <p>{props.description}</p>

                {additional['area']}
                {additional['differentials']}
                {additional['skills']}
                {additional['forPcd']}

                <hr/>

                <h3 className="card-title font-weight-bold small">Salário base</h3>
                <p>R$ {props.salary}</p>


                <hr/>
                
                <button
                    type="button"
                    className="btn btn-warning mx-1"
                    onClick={props.editHandler}>
                    <i className="far fa-edit"></i>
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-danger mx-1"
                    data-toggle="modal"
                    data-target={`#${modalId}`}>
                    <i className="far fa-trash-alt"></i>
                    Excluir
                </button>

                {additional['expandDexpand']}
                



                

            </div>
            {getDeleteDialogHtml(props)}
        </div>
    )
};

function getDeleteDialogHtml(props) {
    const text = <p>tem certeza de que deseja remover a vaga
        <strong>
            {props.title}</strong>?</p>
    return (
        <DefaultModal title="Remover vaga" content={text} isHidden={true} id={modalId}>
            <Button
                name='Deletar'
                onClick={() => {
                props.removeHandler(props.registerId, props.title)
            }}
                buttonType="danger"
                dataDismiss='modal'></Button>
            <Button name='Cancelar' buttonType="primary" dataDismiss='modal'></Button>
        </DefaultModal>
    )
};

export default card;
