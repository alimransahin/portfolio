import React, { useRef } from 'react';
import { ExternalLink } from 'react-external-link';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
        const form = useRef();

        const sendEmail = (event) => {
            event.preventDefault();
            const f = event.target;

            emailjs.sendForm('service_vzeh0h9', 'template_wexktxd', form.current, 'xAw3OmnMLxdRtNlSU')
                .then((result) => {
                    console.log(result.text);
                    f.reset();
                }, (error) => {
                    console.log(error.text);
                });
        };
    return (
        <div className=' max-w-screen-xl mx-auto' id='contact'>
            <h3 className='text-3xl text-center bg-base-200 py-4'>Contact Me</h3>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <div className="card lg:card-side my-6 ">
                            <FaEnvelope className='text-3xl my-auto mx-4'></FaEnvelope>
                            <div>
                                <h1 className="text-2xl font-bold"> Mail</h1>
                                <ExternalLink href="mailto:mdalimransahin@gmail.com">mdalimransahin@gmail.com</ExternalLink>
                            </div>
                        </div>
                        <div className="card lg:card-side my-6 ">
                            <FaPhone className='text-3xl my-auto mx-4'></FaPhone>
                            <div>
                                <h1 className="text-2xl font-bold"> Call me</h1>
                                <ExternalLink href="tel:+8801517824146">+88 01517-824146</ExternalLink>
                            </div>
                        </div>
                        <div className="card lg:card-side my-6 ">
                            <FaMapMarkerAlt className='text-3xl my-auto mx-4'></FaMapMarkerAlt>
                            <div>
                                <h1 className="text-2xl font-bold">My location</h1>
                                <ExternalLink href="https://goo.gl/maps/j3x7t4SKfSuhibTs9">Narayanganj, Bangladesh</ExternalLink>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-2xl bg-base-100 w-screen ">
                            <form ref={form} onSubmit={sendEmail}>
                        <div className="card-body">
                            <div className="form-control">
                                {/* <label className="label">
                                    <span className="label-text">Name</span>
                                </label> */}
                                <input type="text" placeholder="Your Name" name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                {/* <label className="label">
                                    <span className="label-text">Email</span>
                                </label> */}
                                <input type="email" placeholder="Your Email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                {/* <label className="label">
                                    <span className="label-text">Message</span>
                                </label> */}
                                <textarea className="textarea textarea-bordered" placeholder="Your Message" name='message'></textarea>
                            </div>
                            <div className="form-control mt-6">
                                    <input type="submit" className="btn btn-primary" value="Send" />
                            </div>
                        </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;