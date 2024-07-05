import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // Assuming you create a separate CSS file for styling
import { useNavigate } from 'react-router-dom';

const UserList = () => {
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(0);
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
    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/accounts/${id}`);
            console.log('User deleted with id: ', id);
            //users = users;
            fetchUsers();
            // Optionally, you can perform actions after successful deletion, like updating state or refreshing user list.
        } catch (error) {
            console.error('Error deleting user: ', error);
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
                                <button className="edit-button" onClick={() => navigate(`/users/update/${user.id}`)}>Edit</button>
                                <button className="delete-button" onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
