import React from "react";
import PieChart from "../../components/PieChart/PieChart";
import BarChart from "../BarChart/BarChart";

const ChartOne = () => {
    return (
        <>
            <h1>Anteil von Frauen in technischen Berufen (Deutschland)</h1>
            <br/>
            <br/>
            <BarChart label1="Frauen" value1={22} label2="Männer" value2={78} />
        </>
    );
};

export default ChartOne;