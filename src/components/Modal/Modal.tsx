import React, { useState } from 'react';
import './Modal.css'

type Props = {
    onClose: () => void;
    errorMessage: any,
}

const Modal: React.FC<Props> = ({ onClose, errorMessage }) => {

    const [errorState, setErrorState] = useState<boolean>(true);

    const handleClose = () => {
        setErrorState(!errorState);
        onClose();
    }

    return (
        <div className='modal-error-container'>
            {errorState && (
                <div className='modal-inner-container'>
                    <div className='modal-error-box'>
                        <div>
                            <p className='modal-error-heading'>Error Occured</p>
                        </div>
                        <div className='modal-error-text'>
                            {errorMessage}
                        </div><button onClick={handleClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal