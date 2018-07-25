import React from 'react';


const button = (props) => { 
    /*
    name
    buttonType
    value
    type
    hasOutline
    size
    isBlock
    isDisabled
    dataDemiss
    onClick
    */

    let classesMap = null;

    if(props.hasOutline) {
        classesMap = {
            'deafult'   :   ' btn-outline-default',
            'primary'   :   ' btn-outline-primary',
            'success'   :   ' btn-outline-success',
            'info'      :   ' btn-outline-info',
            'warning'   :   ' btn-outline-warning',
            'danger'    :   ' btn-outline-danger',
            'link'      :   ' btn-outline-link',
            'light'     :   ' btn-outline-light',
            'dark'      :   ' btn-outline-dark',
        };
    }
    else{
        classesMap = {
            'deafult'   :   ' btn-default',
            'primary'   :   ' btn-primary',
            'success'   :   ' btn-success',
            'info'      :   ' btn-info',
            'warning'   :   ' btn-warning',
            'danger'    :   ' btn-danger',
            'link'      :   ' btn-link',
            'light'     :   ' btn-light',
            'dark'      :   ' btn-dark',
        };
    }

    const sizeMap = {
        'large'   :   ' btn-lg',
        'small'   :   ' btn-sm',
        'default' :   ''
    };

    const bootstrapClass    =   classesMap[props.buttonType] === undefined ? classesMap['default'] : classesMap[props.buttonType];
    const type              =   props.type === undefined ? "button" : props.type;
    const size              =   sizeMap[props.size] === undefined ? sizeMap['default'] : sizeMap[props.size];
    const block             =   (props.isBlock === undefined || (props.isBlock) == false)  ? "" : " btn-block";
    const disabled          =   (props.isDisabled === undefined || (props.isDisabled) == false)  ? "" : "disabled";
    const dataDismiss        =  props.dataDismiss === undefined ? "" : props.dataDismiss;
    const onClick           =   props.onClick === undefined ? "" : props.onClick;
    const onMouseOver       =   props.onMouseOver === undefined ? "" : props.onMouseOver;
    const onMouseOut        =   props.onMouseOut === undefined ? "" : props.onMouseOut;

    return(
        <button 
            type={type} 
            className={`btn${bootstrapClass}${size}${block}`} 
            data-dismiss={dataDismiss}
            disabled={disabled}
            onClick={onClick}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            >
                {props.name}
            </button>
    )
}




export default button;

