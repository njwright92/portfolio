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
        <div className="tabs" style={{
            borderRadius: "0.625em",
            padding: "1.25em",
            backgroundColor: "#7F9466",
            border: "0.5em solid #343131"
        }}>
            <h1 style={{ marginBottom: ".5em", fontWeight: "bold" }}>Projects</h1>
            <Nav tabs className="d-flex flex-wrap flex-sm-nowrap flex-column flex-sm-row">
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
                            <p style={{ marginBottom: "1.25em" }}>My first project: A responsive, hockey-themed food truck website, utilizing Bootstrap, HTML5, CSS, and jQuery to master the fundamentals of web development and design.</p>
                            <a href='https://slapshot16.com/' className='btn btn-success btn-lg' style={{ borderRadius: "0.625em", marginRight: "0.625em" }}>SlapShot16.com</a>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            <p style={{ marginBottom: "1.25em" }}>
                                Native Pro Tracker holds a special place in my heart as my first universal app built to learn about Expo-React-Native, Redux, GCP-Firebase/Firestore, and other technologies. It began as a learning app, but it has evolved into a powerful and professional tool with full-stack CRUD functionality, real-time database and authentication capabilities, and a seamless experience for tracking and managing various tasks and activities. The app's responsive design ensures compatibility with a wide range of devices, making it accessible to all users. Key features, including data visualization and production tracking, make it a versatile and user-friendly tool. Native Pro Tracker serves as a testament to my growth as a developer and my ability to create a practical and enjoyable app.
                            </p>
                            <p className="showcase">
                                <em>Web Version Now Live!</em>
                            </p>
                            <a href='https://www.nativeprotracker.com/' className='btn btn-success btn-lg' style={{ borderRadius: "0.625em", marginRight: "0.625em" }}>NativeProTracker.com</a>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div >
    );
}

export default MyWork;
