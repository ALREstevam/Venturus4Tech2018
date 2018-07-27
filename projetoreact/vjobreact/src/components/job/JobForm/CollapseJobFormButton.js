import React from 'react';

const collapeseButton = (props) => { //buttonClass id text
    let classBtn = " btn-primary"
    if (props.buttonClass !== undefined){
        classBtn = ` ${props.buttonClass}`;
    } 
    
    const reference = props.reference;

    return(
        <p>
            <button
                className={"btn  mt-4 mb-4 ml-5" + classBtn}
                type="button"
                data-toggle="collapse"
                data-target={"#" + props.targetId}
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick = { () => props.onClickHandler(reference) }
            >
            {props.text}
            </button>
        </p>
    )
        }

export default collapeseButton;