import React, { useState } from "react";
import { submitContactForm } from "./Serverapi";
import "../Assests/CSS/Main.css";

function Contact() {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    function handleChange(e) {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatusMessage('');

        
        if (!data.email.includes('@') || !data.email.includes('.')) {
            setStatusMessage('Please enter a valid email address.');
            return;
        }

        if (data.phone.length !== 10) {
            setStatusMessage('Please enter a valid 10-digit phone number.');
            return;
        }

        setLoading(true);

        try {
            await submitContactForm(data);
            setStatusMessage('Thank you! Your message has been sent successfully.');
            setData({ name: '', email: '', phone: '', message: '' }); // Form reset
        } catch (error) {
            setStatusMessage('Failed to send message. Please try again.');
        }

        setLoading(false);
    }

    return (
        <div className="Container">
            <h2>Contact Us</h2>
            
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    required
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required
                />

                <label>Phone No.</label>
                <input
                    type="number"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    required
                />
                
                <label>Message</label>
                <input
                    type="text"
                    name="message" // 'Message' से 'message' में बदला गया
                    value={data.message}
                    onChange={handleChange}
                />

                <button className="btn-sub" type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
            
            {statusMessage && (
                <p style={{ 
                    color: statusMessage.includes('Successfully') ? 'green' : 'red', 
                    marginTop: '1rem',
                    textAlign: 'center' 
                }}>
                    {statusMessage}
                </p>
            )}
            
        </div>
    );
}

export default Contact;
