import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // Assuming you create a separate CSS file for styling

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/accounts'); // Ensure the URL matches your backend endpoint
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users: ', error);
        }
    };

    return (
        <div className="user-list-container">
            <h2>Current Customer Accounts</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.address}</td>
                            <td>
                                <button className="edit-button">Edit</button>
                                <button className="delete-button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
