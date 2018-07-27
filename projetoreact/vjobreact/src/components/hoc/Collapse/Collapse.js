import React from 'react'
import CollapseFormButton from '../../job/JobForm/CollapseJobFormButton'
/*
Higher-Order Component

Criará um collapse e um botão para abrí-lo : o nome do botão e o conteúdo
do collapse são enviados como parâmetro


*/

const collapse = (props) => {
    return (
        <div>
            <p>

                <CollapseFormButton
                    buttonClass={props.buttonClass}
                    targetId={props.collapseId}
                    text={props.buttonName}
                    onClickHandler = {props.onClickHandler}
                    reference = {props.reference}
                    />

            </p>

            <div className="container mb-5">
                <div className="row">
                    <div className="col-sm">
                        <div className="collapse justify-content-center" id={props.collapseId}>
                            <div className="card card-body">

                                {props.children}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default collapse

/*
<button
                className={ "btn mt-4 mb-4 ml-5 " + props.buttonClass}
                type="button"
                data-toggle="collapse"
                data-target={"#" + props.collapseId}
                aria-expanded="false"
                aria-controls="collapseExample">
                {props.buttonName}
            </button>
*/