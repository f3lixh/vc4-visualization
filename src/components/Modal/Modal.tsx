// src/components/Modal.tsx
import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <button onClick={onClose} style={styles.closeButton}>Close</button>
                <div>{data.Hersteller}</div>
            </div>
        </div>,
        document.body
    );
};

const styles = {
    overlay: {
        position: 'fixed' as 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        position: 'relative' as 'relative',
    },
    closeButton: {
        position: 'absolute' as 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
    }
};

export default Modal;
