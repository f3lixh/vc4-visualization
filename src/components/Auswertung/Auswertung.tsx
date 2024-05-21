import React, {useState} from 'react';
import styles from './DataTable.module.scss';
import hue from "../../img/a2/hue.png";
import opacity from "../../img/a2/opacity.png";
import line from "../../img/a2/line.png";
import size from "../../img/a2/size.png";
import blur from "../../img/a2/blur.png";
import shear from "../../img/a2/shear.png";
import shape from "../../img/a2/shape.png";
import shape_2 from "../../img/a2/shape_complex.png";
import shader from "../../img/a2/shader.png";
import reddot from "../../img/a2/reddot.png";
import colorshader from "../../img/a2/colorshader.png";
import linelength from "../../img/a2/linelength.png";
import winkel from "../../img/a2/winkel.png";
import triangle from "../../img/a2/triangle.png";
import opacitycolor from "../../img/a2/opacitycolor.png";
import classNames from "classnames";

interface TableRow {
    H: string;
    J: number;
    L: number;
}



const data: TableRow[] = [
    {H: "Grüner Punkt", J: 0.817, L: 0.819},
    {H: "Transparenter Punkt", J: 0.971, L: 1.009},
    {H: "Dicke Linie", J: 0.56, L: 1.033},
    {H: "Größter Punkt", J: 1.596, L: 0.799},
    {H: "Verschwommener Stern", J: 0.776, L: 1.164},
    {H: "Schräger Stern", J: 0.952, L: 11.703},
    {H: "Quadrat unter Punkten", J: 0.421, L: 0.575},
    {H: "Buchstabe P unter R", J: 2.692, L: 0.779},
    {H: "Punkt mit anderer Schattierung", J: 1.125, L: 3.635},
    {H: "Roter Punkt im Cluster", J: 0.299, L: 0.362},
    {H: "Punkt mit anderer Schattierung", J: 1.575, L: 2.704},
    {H: "Längste Linie", J: 1.895, L: 3.199},
    {H: "Zerbrochener Winkel", J: 3.45, L: 21.449},
    {H: "Gelbes Dreieck", J: 1.219, L: 1.092},
    {H: "Rotes Quadrat mit Deckkraft", J: 2.587, L: 2.097},
];

const DataTable: React.FC = () => {

    const [imgIndex, setImgIndex] = useState<number>(0);
    const imgs = [hue, opacity, line, size, blur, shear, shape, shape_2, shader, reddot, colorshader, linelength, winkel, triangle, opacitycolor];
    const task = [
        'Finde den grünen Punkt im folgenden Cluster.',
        'Finde den Punkt welcher durchsichtig ist.',
        'Finde die Linie welche dicker ist als die anderen.',
        'Finde den Punkt welcher am größten ist.',
        'Finde den Stern welcher verschwommen ist.',
        'Finde den Stern welcher sich schräg verzerrt ist.',
        'Finde das Quadrat unter den Punkten.',
        'Finde den Buchstaben "P" unter den "R"s.',
        'Finde den Punkt dessen Schattierung anderes ist.',
        'Finde den roten Punkt im Cluster.',
        'Finde den Punkt dessen Schattierung anderes ist.',
        'Finde die Linie, welche am längsten ist.',
        'Finde den zerbrochenen Winkel.',
        'Finde das gelbe Dreieck.',
        'Finde das rote Quadrat welches am kräftigsten erscheint.',
    ];

    const handleRowClick = (index: number) => {
        setImgIndex(index);
    }

    return (
        <div className={styles.DataTable}>

            <table>
                <thead>
                <tr>
                    <th>Gesuchtes Objekt</th>
                    <th>J</th>
                    <th>L</th>
                    <th>AVG</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => (
                    <tr key={index} onClick={() => handleRowClick(index)} className={classNames(index === imgIndex && styles.activeRow)}>
                        <td>{row.H}</td>
                        <td>{row.J}</td>
                        <td>{row.L}</td>
                        <td>{parseFloat(String((row.J + row.L) / 2)).toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className={styles.DataTableImg} >
                <h2>Bild {imgIndex + 1}</h2>
                <img src={imgs[imgIndex]} alt={imgs[imgIndex]}/>
                <p>{task[imgIndex]}</p>
            </div>
        </div>
    );
};

export default DataTable;
