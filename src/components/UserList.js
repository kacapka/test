import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getSortedUsers } from '../App.selectors';
import User from './User';
import UserListHeader from './UserListHeader';
import CompanyModal from './CompanyModal';

const UserList = () => {
    const users = useSelector(getSortedUsers);

    const renderUsers = () => {
        return users.map(user => {
            return (
                <User key={user.id} user={user} />
            )
        });
    }

    return (
        <div className="user-list">
            <UserListHeader />
            <CompanyModal>
                {renderUsers()}
            </CompanyModal>
        </div>
    );
};

export default UserList;