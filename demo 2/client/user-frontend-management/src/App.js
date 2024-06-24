import React from 'react';
import './App.css';
import UserList from './UserList';
import AddUser from './AddUser';

function App() {
  return (
    <div className="App">
      <h1>User Management System</h1>
      <AddUser />
      <UserList />
    </div>
  );
}

export default App;
