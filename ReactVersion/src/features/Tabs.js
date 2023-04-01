import React, { useState } from 'react';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col
} from 'reactstrap';
import classnames from 'classnames';

function MyWork() {
    const [currentActiveTab, setCurrentActiveTab] = useState('1');

    const toggle = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab);
    }

    return (
        <div className="tabs" style={{ borderRadius: "0.625em", padding: "1.25em", backgroundColor: "#f5f5f5" }}>
            <h2 style={{ marginBottom: ".5em" }}>My Work</h2>
            <Nav tabs className="d-flex justify-content-between flex-wrap flex-sm-nowrap flex-column flex-sm-row">
                <NavItem>
                    <NavLink
                        className={classnames({
                            active: currentActiveTab === '1'
                        })}
                        onClick={() => { toggle('1'); }}
                        style={{ borderRadius: "0.625em 0.625em 0 0", backgroundColor: currentActiveTab === '1' ? "#ccc" : "#fff", color: currentActiveTab === '1' ? "#333" : "#888", padding: "0.625em 1.25em", fontWeight: currentActiveTab === '1' ? 'bold' : 'normal' }}
                    >
                        SlapShot16
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active: currentActiveTab === '2'
                        })}
                        onClick={() => { toggle('2'); }}
                        style={{ borderRadius: "0.625em 0.625em 0 0", backgroundColor: currentActiveTab === '2' ? "#ccc" : "#fff", color: currentActiveTab === '2' ? "#333" : "#888", padding: "0.625em 1.25em", fontWeight: currentActiveTab === '2' ? 'bold' : 'normal' }}
                    >
                        NativeProTracker
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={currentActiveTab} className='bg-dark text-white' style={{ backgroundColor: "#fff", borderRadius: "0 0 0.625em 0.625em", padding: "1.25em" }}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <p style={{ marginBottom: "1.25em" }}>My first site: a responsive Bootstrap project site for a hockey themed food truck!</p>
                            <a href='https://slapshot16.com/' className='btn btn-success btn-lg' style={{ borderRadius: "0.625em", marginRight: "0.625em" }}>Slapshot16.com</a>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            <p style={{ marginBottom: "1.25em" }}>A website/app project for a friend. Real-time inventory production tracking for any Product! *in development*</p>
                            <a href='https://njwright92.github.io/protracker/' className='btn btn-success btn-lg' style={{ borderRadius: "0.625em", marginRight: "0.625em" }}>ProTracker.io</a>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div >
    );
}

export default MyWork;
