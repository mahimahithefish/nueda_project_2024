import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import UserList from './UserList';
import AddUser from './AddUser';
import User from './User'; // New component for user details
import UpdateUser from './UpdateUser';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Customer Management</h1>
                <Routes>
                    <Route path="/" element={<AddUser />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/users/:id" element={<User />} /> {/* Route for user details */}
                    <Route path="/users/update/:id" element={<UpdateUser />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

