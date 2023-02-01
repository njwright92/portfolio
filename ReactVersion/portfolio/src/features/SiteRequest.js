import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateContactForm } from '../utils/validateContactForm';

const SiteRequest = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                agree: false,
                contactType: 'By Phone',
                feedback: '',
            }}
            onSubmit={handleSubmit}
            validate={validateContactForm}
        >
            <Form>
                <h1><strong>Site Request</strong></h1>
                <FormGroup row>
                    <Label htmlFor='firstName' md='2'>
                    </Label><strong>First Name</strong>
                    <Col>
                        <Field
                            name='firstName'
                            placeholder='First Name'
                            className='form-control'
                        />
                        <ErrorMessage name='firstName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='lastName' md='2'>
                    </Label><strong>Last Name</strong>
                    <Col>
                        <Field
                            name='lastName'
                            placeholder='Last Name'
                            className='form-control'
                        />
                        <ErrorMessage name='lastName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='phoneNum' md='2'>
                    </Label> <strong>Phone</strong>
                    <Col>
                        <Field
                            name='phoneNum'
                            placeholder='Phone'
                            className='form-control'
                        />
                        <ErrorMessage name='phoneNum'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='email' md='2'>
                    </Label><strong>Email</strong>
                    <Col>
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
                <FormGroup row>
                    <Label htmlFor='feedback' md='2'>
                    </Label><strong>Your Site Request</strong>
                    <Col>
                        <Field
                            name='feedback'
                            as='textarea'
                            rows='12'
                            className='form-control'
                            placeholder='enter details for the app or site you want created here'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{ size: 10, offset: 1 }}>
                        <Button type='submit' color='primary'>
                            Send Request
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    );
};

export default SiteRequest;