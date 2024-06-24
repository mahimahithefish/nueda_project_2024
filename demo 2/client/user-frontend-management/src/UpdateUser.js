import React, { useState } from 'react';
import axios from 'axios';

const UpdateUser = ({ user }) => {
    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState(user.password);
    const [email, setEmail] = useState(user.email);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedUser = { username, password, email };
        try {
            const response = await axios.put(`/api/users/${user.id}`, updatedUser);
            console.log('User updated: ', response.data);
        } catch (error) {
            console.error('Error updating user: ', error);
        }
    };

    return (
        <div>
            <h2>Edit User</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default UpdateUser;
