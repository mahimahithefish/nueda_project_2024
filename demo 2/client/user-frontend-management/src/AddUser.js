import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { username, password, email };
        try {
            const response = await axios.post('/api/users', newUser);
            console.log('User added: ', response.data);
            setUsername('');
            setPassword('');
            setEmail('');
        } catch (error) {
            console.error('Error adding user: ', error);
        }
    };

    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;
