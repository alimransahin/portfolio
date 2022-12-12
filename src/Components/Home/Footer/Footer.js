import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id='contact'  className="max-w-screen-xl mx-auto footer items-center p-4 bg-neutral text-neutral-content">
            <div className="items-center grid-flow-col">
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-3xl">
                <FaTwitter></FaTwitter>
                <FaYoutube></FaYoutube>
                <FaFacebookF></FaFacebookF>
            </div>
        </footer>
    );
};

export default Footer;