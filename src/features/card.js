import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const SiteRequestCard = () => {
    return (
        <Card className="bg-secondary rounded-5">
            <CardBody>
                <CardTitle tag="h1" className="text-center mb-2">Request a Site!</CardTitle>
                <CardText className="text-center text-white mb-1 font-weight-bold">
                    I enjoy developing and designing websites and apps. Please submit your website or app request via email, and I will promptly respond with an estimated completion time and cost.
                </CardText>
            </CardBody>

            <Button
                className="btn-warning rounded-5"
                href="mailto:njwright92@gmail.com">
                <i
                    className="fa fa-address-card fa-lg text-secondary">
                </i>
                Njwright92@gmail.com
            </Button>
        </Card>
    );
};

export default SiteRequestCard;
