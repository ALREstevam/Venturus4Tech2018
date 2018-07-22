import React from 'react';

const collapeseButton = (props) => (
        <p>
            <button
                className="btn btn-primary mt-4 mb-4 ml-5"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample">Nova vaga
            </button>
        </p>
)

export default collapeseButton;