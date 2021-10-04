import React, { useEffect, useState } from 'react';
import HomeServices from '../HomeServices/HomeServices';
import "./Home.css"

const Home = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('./home.json')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className="main container-fluid">
            <div className="row">
                <div className="banner col-md-12 col-12">
                    <h1 className="text-center text-light fs-1">Let's Study Together</h1>
                </div>
            </div>
            <div className=" py-5 mt-5 text-center">
                <div className="container">
                    <div className="row service-section">
                        <h1  className="py-5 my-5 fs-3">Our Most Famous Courses </h1>
                        {
                            services.map(service => <HomeServices
                                key={service.number}
                                service={service}
                            >

                            </HomeServices>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;