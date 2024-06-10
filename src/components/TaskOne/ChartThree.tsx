import React from "react";
import BarChart from "../BarChart/BarChart";

const ChartOne = () => {
    return (
        <>
            <h1>Entlassungen in der Videospielindustrie der letzten Jahre</h1>
            <br/>
            <br/>
            <BarChart label1="2023" value1={11250} label2="2024 (Jan-April)" value2={8800} />
        </>
    );
};

export default ChartOne;