import React, { useRef } from 'react';
import useOnClickOutside from '../hooks/useOnClickOutside';

const Modal = ({ children, closeModal, open }) => {
    const ref = useRef();
    useOnClickOutside(ref, closeModal);

    return open && (
        <div className="modal">
            <div className="modal-inner" ref={ref}>
                <div className="modal-close" onClick={closeModal}>✖</div>
                {children}
            </div>
        </div>
    );
};

export default Modal;