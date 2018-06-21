import React, { Component } from 'react';
import classes from './Contact.css';
import Button from '../../components/Layout/Button/Button';
import Input from '../../components/Layout/Input/Input';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-brands/faFacebook';
import twitter from '@fortawesome/fontawesome-free-brands/faTwitterSquare';
import git from '@fortawesome/fontawesome-free-brands/faGithub';
import linkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';

class Contact extends Component{
    state = {
        emailForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: ''
            },
            message: {
                elementType: 'input',
                elementConfig: {
                    type: 'textarea',
                    placeholder: 'Type Your Message'
                },
                value: ''
            }
        }
    };

    changedHandler = (event, inputIdentifier) =>{
        const updatedEmailFrom = {
            ...this.state.emailForm
        };
        const updatedFormElement = {
            ...updatedEmailFrom[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;
        updatedEmailFrom[inputIdentifier] = updatedFormElement;
        this.setState({emailForm:updatedFormElement});
    };

    emailHandler = (event) =>{
        event.preventDefault();

        const formData = {};
        for (let dataValues in this.state.emailForm){
            formData[dataValues] = this.state.emailForm[dataValues].value
        }

        const email = {
            emailData: formData

        };

        console.log(email);
    };

    render(){
        const formElementsArray = [];
        for (let key in this.state.emailForm){
            formElementsArray.push({
                id: key,
                config: this.state.emailForm[key]
            });
        }


        return(
            <div className={classes.Contact}>
                <h1>Get in touch with me</h1>

                <form onSubmit={this.emailHandler}>
                    {formElementsArray.map(formElement =>(
                        <Input
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            changed={(event) => this.changedHandler(event, formElement.id)}/>

                    ))}
                    <Button btnType="Success">SUBMIT</Button>
                </form>

                <p>Or. You can email me directly at astoryed@gmail.com</p>

                <FontAwesomeIcon className={classes.Social} icon={faCoffee}  size="3x"/>
                <FontAwesomeIcon className={classes.Social} icon={twitter}  size="3x"/>
                <FontAwesomeIcon className={classes.Social} icon={git}  size="3x"/>
                <FontAwesomeIcon className={classes.Social} icon={linkedin}  size="3x"/>
            </div>
        )
    }
}

export default Contact;