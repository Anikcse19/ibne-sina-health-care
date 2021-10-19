import React, { useEffect, useState } from 'react';
import AllTreatment from './AllTreatment';

const Treatment = () => {

    const [treatments, setTreatments] = useState([]);

    useEffect(() => {
        fetch('./disease.json')
            .then(res => res.json())
            .then(data => setTreatments(data));
    }, [])

    return (
        <div className='container'>

            <div className='row row-cols-1 row-cols-md-2 g-4 my-3'>

                {
                    treatments.map(treatment =>
                        <AllTreatment
                            key={treatment.id}
                            treatment={treatment}
                        ></AllTreatment>
                    )
                }
            </div>
        </div>
    );
};

export default Treatment;
