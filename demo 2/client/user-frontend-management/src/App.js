import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import UserList from './UserList';
import AddUser from './AddUser';
import User from './User'; 
import UpdateUser from './UpdateUser';
import Home from './Home';



function App() {
    return (
        <Router>
            <div className="App">
                <h1>Customer Management</h1>
                <Routes>
                    <Route path="/signup" element={<AddUser />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/users/:id" element={<User />} /> {}
                    <Route path="/users/update/:id" element={<UpdateUser />} />
                    {/* <Redirect from="/" to="/home" /> */}
                    <Route path="/" element={<Navigate to= "/home" replace/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

