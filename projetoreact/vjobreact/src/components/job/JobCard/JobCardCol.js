import React from 'react';
import Card from './JobCard'

const cardCol = (props) => (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-3 text-left">
        <Card
            {...props}
        />
    </div>
)

export default cardCol;