import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('./Service.json')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className="services">
            <div className="container">
                <div className="row service-section">
                    <h1  className="py-5 my-5 text-center fs-3">See Our All Courses</h1>
                    {
                        services.map(service => <Service
                            key={service.number}
                            service={service}
                        >

                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;