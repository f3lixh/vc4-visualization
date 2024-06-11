// src/components/Modal.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./Modal.module.scss";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className={styles.Overlay}>
            <div className={styles.Modal}>
                <h1>{data.Hersteller} - {data.Model}</h1>
                <div> <table>
                    <tbody>
                    <tr>
                        <td>Hersteller</td>
                        <td>{data.Hersteller}</td>
                    </tr>
                    <tr>
                        <td>Modell</td>
                        <td>{data.Model}</td>
                    </tr>
                    <tr>
                        <td>Verbrauch</td>
                        <td>{data.Verbrauch}</td>
                    </tr>
                    <tr>
                        <td>PS</td>
                        <td>{data.PS}</td>
                    </tr>
                    <tr>
                        <td>Herkunft</td>
                        <td>{data.Herkunft}</td>
                    </tr>
                    <tr>
                        <td>Zylinder</td>
                        <td>{data.Zylinder}</td>
                    </tr>
                    </tbody>
                </table></div>
                <button onClick={onClose} className={styles.Button}>Close</button>
            </div>
        </div>,
        document.body
    );
};



export default Modal;
