import React from 'react';

const UserJobTitle = ({ jobTitle }) => {
    return (
        <div className="user-item user-job-title">
            <div className="user-job-title__label">
                {jobTitle}
            </div>
        </div>
    );
};

export default UserJobTitle;