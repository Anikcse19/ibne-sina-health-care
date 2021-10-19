import React, { useEffect, useState } from 'react';
import ShowMedicalService from './ShowMedicalService';
import ShowTreatment from './ShowTreatment';



const ShowService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./medicalService.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <div id='services' >
            <div>
                <h2 className='text-center m-5'>Our Medical Service For You!!!</h2>
                <div class="container-fluid row row-cols-1 row-cols-md-2 g-4">
                    {
                        services.map(service =>
                            <ShowMedicalService
                                key={service.id}
                                service={service}
                            ></ShowMedicalService>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ShowService;