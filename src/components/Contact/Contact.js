import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5">
                    <h1 className="text-center">Get in Touch</h1>
                    <div className="input-group contact-form mt-4">
                        <textarea className="form-control" name="" id="" cols="60" rows="10"></textarea>
                    </div>
                    <div className="input-group contact-form mt-4">
                        <input className="form-control ml-3" type="text" />
                        <input className="form-control ms-3" type="text" />
                    </div>
                    <div className="input-group contact-form mt-4">
                        <input className="form-control ml-3" type="text" />
                    </div>
                    <div className="input-group contact-form mt-4">
                        <button className="btn btn-outline-primary"> Send Us</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;