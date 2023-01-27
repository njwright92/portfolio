import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    TabContent, TabPane, Nav,
    NavItem, NavLink, Row, Col
} from 'reactstrap';
import classnames from 'classnames';

function MyWork() {

    // State for current active Tab
    const [currentActiveTab, setCurrentActiveTab] = useState('1');

    // Toggle active state for Tab
    const toggle = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab);
    }

    return (
        <div style={{
            display: 'block', width: 700, padding: 30
        }}>

            <Nav tabs className='bg-dark text-white btn btn-success btn-lg'>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '1'
                        })}
                        onClick={() => { toggle('1'); }}
                    >
                        SlapShot16
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '2'
                        })}
                        onClick={() => { toggle('2'); }}
                    >
                        ProTracker2
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={currentActiveTab} className='bg-dark text-white'>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <h5>Website for a hockey themed food truck!</h5>
                            <a href='https://slapshot16.com/' className='btn btn-success btn-lg'>Slapshot16.com </a>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            <h5>A website/app project for a friend. Real time inventory production
                                tracking for eco blocks, and more!*in development*</h5>
                            <a href='https://njwright92.github.io/protracker/' className='btn btn-success btn-lg'>ProTracker.io</a>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div >
    );
}

export default MyWork;
