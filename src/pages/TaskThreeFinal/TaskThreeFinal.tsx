import styles from './TaskThreeFinal.module.scss';
import React, { useState } from "react";
import data from '../../data/data.json';
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import CustomIcon from './CustomIcon';

interface Car {
    Model: string;
    Hersteller: string;
    Verbrauch: number;
    Zylinder: number;
    Hubraum: number;
    PS: number;
    Gewicht: number;
    Beschleunigung: number;
    Baujahr: number;
    Herkunft: string;
}

const CarPlot: React.FC = () => {
    const [selectedXAxis, setSelectedXAxis] = useState<string>('Hubraum');
    const [selectedYAxis, setSelectedYAxis] = useState<string>('PS');
    const [selectedCars, setSelectedCars] = useState<string[]>(data.map((car, index) => `${car.Model}-${index}`));
    const [selectedManufacturer, setSelectedManufacturer] = useState<string>('All');
    const [selectedOrigin, setSelectedOrigin] = useState<string>('All');

    const uniqueManufacturers = Array.from(new Set(data.map(car => car.Hersteller)));
    const uniqueOrigins = Array.from(new Set(data.map(car => car.Herkunft)));

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

    const handleManufacturerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedManufacturer(e.target.value);
    };

    const handleOriginChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOrigin(e.target.value);
    };

    const filteredData = data
        .filter(car => selectedCars.includes(`${car.Model}-${data.indexOf(car)}`))
        .filter(car => selectedManufacturer === 'All' || car.Hersteller === selectedManufacturer)
        .filter(car => selectedOrigin === 'All' || car.Herkunft === selectedOrigin)
        // @ts-ignore

        .filter(car => car[selectedXAxis] !== 'NA' && car[selectedYAxis] !== 'NA');

    // Funktion zur Bestimmung des Bereichs der Y-Achse
    const getYAxisDomain = () => {
        // @ts-ignore

        const values = filteredData.map(car => car[selectedYAxis]);
        const min = Math.min(...values);
        const max = Math.max(...values);
        return [min, max];
    };

    // Funktion zur Bestimmung des Bereichs der X-Achse
    const getXAxisDomain = () => {

        // @ts-ignore
        const values = filteredData.map(car => car[selectedXAxis]);
        const min = Math.min(...values);
        const max = Math.max(...values);
        return [min, max];
    };

    // Event-Handler für Klick auf Scatter-Punkte
    const handleScatterClick = (data: any) => {
        console.log(data.payload);
    };

    function compare( a: Car, b: Car ) {
        if ( a.Hersteller < b.Hersteller ){
            return -1;
        }
        if ( a.Hersteller > b.Hersteller ){
            return 1;
        }
        return 0;
    }

    // @ts-ignore
    data.sort( compare );

    return (
        <div className={styles.TaskThreeFinal}>
            <div className={styles.TaskThreeFinalContainer}>
                <div className={styles.TaskThreeFinalCars}>
                    <h2>Carss</h2>
                    <div className={styles.TaskThreeFinalCarsList}>
                        {data.map((car, index) => (
                            <label key={`${car.Model}-${index}`}>
                                {`${car.Hersteller} - ${car.Model}`}
                                <input
                                    type="checkbox"
                                    value={`${car.Model}-${index}`}
                                    checked={selectedCars.includes(`${car.Model}-${index}`)}
                                    onChange={handleCarChange}
                                />
                            </label>
                        ))}
                    </div>
                </div>
                <div className={styles.TaskThreeFinalChart}>
                   <ResponsiveContainer>
                       <ScatterChart width={window.innerWidth*0.8} height={500} margin={{ top: 15, right: 15, bottom: 15, left: 15 }}>
                           <CartesianGrid vertical={false} />
                           <XAxis type="number" dataKey={selectedXAxis} domain={getXAxisDomain()} name={selectedXAxis} />
                           <YAxis type="number" dataKey={selectedYAxis} domain={getYAxisDomain()} name={selectedYAxis} />
                           <Tooltip />
                           <Legend />
                           <Scatter
                               name={`${selectedXAxis} vs ${selectedYAxis}`}
                               data={filteredData}
                               // @ts-ignore
                               shape={(props) => <CustomIcon {...props} />}
                               isAnimationActive={false}
                               onClick={handleScatterClick}
                           />
                       </ScatterChart>
                   </ResponsiveContainer>
                    <div className={styles.TaskThreeFinalChartSettings}>
                        <div>
                            <h3>X-Axis Property</h3>
                            <select value={selectedXAxis} onChange={handleXAxisChange}>
                                {['Verbrauch', 'Zylinder', 'Hubraum', 'PS', 'Gewicht', 'Beschleunigung', 'Baujahr'].map(prop => (
                                    <option key={prop} value={prop} disabled={prop === selectedYAxis}>
                                        {prop}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <h3>Y-Axis Property</h3>
                            <select value={selectedYAxis} onChange={handleYAxisChange}>
                                {['Verbrauch', 'Zylinder', 'Hubraum', 'PS', 'Gewicht', 'Beschleunigung', 'Baujahr'].map(prop => (
                                    <option key={prop} value={prop} disabled={prop === selectedXAxis}>
                                        {prop}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <h3>Manufacturer</h3>
                            <select value={selectedManufacturer} onChange={handleManufacturerChange}>
                                <option value="All">All</option>
                                {uniqueManufacturers.map(manufacturer => (
                                    <option key={manufacturer} value={manufacturer}>
                                        {manufacturer}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <h3>Origin</h3>
                            <select value={selectedOrigin} onChange={handleOriginChange}>
                                <option value="All">All</option>
                                {uniqueOrigins.map(origin => (
                                    <option key={origin} value={origin}>
                                        {origin}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default CarPlot;
