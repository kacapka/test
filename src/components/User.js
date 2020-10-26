import React from 'react';
import UserAvatar from './UserAvatar';
import UserJobTitle from './UserJobTitle';
import UserEmail from './UserEmail';
import UserCompany from './UserCompany';

const User = ({ user: { avatar, firstName, lastName, jobTitle, email, company } }) => {
    return (
        <div className="user">
            <UserAvatar src={avatar} fullName={`${firstName} ${lastName}`} />
            <UserJobTitle jobTitle={jobTitle} />
            <UserEmail email={email} />
            <UserCompany company={company} />
        </div>
    );
};

export default User;