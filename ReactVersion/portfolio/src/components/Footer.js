import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="site-footer" color="dark">
            <Container>
                <Row>
                    <Col xs='6' sm='2' >
                        <h5>Social</h5>
                            <a
                                className='btn btn-social-icon btn-instagram'
                                href='http://instagram.com/'
                            >
                                <i className='fa fa-instagram' />
                            </a>{' '}
                            <a
                                className='btn btn-social-icon btn-facebook'
                                href='http://www.facebook.com/'
                            >
                                <i className='fa fa-facebook' />
                            </a>{' '}
                            <a
                                className='btn btn-social-icon btn-twitter'
                                href='http://twitter.com/'
                            >
                                <i className='fa fa-twitter' />
                            </a>{' '}
                            <a
                                className='btn btn-social-icon btn-google'
                                href='http://youtube.com/'
                            >
                                <i className='fa fa-youtube' />
                            </a>
                    </Col>
                    <Col>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+12065551234'
                        >
                            <i className='fa fa-phone' /> 1-(208)-255-0140
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:notreal@notreal.co'
                        >
                            <i class="bi bi-person-lines-fill"></i> njwright92@gmail.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;