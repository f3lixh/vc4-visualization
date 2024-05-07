import React from "react";
import PieChart from "../../components/PieChart/PieChart";
import BarChart from "../BarChart/BarChart";

const ChartOne = () => {
    return (
        <>
            <h1>Inflationsrate in Deutschland</h1>
            <br/>
            <br/>
            <BarChart label1="2023" value1={7.2} label2="2024" value2={2.2} />
        </>
    );
};

export default ChartOne;