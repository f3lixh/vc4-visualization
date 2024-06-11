import styles from './TaskThreeFinal.module.scss';
import React, { useState } from "react";
import data from '../../data/data.json';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomIcon from './CustomIcon';
import Modal from "../../components/Modal/Modal";
import Car from "../../types/Car";

const CarPlot: React.FC = () => {
    const [selectedXAxis, setSelectedXAxis] = useState<string>('Hubraum');
    const [selectedYAxis, setSelectedYAxis] = useState<string>('PS');
    const [selectedCars, setSelectedCars] = useState<string[]>(data.map((car, index) => `${car.Model}-${index}`));
    const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>(data.map((car, index) => `${car.Hersteller}`));
    const [selectedOrigin, setSelectedOrigin] = useState<string>('All');
    const [iconMode, setIconMode] = useState<'origin' | 'colored'>('origin');

    const uniqueManufacturers = Array.from(new Set(data.map(car => car.Hersteller)));
    const uniqueOrigins = Array.from(new Set(data.map(car => car.Herkunft)));

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState<any>('');

    const handleOpenModal = (data: any) => {
        console.log(data)
        setModalData(data);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleXAxisChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedXAxis(e.target.value);
        if (e.target.value === selectedYAxis) {
            setSelectedYAxis('');
        }
    };

    const handleYAxisChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYAxis(e.target.value);
        if (e.target.value === selectedXAxis) {
            setSelectedXAxis('');
        }
    };

    const handleCarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSelectedCars(prev =>
            prev.includes(value) ? prev.filter(car => car !== value) : [...prev, value]
        );
    };

    const handleManufacturerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSelectedManufacturers(prev =>
            prev.includes(value) ? prev.filter(manufacturer => manufacturer !== value) : [...prev, value]
        );
    };

    const handleOriginChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOrigin(e.target.value);
    };

    const filteredData = data
        .filter(car => selectedCars.includes(`${car.Model}-${data.indexOf(car)}`))
        .filter(car => selectedManufacturers.length === 0 || selectedManufacturers.includes(car.Hersteller))
        .filter(car => selectedOrigin === 'All' || car.Herkunft === selectedOrigin)
        // @ts-ignore
        .filter(car => car[selectedXAxis] !== 'NA' && car[selectedYAxis] !== 'NA');

    const getYAxisDomain = () => {
        // @ts-ignore
        const values = filteredData.map(car => car[selectedYAxis]);
        const min = Math.min(...values);
        const max = Math.max(...values);
        return [min, max];
    };

    const getXAxisDomain = () => {
        // @ts-ignore
        const values = filteredData.map(car => car[selectedXAxis]);
        const min = Math.min(...values);
        const max = Math.max(...values);
        return [min, max];
    };

    const handleClearModels = () => {
        if(selectedCars.length === 0) {
            setSelectedCars(data.map((car, index) => `${car.Model}-${index}`))
        } else {
            setSelectedCars([]);
        }

    }

    const handleClearManufacturers = () => {
        if(selectedManufacturers.length === 0) {
            setSelectedManufacturers(data.map((car, index) => `${car.Hersteller}`))
        } else {
            setSelectedManufacturers([]);
        }

    }



    function compare(a: Car, b: Car) {
        if (a.Hersteller < b.Hersteller) {
            return -1;
        }
        if (a.Hersteller > b.Hersteller) {
            return 1;
        }
        return 0;
    }

    // @ts-ignore
    data.sort(compare);


    return (
        <div className={styles.TaskThreeFinal}>
            <div className={styles.TaskThreeFinalContainer}>
                <div className={styles.TaskThreeFinalSidebar}>
                 <div className={styles.TaskThreeFinalSidebarContainer}>
                     <h2>Modell</h2>
                     <div className={styles.TaskThreeFinalSidebarContainerList}>
                         {data.map((car, index) => (
                             <label key={`${car.Model}-${index}`}>
                                 {`${car.Hersteller} - ${car.Model}`}
                                 <input
                                     className={styles.TaskThreeFinalCheckbox}
                                     type="checkbox"
                                     value={`${car.Model}-${index}`}
                                     checked={selectedCars.includes(`${car.Model}-${index}`)}
                                     onChange={handleCarChange}
                                 />
                             </label>
                         ))}
                     </div>
                 </div>
                    <div className={styles.TaskThreeFinalSidebarContainer}>
                    <h2>Hersteller</h2>
                        <div className={styles.TaskThreeFinalSidebarContainerList}>
                            {uniqueManufacturers.map((manufacturer, index) => (
                                <label key={`${manufacturer}-${index}`}>
                                    {manufacturer}
                                    <input
                                        type="checkbox"
                                        value={manufacturer}
                                        checked={selectedManufacturers.includes(manufacturer)}
                                        onChange={handleManufacturerChange}
                                    />
                                </label>
                            ))}
                    </div>
                    </div>
                </div>

                <div className={styles.TaskThreeFinalChart}>
                    <ResponsiveContainer>
                        <ScatterChart width={window.innerWidth * 0.8} height={500} margin={{ top: 15, right: 15, bottom: 15, left: 15 }}>
                            <CartesianGrid vertical={false} />
                            <XAxis type="number" dataKey={selectedXAxis} domain={getXAxisDomain()} name={selectedXAxis} />
                            <YAxis type="number" dataKey={selectedYAxis} domain={getYAxisDomain()} name={selectedYAxis} />
                            <Tooltip />
                            <Legend />
                            <Scatter
                                name={`${selectedXAxis} vs ${selectedYAxis}`}
                                data={filteredData}
                                // @ts-ignore
                                shape={(props) => <CustomIcon {...props} iconMode={iconMode} x={selectedXAxis} y={selectedYAxis} />}
                                isAnimationActive={false}
                                onClick={(props) => handleOpenModal(props)}
                            />
                        </ScatterChart>
                    </ResponsiveContainer>
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal} data={modalData} />
                    <div className={styles.TaskThreeFinalChartSettings}>
                        <div>
                            <h3>X-Achse</h3>
                            <select value={selectedXAxis} onChange={handleXAxisChange}>
                                {['Verbrauch', 'Zylinder', 'Hubraum', 'PS', 'Gewicht', 'Beschleunigung', 'Baujahr'].map(prop => (
                                    <option key={prop} value={prop} disabled={prop === selectedYAxis}>
                                        {prop}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <h3>Y-Achse</h3>
                            <select value={selectedYAxis} onChange={handleYAxisChange}>
                                {['Verbrauch', 'Zylinder', 'Hubraum', 'PS', 'Gewicht', 'Beschleunigung', 'Baujahr'].map(prop => (
                                    <option key={prop} value={prop} disabled={prop === selectedXAxis}>
                                        {prop}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <h3>Herkunft</h3>
                            <select value={selectedOrigin} onChange={handleOriginChange}>
                                <option value="All">Alle</option>
                                {uniqueOrigins.map(origin => (
                                    <option key={origin} value={origin}>
                                        {origin}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <h3>Icon Mode</h3>
                            <select value={iconMode} onChange={(e) => setIconMode(e.target.value as 'origin' | 'colored')}>
                                <option value="origin">Herkunft Icon</option>
                                <option value="colored">Farbiges Icon</option>
                            </select>
                        </div>
                        <div>
                            <h3>Einstellungen</h3>
                            <button onClick={() => handleClearModels()}>{selectedCars.length === 0 ? "Modell einblenden" : "Modell ausblenden"}</button>
                            <button onClick={() => handleClearManufacturers()}>{selectedManufacturers.length === 0 ? "Hersteller einblenden" : "Hersteller ausblenden"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarPlot;
