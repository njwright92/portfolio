import React from 'react';
import {
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

function MyWork() {
    return (
        <Nav pills>
            <NavItem>
                <NavLink
                    active
                    href="https://slapshot16.com"
                >
                    SlapShot16.com
                </NavLink>
                <p>A Website for a hockey themed food truck!</p>
            </NavItem>
            <NavItem>
                <NavLink href="https://njwright92.github.io/proTracker/"
                >
                    ProTracker.io
                </NavLink>
                <p>An app for production tracking *in development*</p>
            </NavItem>
        </Nav>
    );
}

export default MyWork;