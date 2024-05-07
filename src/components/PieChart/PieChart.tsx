import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

interface PieChartProps {
    label1: string;
    value1: number;
    label2: string;
    value2: number;
}

const PieChart: React.FC<PieChartProps> = ({ label1, value1, label2, value2 }) => {
    const data = {
        labels: [label1, label2],
        datasets: [
            {
                data: [value1, value2],
                backgroundColor: ['#ff6384', '#36a2eb'],
                hoverBackgroundColor: ['#ff6384', '#36a2eb'],
                borderColor: '#ffffff',
                borderWidth: 1,
            }
        ]
    };

    const options = {
        plugins: {
            legend: {
                reverse: true,
                display: true,
                position: "bottom",
                labels: {
                    padding: 24,
                    color: "white",
                    font: {
                        size: 24
                    }
                }
            },
            tooltip: {
                enabled: false
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 0
        }
    };

    // @ts-ignore
    return <Pie data={data} options={options} />;
}

export default PieChart;
