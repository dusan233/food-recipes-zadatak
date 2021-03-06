import React from 'react'
import { useState, useRef } from 'react'

const Contact = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const timeoutRef = useRef();
    const [successMessage, setSuccessMsg] = useState(false);

    const onInputChange = (e) => {
        if(e.target.name === "firstName") {
            setFirstName(e.target.value)
        }else if(e.target.name === "lastName") {
            setLastName(e.target.value)
        }else if(e.target.name === "email") {
            setEmail(e.target.value);
        }else {
            setMessage(e.target.value);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push({
            firstName,
            lastName,
            email,
            message
        })
        localStorage.setItem('messages', JSON.stringify(messages));
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setSuccessMsg(true);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setSuccessMsg(false);
        }, 4000);
    }
    

    return (
        <div className="contact">
            <form onSubmit={onSubmit} className="contact__form">
            <div className="input-control">
                                    
                <input onChange={onInputChange} value={firstName} name="firstName" placeholder="First name" required  type="text"/>
            </div>
            <div className="input-control">
                                    
                <input onChange={onInputChange} value={lastName} name="lastName" placeholder="Last name" required  type="text"/>
            </div>
            <div className="input-control">
                                    
                <input onChange={onInputChange} value={email} name="email" placeholder="Email" required  type="email"/>
            </div>
            <div className="input-control">
                                    
                <textarea onChange={onInputChange} value={message} name="message" maxLength="200" required placeholder="Message..." id="" cols="30" rows="10"></textarea>
            </div>
            {successMessage ? <div className="success-message">
                    Message sent successfully!
                </div>: null}
            <div className="btn-container">
                
            <button type="submit" className="btn btn--large">
                Send
            </button>
            </div>
            </form>
            
        </div>
    )
}

export default Contact
