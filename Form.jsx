// import "../components/FormStyle.css";
import "./FormStyle.css"
import React from 'react';

const Form = () => {
  return (
    <div className="form">
        <form>
        <label>Your name</label>
        <input type="text" />
        <label>Your email</label>
        <input type="email" />  
        <label>Subject</label>
        <input type="text" />
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here"/>
        <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form