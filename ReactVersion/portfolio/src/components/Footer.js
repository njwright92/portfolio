import React from 'react';
import {
    MDBFooter,
    MDBContainer,
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='text-center text-white'
            style={{ backgroundColor: '#343131' }}
        >
            <MDBContainer>
                <section className='row-content'>
                    <h4 className="text-white"><strong>Contact</strong></h4>
                    <p className="text-white">Nathan J. Wright currently located in Coeur D'Alene, Idaho. Reach me via: Email, Text, Instagram, Facebook, Twitter, and Github.</p>
                    <a role="button" className="btn btn-light rounded-5 m-1" href="mailto:njwright92@gmail.com"><i
                        className="fa fa-address-card fa-lg text-primary"></i>
                        njwright92@gmail.com</a>
                    <a role="button" className="btn btn-primary rounded-5 m-1"
                        href="sms:12082550140"><i
                            className="fa fa-phone fa-lg text-priamry"></i>(208)-255-0140</a>
                    <h4 className="text-white mt-2">Social Links</h4>
                    <a className="btn btn-danger btn-lg rounded-circle m-1"
                        href="https://www.instagram.com/biggdoggtalez/"><i
                            className="fa fa-lg fa-instagram"></i></a>
                    <a className="btn btn-primary btn-lg rounded-circle m-1"
                        href="http://facebook.com/njwright92"><i
                            className="fa fa-lg fa-facebook"></i></a>
                    <a className="btn btn-info btn-lg rounded-circle m-`"
                        href="http://twitter.com/naterbug321"><i
                            className="fa fa-lg fa-twitter"></i></a>
                    <a className=" btn btn-light btn-lg rounded-circle m-1"
                        href="https://github.com/njwright92"><i
                            className="fa fa-lg fa-github"></i></a>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright:
                <a className='text-white' href='https://njwright92.github.io/portoflio/'>
                    NateDoggs Work
                </a>
            </div>
        </MDBFooter>
    );
}