import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


interface RevenueTransactionProps {
    horizontal?: boolean,
    data_1: number[],
    data_2: number[],
    tittle_1: string,
    tittle_2: string,
    bgColor1: string,
    bgColor2: string,
    labels?: string[]
}
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const VerticalChart = ({ horizontal = false,
    data_1 = [],
    data_2 = [],
    tittle_1,
    tittle_2,
    bgColor1,
    bgColor2,
    labels = months }
    : RevenueTransactionProps) => {
    const options: ChartOptions<"bar"> = {
        responsive: true,
        indexAxis: horizontal ? "y" : "x",
        plugins: {
            legend: {
                display: true
            },
            title: {
                display: false,

            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                },
            },
            x: {
                grid: {
                    display: false
                },
            },
        }
    };



    const data: ChartData<"bar", number[], string> = {
        labels,
        datasets: [
            {
                label: tittle_1,
                data: data_1,
                backgroundColor: bgColor1,
                barThickness: "flex",
                barPercentage:1,
                categoryPercentage:0.4,
            },
            {
                label: tittle_2,
                data: data_2,
                backgroundColor: bgColor2,
                barThickness: "flex",
                barPercentage:1,
                categoryPercentage:0.4,

            },
        ],
    };

    return (
        <Bar options={options} data={data} />
    )
}

export default VerticalChart
