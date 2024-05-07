import React from "react";
import PieChart from "../../components/PieChart/PieChart";
import BarChart from "../BarChart/BarChart";

const ChartOne = () => {
    return (
        <>
            <h1>Entlassungen in der Videospielindustrie</h1>
            <br/>
            <br/>
            <BarChart label1="2023" value1={11250} label2="2024 (Jan - April)" value2={8800} />
        </>
    );
};

export default ChartOne;