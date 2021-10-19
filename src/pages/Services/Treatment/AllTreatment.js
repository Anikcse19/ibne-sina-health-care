import React from 'react';
import { Link } from 'react-router-dom';

const AllTreatment = (props) => {

    const { id, treatmentTitle, cost, description, img } = props.treatment

    const dynamicUrl = `/treatment/${id}`

    return (
        <div class="col card">
            <div class="card-body">
                <h5 class="card-title">{treatmentTitle}</h5>
                <p class="card-text">{description}</p>
                <p class="card-text">Cost:BDT <span className='fs-4 fw-bold'> {cost}</span></p>
            </div>
            <div className="text-center mb-3">
                <Link to={dynamicUrl}><button className='btn btn-primary text-white fw-bold'>More Details</button></Link>
            </div>

        </div>
    );
};

export default AllTreatment;
{/* <div className="text-center mb-3">
    <Link to={dynamicUrl}><button className='btn btn-success text-warning fw-bold'><i class="fas fa-info-circle"></i>More Details...</button></Link>
</div> */}