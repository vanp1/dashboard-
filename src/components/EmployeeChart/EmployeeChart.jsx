import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import './EmployeeChart.scss';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const EmployeeChart = ({ data }) => {
    const chartData = useMemo(() => {
        if (!data) return null;

        // Group data by department
        const departmentData = data.reduce((acc, curr) => {
            if (!acc[curr.Department]) {
                acc[curr.Department] = {
                    current: curr.total_earnings_current,
                    previous: curr.total_earnings_previous
                };
            } else {
                acc[curr.Department].current += curr.total_earnings_current;
                acc[curr.Department].previous += curr.total_earnings_previous;
            }
            return acc;
        }, {});

        const departments = Object.keys(departmentData);

        return {
            labels: departments,
            datasets: [
                {
                    label: 'Current Year Earnings',
                    data: departments.map(dept => departmentData[dept].current),
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.5)',
                    tension: 0.4
                },
                {
                    label: 'Previous Year Earnings',
                    data: departments.map(dept => departmentData[dept].previous),
                    borderColor: '#f44336',
                    backgroundColor: 'rgba(244, 67, 54, 0.5)',
                    tension: 0.4
                }
            ]
        };
    }, [data]);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                },
                ticks: {
                    callback: (value) => `$${value.toLocaleString()}`
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    };

    if (!chartData) {
        return <div>Loading chart data...</div>;
    }

    return (
        <div className="chart-container">
            <Line options={options} data={chartData} />
        </div>
    );
};

export default EmployeeChart; 