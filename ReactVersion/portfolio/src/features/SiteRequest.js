import { useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Row, Container } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {
    Button,
    FormGroup,
    Label
} from "reactstrap";

const SiteRequest = () => {
    return (
        <Container>
            <h3>Submit Site Request</h3>
            <Row>
                <Col>
                    <Formik>
                        <Form>
                            <FormGroup row>
                                <Label htmlFor='email' md='2'>
                                    <h4>Email</h4>
                                </Label>
                                <Col md='10'>
                                    <Field
                                        name='email'
                                        placeholder='Email'
                                        type='email'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='email'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="author"><h4>Your Name</h4></Label>
                                <Field
                                    name='author'
                                    placeholder='Your Name'
                                    className='form-control' />
                                <ErrorMessage name='author'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="commentText"><h4>Site Request</h4></Label>
                                <Field
                                    name='commentText'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                                    placeholder="Enter details about the site you are need developed here"
                                />
                            </FormGroup>
                            <Button type='submit' color='primary' className="btn btn-lg">
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </Col>
            </Row>

        </Container>
    )
}

export default SiteRequest