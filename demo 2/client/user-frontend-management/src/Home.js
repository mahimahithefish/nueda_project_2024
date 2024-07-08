import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <div className="home-container">
                <div className="home-page">
                    <button className="button" onClick={() => navigate('/signup')}>Signup</button>
                </div>
                </div>
                )
};

export default Home;
