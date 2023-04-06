import React from 'react';
import {
    MDBFooter,
    MDBContainer,
} from 'mdb-react-ui-kit';
import { FaGithub, FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaMobileAlt, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <MDBFooter className='mb-0'>
            <MDBContainer
                className='text-center text-white mb-0'
                style={{ backgroundColor: '#343131', border: '0.25em solid #fff', borderRadius: '1.25em', boxShadow: '0px 0px 0.625em rgba(255, 255, 255, 0.5)' }}
            >
                <section>
                    <h4 className="text-white">
                        <strong>
                            Contact Info
                        </strong>
                    </h4>
                    <p className="text-white">
                        Nathan J. Wright currently located in Coeur D'Alene, Idaho.
                    </p>
                    <a role="button" className="btn btn-light rounded-5 m-1" href="mailto:njwright92@gmail.com">
                        <FaEnvelope className="text-primary" /> njwright92@gmail.com
                    </a>
                    <a role="button" className="btn btn-primary rounded-5 m-1" href="sms:12082550140">
                        <FaMobileAlt className="text-light" /> (208)-255-0140
                    </a>
                    <h4 className="text-white mt-2">Social Links</h4>
                    <a className="btn btn-instagram btn-lg rounded-circle m-1" href="https://www.instagram.com/nate_wright3/">
                        <FaInstagram />
                    </a>
                    <a className="btn btn-facebook btn-lg rounded-circle m-1" href="http://facebook.com/njwright92">
                        <FaFacebook />
                    </a>
                    <a className="btn btn-twitter btn-lg rounded-circle m-1" href="http://twitter.com/naterbug321">
                        <FaTwitter />
                    </a>
                    <a className="btn btn-github btn-lg rounded-circle m-1" href="https://github.com/njwright92">
                        <FaGithub />
                    </a>
                    <a className="btn btn-linkedin btn-lg rounded-circle m-1" href="https://www.linkedin.com/in/nathan-wright-78b237123/">
                        <FaLinkedin />
                    </a>
                </section>
            </MDBContainer>
            <div
                className='text-center p-3'
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
            >
                <span
                    className='text-white'
                    style={{ fontWeight: 'bold', fontSize: '1.2rem' }}
                >
                    NateDoggs Work
                </span>
                <br />
                <span>&copy; 2023 All Rights Reserved
                </span>
            </div>
        </MDBFooter>
    );
}
