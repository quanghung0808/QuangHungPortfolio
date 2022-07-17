import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';


export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            telnum: '',
            email: '',
            agree: false,
            title: '',
            message: '',
            touched: {
                name: false,
                telnum: false,
                email: false,
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ... this.state.touched, [field]: true }
        });
    }

    validate(name, email, telnum) {
        const errors = {
            name: '',
            telnum: '',
            email: ''
        };
        if (this.state.touched.name && name.length < 3)
            errors.name = 'Name should be at least 3 characters';
        else if (this.state.touched.name && name.length > 30)
            errors.firstname = 'First name should be at most 30 characters';
        const regTelnum = /((09|03|07|08|05)+([0-9]{8})\b)$/;
        if (this.state.touched.telnum && !regTelnum.test(telnum))
            errors.telnum = 'Invalid Tel.Number';
        const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (this.state.touched.telnum && !regEmail.test(email))
            errors.email = 'Invalid Email Address';
        return errors;
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        const errors = this.validate(this.state.name, this.state.email, this.state.telnum);
        return (
            <div >
                <div className="section-bg bgContact pp-scrollable">
                    <div className="scrollable-content">
                        <div className="vertical-centred">
                            <div className="boxed boxed-inner">
                                <div className="vertical-title  d-none d-lg-block"><span>CONTACT</span></div>
                                <div className="container">
                                    <div className="overflow-hidden">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h2 className="title-uppercase"><span className="text-primary">Ho Chi Minh
                                                    City</span>,VietNam</h2>
                                                <h5 className="text-muted">702 Hanoi highway, Hiep Phu Ward, Thu Duc
                                                    City
                                                </h5>
                                                <section className="contact-address">
                                                    <h3><a className="mail" href="mailto:duongquanghung0122@gmail.com">
                                                        <span>duongquanghung0122@gmail.com</span></a>
                                                    </h3>
                                                    <h3><span className="phone">+86 862 098 011</span></h3>
                                                    <div>
                                                        <Link className="pn icon" to="/achievements">&laquo; Previous</Link>
                                                        <Link className="pn icon next" to="/home">Home &raquo;</Link>
                                                    </div>
                                                </section>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="contact-info">
                                                    <Form className="js-form" onSubmit={this.handleSubmit}>
                                                        <div className="row">
                                                            <FormGroup className="form-group col-sm-6">
                                                                <Input
                                                                    type="text"
                                                                    name="name"
                                                                    placeholder="Name*"
                                                                    value={this.state.name}
                                                                    valid={this.state.name === '' ? false : errors.name === ''}
                                                                    invalid={errors.name !== ''}
                                                                    onBlur={this.handleBlur('name')}
                                                                    onChange={this.handleInputChange}
                                                                />
                                                                <FormFeedback>{errors.name}</FormFeedback>
                                                            </FormGroup>
                                                            <FormGroup className="form-group col-sm-6">
                                                                <Input
                                                                    type="email"
                                                                    name="email"
                                                                    placeholder="Email*"
                                                                    value={this.state.email}
                                                                    valid={this.state.email === '' ? false : errors.email === ''}
                                                                    invalid={errors.email !== ''}
                                                                    onBlur={this.handleBlur('email')}
                                                                    onChange={this.handleInputChange}
                                                                />
                                                                <FormFeedback>{errors.email}</FormFeedback>
                                                            </FormGroup>
                                                            <FormGroup className="form-group col-sm-6">
                                                                <Input
                                                                    type="text"
                                                                    name="telnum"
                                                                    placeholder="Telephone*"
                                                                    value={this.state.telnum}
                                                                    valid={this.state.telnum === '' ? false : errors.telnum === ''}
                                                                    invalid={errors.telnum !== ''}
                                                                    onBlur={this.handleBlur('telnum')}
                                                                    onChange={this.handleInputChange}
                                                                />
                                                                <FormFeedback>{errors.telnum}</FormFeedback>
                                                            </FormGroup>
                                                            <FormGroup className="form-group col-sm-6 checkbox">
                                                                <Input
                                                                    type="checkbox"
                                                                    name="agree"
                                                                    checked={this.state.agree}
                                                                    onChange={this.handleInputChange}
                                                                />
                                                                <strong> May I contact you?</strong>
                                                            </FormGroup>
                                                            <FormGroup className="form-group col-sm-12">
                                                                <Input
                                                                    type="text"
                                                                    name="title"
                                                                    placeholder="Title* (Optional)"
                                                                    value={this.state.title}
                                                                    valid={this.state.title === '' ? false : true}
                                                                    onChange={this.handleInputChange}
                                                                />
                                                            </FormGroup>
                                                            <FormGroup className="form-group col-sm-12">
                                                                <Input
                                                                    type="textarea"
                                                                    name="message"
                                                                    id="message"
                                                                    valid={this.state.message === '' ? false : true}
                                                                    placeholder="Message*"
                                                                    value={this.state.message}
                                                                    onChange={this.handleInputChange}>
                                                                </Input>
                                                            </FormGroup>
                                                            <FormGroup className="col-sm-12"><Button type="submit"
                                                                className="btn">Contact me</Button></FormGroup>
                                                        </div>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

