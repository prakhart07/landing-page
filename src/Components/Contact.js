import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Assests/CSS/Main.css"; // Make sure path is correct

function Contact() {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const [emailError, setEmailError] = useState('');
    const [phone, setphone] = useState('')

    const navigate = useNavigate(); // If you want to navigate after submit (not required)

    // Handle input change
    function handleChange(e) {
        const { name, value } = e.target;
        setData(prev => ({
            prev,
            [name]: value
        }));
        console.log(`Field changed: ${name} = ${value}`);
    }

    // Handle form submit
    function handleSubmit(e) {
        e.preventDefault(); // Prevents page reload
        if (emailError) {
            alert('please enter a vaild email')
            return;
        }
        if (phone < 10) {
            alert("enter valid number");
            return;
        }
        // You can add localStorage, API calls, etc. here
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
                {emailError && <p style={{ color: 'red', fontSize: '0.85rem' }}>{emailError}</p>}

                <label>Phone No.</label>
                <input
                    type="number"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    required
                />
                {phone && <p style={{ color: 'red', fontSize: '0.85rem' }}>{phone}</p>}

                <label>Message</label>
                <input
                    type="text"
                    name="Message"
                    value={data.Message}
                    onChange={handleChange}
                />

                <button className="btn-sub" type="submit">Submit</button>
            </form>
        </div>
    );
}
//hello

export default Contact;
