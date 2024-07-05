import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './User.css';
import { useNavigate } from 'react-router-dom';

const UpdateUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const { id } = useParams();
    const [name, setName] = useState(null);
    const [dob, setDob] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [phoneNum, setPhoneNum] = useState(null);
    const [address, setAddress] = useState(null);
    useEffect(() => {
        const fetchUserDetails = async (id) => {
            try {
                console.log("Tried getting the user");
                const response = await axios.get(`http://localhost:8080/api/accounts/${id}`);
                return response.data;
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };
        fetchUserDetails(id).then(data => {
            setUser(data)
            setName(data.name)
            setDob(data.dob);
            setUsername(data.username);
            setPassword(data.password);
            setEmail(data.email);
            setPhoneNum(data.phoneNum);
            setAddress(data.address);
        });
    }, [id]);
    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedUser = { name, dob, username, password, email, phoneNum, address };
        try {
            const response = await axios.put(`http://localhost:8080/api/accounts/${id}`, updatedUser);
            console.log('User updated: ', response.data);
        } catch (error) {
            console.error('Error updating user: ', error);
        }
        navigate(`/users/${id}`);
    };

    return (
        <div className="user-details-container">
            <h2>Edit User</h2>
            {user ? (
                <div className="user-details">
                    <form onSubmit={handleUpdate}>
                        <input type="Name" placeholder={user.name} value={name} onChange={(e) => setName(e.target.value)} required />
                        <input type="DOB" placeholder={user.dob} value={dob} onChange={(e) => setDob(e.target.value)} required />
                        <input type="Username" placeholder={user.username} value={username} onChange={(e) => setUsername(e.target.value)} required />
                        <input type="Password" placeholder={user.password} value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <input type="Email" placeholder={user.email} value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input type="Phone Number" placeholder={user.phoneNum} value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} required />
                        <input type="Address" placeholder={user.address} value={address} onChange={(e) => setAddress(e.target.value)} required />
                        <button type="submit">Update User</button>
                    </form>
                </div>
            ) : (
                <p>Loading form...</p>
            )}
        </div>
       
    );
};

export default UpdateUser;
