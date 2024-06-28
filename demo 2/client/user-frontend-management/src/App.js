// import React from 'react';
// import './App.css';
// import UserList from './UserList';
// import AddUser from './AddUser';

// function App() {
//   return (
//     <div className="App">
//       <h1>Customer Management </h1>
//       <AddUser />
//       <UserList />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import UserList from './UserList';
import AddUser from './AddUser';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Customer Management System</h1>
                <Routes>
                    <Route path="/" element={<AddUser />} />
                    <Route path="/users" element={<UserList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
