import React, { useEffect, useState } from 'react';
import AllMedicalService from './AllMedicalService';


const MedicalService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./medicalService.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <div className="container">

            <div class="my-3">
                <h2 className='text-center'>Check out Our Special Services </h2>
                {
                    services.map(service =>
                        <AllMedicalService
                            key={service.id}
                            service={service}
                        ></AllMedicalService>
                    )
                }
            </div>
        </div>
    );
};

export default MedicalService;