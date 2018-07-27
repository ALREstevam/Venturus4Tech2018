import React from 'react';

const defmodal = (props) => { //content, title, id, isHidden, hasCloseButton

    return (
        <div
            className={props.additionalClasses + " modal fade"}
            id={props.id}
            tabindex="-1"
            role="dialog"
            aria-labelledby={props.id + 'label'}
            aria-hidden={props.isHidden}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={props.id + 'label'}>{props.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.content}
                    </div>
                    <div className="modal-footer">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default defmodal;

// <button type="button" className="btn btn-primary">Save changes</button>
// <button type="button" className="btn btn-secondary"
// data-dismiss="modal">Close</button>