import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterByName } from '../App.actions';

const UserListHeader = () => {
    const dispatch = useDispatch();
    const handleToggleFilterByName = () => {
        dispatch(setFilterByName());
    };
    return (
        <div className="user-list__header">
            <div className="user-item" onClick={handleToggleFilterByName}>name 🔺</div>
            <div className="user-item">job title</div>
            <div className="user-item">email</div>
            <div className="user-item">company</div>
        </div>
    );
};

export default UserListHeader;