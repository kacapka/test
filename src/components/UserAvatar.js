import React from 'react';

const UserAvatar = ({ src, fullName }) => {
    return (
        <div className="user-name user-item">
            <div className="user-name__avatar" style={{ backgroundImage: `url(${src})` }} />
            <p>{fullName}</p>
        </div>

    );
};

export default UserAvatar;