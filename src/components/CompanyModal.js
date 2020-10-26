import React, { useState, Fragment } from 'react';
import Modal from './shared/Modal';

export const CompanyModalContext = React.createContext({
    open: false,
    showModal: () => { },
    closeModal: () => { }
});

const CompanyModal = ({ children }) => {
    const [data, setData] = useState(null);
    const [open, setOpen] = useState(false);

    const showModal = (data) => {
        setData(data);
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

    return (
        <CompanyModalContext.Provider value={{ showModal }}>
            <Modal open={open} closeModal={closeModal}>
                {data && (
                    <div className="company">
                        <h2>{data.name}</h2>
                        <div className="company-content">
                            <div className="company-column">
                                <div className="company-column__title">
                                    Company Info
                                </div>
                                <div className="company-column__content company-info">
                                    <div className="company-info__item">
                                        <div className="company-info__item__label">Name:</div>
                                        <div className="company-info__item__value">{data.name}</div>
                                    </div>
                                    <div className="company-info__item">
                                        <div className="company-info__item__label">Address:</div>
                                        <div className="company-info__item__value">{data.address}</div>
                                    </div>
                                    <div className="company-info__item">
                                        <div className="company-info__item__label">City:</div>
                                        <div className="company-info__item__value">{data.city}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="company-column">
                                <div className="company-column__title">
                                    Suppliers
                                </div>
                                <div className="company-column__content company-suppliers">
                                    {data.suppliers.map(supplier => (
                                        <div className="company-suppliers__item" key={supplier.id}>
                                            {supplier.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </Modal>
            {children}
        </CompanyModalContext.Provider>
    );
};

export default CompanyModal;