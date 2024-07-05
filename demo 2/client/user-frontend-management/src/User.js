import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './User.css';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchUserDetails();
    }, [id]);

    const fetchUserDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/accounts/${id}`);
            setUser(response.data);
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    return (
        <div className="user-details-container">
            <h2>Customer Account Details</h2>
            {user ? (
                <div className="user-details">
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Date of Birth:</strong> {user.dob}</p>
                    <p><strong>Phone Number:</strong> {user.phoneNum}</p>
                    <p><strong>Address:</strong> {user.address}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Username:</strong> {user.username}</p>
                    <button className="button" onClick={() => navigate('/users')}>User List</button>
                    <button className="button" onClick={() => navigate(`/users/update/${user.id}`)}>Edit</button>
                </div>
            ) : (
                <p>Loading user details...</p>
            )}
        </div>
    );
};

export default User;
