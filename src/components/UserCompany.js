import React, { useContext } from 'react';
import { CompanyModalContext } from './CompanyModal';

const UserCompany = ({ company }) => {
    const { showModal } = useContext(CompanyModalContext);
    const handleShowModal = () => {
        showModal(company);
    };

    return (
        <div className="user-company user-item" onClick={handleShowModal}>
            {company.name}
        </div>
    );
};

export default UserCompany;