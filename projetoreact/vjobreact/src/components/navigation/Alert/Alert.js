import React from 'react';

const alert = (props) => { // type hasDismiss title message
    let demissable = "";

    const types = {
      primary:	'alert-primary',
      secondary:	'alert-secondary',
      success:	'alert-success',
      danger:		'alert-danger',
      warning:	'alert-warning',
      info:		'alert-info',
      light:		'alert-light',
      dark:		'alert-dark',
    }

    let type = types['primary'];
    
  
    if(props.hasDismiss){
      demissable = "alert-dismissible "
    }

    if(props.type !== undefined){
      type = types[props.type]
    }

    const dismissHtml = props.hasDismiss !== undefined && props.hasDismiss == true ?
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            :
            undefined

    const secondaryTextHtml = props.secondaryMessage !== undefined ? 
      <div><hr/><p>{props.secondaryMessage}</p></div>
      :
      undefined
            
          


    return (
        <div class={`alert ${type} fade show ${demissable}`} role="alert">
            <h4 class="alert-heading">{props.title}</h4>
            <p>{props.message}</p>
            {secondaryTextHtml}
            {props.children}
            {dismissHtml}
        </div>
    )
}

export default alert;
