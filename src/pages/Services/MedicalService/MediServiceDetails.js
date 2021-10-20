import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const MediServiceDetails = () => {
    const { details } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/medicalService.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const disease = data.filter(find => find.id == details)
    console.log(disease);

    return (
        <div className='text-center  py-4'>
            <div className='shadow-lg h-50 w-50 mx-auto'>
                <div>
                    <img className='h-50' width='500px' src={disease[0]?.practicalImg} alt="" />

                </div>
                <h3>{disease[0]?.name}</h3>
                <p>{disease[0]?.description}</p>
                <p>cost:{disease[0]?.cost}</p>
                <div className="text-center mb-3">
                    <Link to='/medicalServices'>
                        <button className='btn mb-2 btn-danger'>Go to all Medical Service</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default MediServiceDetails;

