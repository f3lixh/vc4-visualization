// src/components/Modal.tsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from "./Modal.module.scss";
import classNames from "classnames";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
    const [isMetric, setIsMetric] = useState(false);

    if (!isOpen) return null;

    const convertToMetric = (data: any) => {
        return {
            ...data,
            Verbrauch: (235.214583 / data.Verbrauch).toFixed(2), // MPG to L/100km
            Hubraum: (data.Hubraum * 16.3871).toFixed(2), // cubic inches to cubic cm
            Beschleunigung: (data.Beschleunigung * 1.60934).toFixed(2), // mph to km/h
            Gewicht: (data.Gewicht / 2.205).toFixed(2) // lbs to kg
        };
    };

    const metricData = isMetric ? convertToMetric(data) : data;

    return ReactDOM.createPortal(
        <div className={styles.Overlay}>
            <div className={styles.Modal}>
                <h1>{metricData.Hersteller} - {metricData.Model}</h1>
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td>Hersteller</td>
                            <td>{metricData.Hersteller}</td>
                        </tr>
                        <tr>
                            <td>Modell</td>
                            <td>{metricData.Model}</td>
                        </tr>
                        <tr>
                            <td>Verbrauch</td>
                            <td>{metricData.Verbrauch} <span>{isMetric ? 'L/100km' : 'MPG'}</span></td>
                        </tr>
                        <tr>
                            <td>Hubraum</td>
                            <td>{metricData.Hubraum} <span>{isMetric ? 'cm³' : 'in³'}</span></td>
                        </tr>
                        <tr>
                            <td>PS</td>
                            <td>{metricData.PS}</td>
                        </tr>
                        <tr>
                            <td>Herkunft</td>
                            <td>{metricData.Herkunft}</td>
                        </tr>
                        <tr>
                            <td>Beschleunigung</td>
                            <td>{metricData.Beschleunigung} <span>{isMetric ? 'km/h' : 'mph'}</span></td>
                        </tr>
                        <tr>
                            <td>Zylinder</td>
                            <td>{metricData.Zylinder}</td>
                        </tr>
                        <tr>
                            <td>Gewicht</td>
                            <td>{metricData.Gewicht} <span>{isMetric ? 'kg' : 'lbs'}</span></td>
                        </tr>
                        </tbody>
                    </table>
                    <div className={styles.Settings}>
                        <span>Metrisches System</span>
                        <label className={styles.switch}>
                            <input
                                type="checkbox"
                                checked={isMetric}
                                onChange={() => setIsMetric(!isMetric)}
                            />
                            <span className={classNames(styles.slider, styles.round)}></span>
                        </label>
                    </div>
                </div>
                <button onClick={onClose} className={styles.Button}>Close</button>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
