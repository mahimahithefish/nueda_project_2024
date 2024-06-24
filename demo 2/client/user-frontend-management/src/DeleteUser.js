import React from 'react';
import axios from 'axios';

const DeleteUser = ({ id }) => {
    const handleDelete = async () => {
        try {
            await axios.delete(`/api/users/${id}`);
            console.log('User deleted with id: ', id);
            // Optionally, you can perform actions after successful deletion, like updating state or refreshing user list.
        } catch (error) {
            console.error('Error deleting user: ', error);
        }
    };

    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default DeleteUser;
