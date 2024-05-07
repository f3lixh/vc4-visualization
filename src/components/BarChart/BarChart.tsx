import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

interface BarChartProps {
    label1: string;
    value1: number;
    label2: string;
    value2: number;
}

const BarChart: React.FC<BarChartProps> = ({ label1, value1, label2, value2 }) => {
    const data = {
        labels: [label1, label2],
        datasets: [
            {
                label: 'Werte',
                data: [value1, value2],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderColor: [
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)'
                ],
                borderWidth: 2
            }
        ]
    };

    const options = {

        plugins: {
            legend: {
                display: false // Legende nicht anzeigen
            },
            tooltip: {
                enabled: false // Tooltips nicht anzeigen
            }
        },
        scales: {
            y: {
                display: false,
                beginAtZero: true,
                grid: {
                    display: false // Deaktiviert das Gitter auf der Y-Achse
                },
                ticks: {
                    display: false // Y-Achsen-Werte nicht anzeigen
                }
            },
            x: {

                grid: {
                    display: false // Deaktiviert das Gitter auf der X-Achse
                },
                ticks: {
                    display: true // X-Achsen-Namen anzeigen
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 0
        }
    };

    return <div style={{height: "500px"}}>
        <Bar data={data} options={options} />
    </div>;
};

export default BarChart;
