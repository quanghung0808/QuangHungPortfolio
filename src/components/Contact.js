import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import emailjs from 'emailjs-com'

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
                title: false,
                message: false
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

    validate(name, email, telnum, title, message) {
        const errors = {
            name: '',
            telnum: '',
            email: '',
            title: '',
            message: ''
        };
        if (this.state.touched.name && name.length < 3)
            errors.name = 'Name should be at least 3 characters';
        else if (this.state.touched.name && name.length > 30)
            errors.firstname = 'First name should be at most 30 characters';
        const regTelnum = /((09|03|07|08|05)+([0-9]{8})\b)$/;
        if (this.state.touched.telnum && !regTelnum.test(telnum))
            errors.telnum = 'Invalid Tel.Number';
        const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (this.state.touched.email && !regEmail.test(email))
            errors.email = 'Invalid Email Address';
        if (this.state.touched.title && title.length < 1)
            errors.title = 'You must input a title';
        if (this.state.touched.message && message.length < 1)
            errors.message = 'You must input a message';
        return errors;
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    handleSubmit(event) {
        if (this.state.title === '') {
            this.setState({ title: "No title" })
        }
        if (this.state.message === '') {
            this.setState({ message: "No message" })
        }
        const target = event.target;
        emailjs.sendForm('gmail', 'template_gmail', target, 'tTZgK80dCV-FMhGZA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        event.target.reset();
    }

    render() {
        const errors = this.validate(this.state.name, this.state.email, this.state.telnum, this.state.title, this.state.message);
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
                                                                <Input
                                                                    type="hidden"
                                                                    name="check"
                                                                    value={this.state.agree ? "You can contact me" : "Don't contact me!"}
                                                                />
                                                                <strong> May I contact you?</strong>
                                                            </FormGroup>
                                                            <FormGroup className="form-group col-sm-12">
                                                                <Input
                                                                    type="text"
                                                                    name="title"
                                                                    placeholder="Title*"
                                                                    value={this.state.title}
                                                                    valid={this.state.title === '' ? false : errors.title === ''}
                                                                    invalid={errors.title !== ''}
                                                                    onChange={this.handleInputChange}
                                                                    onBlur={this.handleBlur('title')}
                                                                />
                                                                <FormFeedback>{errors.title}</FormFeedback>
                                                            </FormGroup>
                                                            <FormGroup className="form-group col-sm-12">
                                                                <Input
                                                                    type="textarea"
                                                                    name="message"
                                                                    id="message"
                                                                    valid={this.state.message === '' ? false : errors.message === ''}
                                                                    invalid={errors.message !== ''}
                                                                    placeholder="Message*"
                                                                    value={this.state.message}
                                                                    onChange={this.handleInputChange}
                                                                    onBlur={this.handleBlur('message')}
                                                                />
                                                                <FormFeedback>{errors.message}</FormFeedback>
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

