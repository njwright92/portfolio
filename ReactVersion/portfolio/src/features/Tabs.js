import React from 'react';
import {
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

function MyWork() {
    return (
        <Nav pills className='bg-dark text-success'>
            <NavItem>
                <NavLink
                    className="btn btn-success btn-lg"
                    active
                    href="https://slapshot16.com"
                >
                    SlapShot16
                </NavLink>
                <p>A Website for a hockey themed food truck!</p>
            </NavItem>
            <NavItem>
                <NavLink className="btn btn-success btn-lg"
                    href="https://njwright92.github.io/proTracker/"
                >
                    ProTracker.io
                </NavLink>
                <p>An app for production tracking *in development*</p>
            </NavItem>
        </Nav>
    );
}

export default MyWork;