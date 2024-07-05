import React, { useState } from 'react';
import axios from 'axios';
import './AddUser.css';

const AddUser = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [address, setAddress] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { name, dob, phoneNum, address, username, password, email };
        try {
            const response = await axios.post('http://localhost:8080/api/accounts', newUser);
            console.log('User added: ', response.data);
            alert('Form submitted sucessfully!');
            setName('');
            setDob('');
            setPhoneNum('');
            setAddress('');
            setUsername('');
            setPassword('');
            setEmail('');
        } catch (error) {
            console.error('Error adding user: ', error);
            alert('Error adding user');
        }
    };

    return (
        <div className="add-user-container">
            <h2>Add User</h2>
            <form onSubmit={handleSubmit} className="add-user-form">
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <input 
                    type="date" 
                    placeholder="Date of Birth" 
                    value={dob} 
                    onChange={(e) => setDob(e.target.value)} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Phone Number" 
                    value={phoneNum} 
                    onChange={(e) => setPhoneNum(e.target.value)} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Address" 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;
