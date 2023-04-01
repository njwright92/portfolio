import React from 'react';
import {
    MDBFooter,
    MDBContainer,
} from 'mdb-react-ui-kit';
import { FaGithub, FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaMobileAlt } from 'react-icons/fa';

export default function Footer() {
    return (
        <MDBFooter>
            <MDBContainer className='text-center text-white' style={{ backgroundColor: '#343131', border: '4px solid #fff', borderRadius: '20px', boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)' }}>
                <section>
                    <h4 className="text-white"><strong>Contact</strong></h4>
                    <p className="text-white">
                        Nathan J. Wright currently located in Coeur D'Alene, Idaho. Reach me via: Email, Text, Instagram, Facebook, Twitter, and Github.
                    </p>
                    <a role="button" className="btn btn-light rounded-5 m-1" href="mailto:njwright92@gmail.com">
                        <FaEnvelope className="text-primary" /> njwright92@gmail.com
                    </a>
                    <a role="button" className="btn btn-primary rounded-5 m-1" href="sms:12082550140">
                        <FaMobileAlt className="text-light" /> (208)-255-0140
                    </a>
                    <h4 className="text-white mt-2">Social Links</h4>
                    <a className="btn btn-danger btn-lg rounded-circle m-1" href="https://www.instagram.com/nate_wright3/">
                        <FaInstagram />
                    </a>
                    <a className="btn btn-primary btn-lg rounded-circle m-1" href="http://facebook.com/njwright92">
                        <FaFacebook />
                    </a>
                    <a className="btn btn-info btn-lg rounded-circle m-1" href="http://twitter.com/naterbug321">
                        <FaTwitter />
                    </a>
                    <a className="btn btn-light btn-lg rounded-circle m-1" href="https://github.com/njwright92">
                        <FaGithub />
                    </a>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <span className='text-white' style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>NateDoggs Work</span>
                <br />
                <span>&copy; 2023 All Rights Reserved</span>
            </div>
        </MDBFooter>
    );
}
