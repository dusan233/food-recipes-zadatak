import React from 'react'

const Contact = () => {
    return (
        <div className="contact">
            <form className="contact__form">
            <div className="input-control">
                                    
                <input name="firstName" placeholder="First name" required  type="text"/>
            </div>
            <div className="input-control">
                                    
                <input name="lastName" placeholder="Last name" required  type="text"/>
            </div>
            <div className="input-control">
                                    
                <input name="email" placeholder="Email" required  type="email"/>
            </div>
            <div className="input-control">
                                    
                <textarea name="message" maxLength="200" required placeholder="Message..." id="" cols="30" rows="20"></textarea>
            </div>
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
