import React from 'react';

import imgDeveloper from '../../../assets/images/developer.png';
import imgDesigner from '../../../assets/images/designer.png';
import imgTester from '../../../assets/images/tester.png';
import imgGeneral from '../../../assets/images/generalImage.jpg';



const card = (props) => {

    const imgMap = {
        "DEVELOPER" : imgDeveloper,
        "DESENVOLVIMENTO": imgDeveloper,
        "DESIGNER": imgDesigner,
        "DESIGN": imgDesigner,
        "TESTER": imgTester,
        "TESTE": imgTester,
        "TESTES": imgTester
    }


    let img = imgGeneral;
    const re = /(http[s]?:\/\/.*.(?:png|jpg|gif|svg|jpeg))/i;

    //Caso exista texto no atributo imagem e seja uma url para uma imagem
    if(props.imgSrc !== undefined && re.test(props.imgSrc.toString())){
      img = props.imgSrc;
    }
    //Caso a área esteja no objeto com o nome das áreas
    else if(imgMap[props.area.toString().toUpperCase()]){
      img = imgMap[props.area.toString().toUpperCase()]
    }
    
    /*Object
        .keys(imgMap)
        .forEach((key) =>  {
            let value = imgMap[key];
            console.log(`${props.imgSrc.toString().toUpperCase()} == ${key.toString().toUpperCase()}`)
            if (props.imgSrc.toString().toUpperCase() == key.toString().toUpperCase()) {
                img = value;
            }
        })
        */

      
    /*
    switch (props.imgSrc) {
        case "developer":
            img = imgDeveloper;
            break;
        case "designer":
            img = imgDesigner;
            break;
        case "tester":
            img = imgTester;
            break;
        default:
            img = props.imgSrc;
            break;
    }
    */

    return (
        <div className="card">
            <img className="card-img-top" src={img} alt=""/>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <h3 className="card-title font-weight-bold small">Descrição</h3>
                <p>{props.description}</p>
                <h3 className="card-title font-weight-bold small">Salário base</h3>
                <p>R$ {props.baseSalary}</p>
                <button type="button" className="btn btn-warning mx-1" onClick={props.editHandler}>
                    <i className="far fa-edit"></i> Editar
                </button>
                <button type="button" className="btn btn-danger mx-1" onClick={props.removeHandler}>
                    <i className="far fa-trash-alt"></i> Excluir
                </button>
            </div>
        </div>
    )
}
export default card;