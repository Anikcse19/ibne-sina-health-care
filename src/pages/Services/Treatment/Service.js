import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Service = () => {
    const { details } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/disease.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    const disease = data.filter(find => find.id === details)
    // console.log(disease);

    return (
        <div className='text-center  py-4'>
            <div className='shadow-lg h-50 w-50 mx-auto'>
                <div>
                    <img className='h-50' width='500px' src={disease[0]?.img} alt="" />

                </div>
                <h3>{disease[0]?.treatmentTitle}</h3>
                <p>{disease[0]?.description}</p>
                <p>cost:{disease[0]?.cost}</p>
                <div className="text-center mb-3">
                    <Link to='/treatment'>
                        <button className='btn btn-danger mb-3'>Go to all Treatment</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Service;
