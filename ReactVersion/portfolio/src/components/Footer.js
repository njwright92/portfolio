import React from 'react';
import {
    MDBFooter,
    MDBContainer,
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='bg-dark text-center text-white'>
            <MDBContainer className='p-4 pb-0'>
                <section className='mb-4'>
                    <h4 className="text-white"><strong>Contact</strong></h4>
                    <p className="text-white">Nathan J. Wright currently located in Coeur D'Alene, Idaho. Reach me via: Email, Text, Instagram, Facebook, Twitter, and Github.</p>
                    <a role="button" className="btn btn-light rounded-5" href="mailto:njwright92@gmail.com"><i
                        className="fa fa-address-card fa-lg text-primary"></i>
                        njwright92@gmail.com</a>
                    <a role="button" className="btn btn-primary rounded-5"
                        href="sms:12082550140"><i
                            className="fa fa-phone fa-lg text-priamry"></i>(208)-255-0140</a>
                    <h2 className="text-white mt-2 mb-2">Social Links</h2>
                    <a className="btn btn-danger btn-lg rounded-circle"
                        href="https://www.instagram.com/biggdoggtalez/"><i
                            className="fa fa-lg fa-instagram"></i></a>
                    <a className="btn btn-primary btn-lg rounded-circle"
                        href="http://facebook.com/njwright92"><i
                            className="fa fa-lg fa-facebook"></i></a>
                    <a className="btn btn-info btn-lg rounded-circle"
                        href="http://twitter.com/naterbug321"><i
                            className="fa fa-lg fa-twitter"></i></a>
                    <a className=" btn btn-light btn-lg rounded-circle"
                        href="https://github.com/njwright92"><i
                            className="fa fa-lg fa-github">github</i></a>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright:
                <a className='text-white' href='https://njwright92.github.io/portoflio/'>
                    NateDogg
                </a>
            </div>
        </MDBFooter>
    );
}