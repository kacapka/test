import React from 'react';
import { useSelector } from 'react-redux';
import { getUsers } from '../App.selectors';
import User from './User';

const Header = () => {
    return (
        <div className="header">
            <h1>User List</h1>
        </div>
    );
};

export default Header;