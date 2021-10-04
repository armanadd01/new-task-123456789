import React from 'react';
import aboutImgOne from '../../images/about-img01.jpg';
import aboutImgTwo from '../../images/about-img02.jpg';

const About = () => {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-startalign-items-start mt-5">
                <div className="col-md-6 col-12">
                    <img className="img-fluid" src={aboutImgOne} alt="" />
                </div>
                <div className="col-md-6">
                    <h1  className="my-3 py-3 fs-3">Become an Instructor</h1>
                    <p>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                </div>
            </div>
            <div className="row justify-content-center align-items-start mt-5">
                <div className="col-md-6 col-12">
                    <h1  className="my-3 my-3 py-3  fs-3">Transform your life through Education</h1>
                    <p>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={aboutImgTwo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;