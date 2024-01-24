import React from 'react';
import { Doughnut } from 'react-chartjs-2';





const ChartComponent: React.FC<{ data: string; labels: string; }> = ({  labels , data}) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        
        backgroundColor: ['#5e4300', '#8d690d', '#ecbf46', '#ffc879', '#ffddb6'],
        hoverBackgroundColor: ['#5e4300', '#8d690d', '#ecbf46', '#ffc879', '#ffddb6'],
        data: data,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: 'bottom', // Set legend position to bottom
        labels: {
            usePointStyle: true, // Use point style for legend items
          },
      },
    },
  };

  return (
    <div className='w-2/4 '>
      <Doughnut data={chartData} options ={chartOptions}/>
    </div>
  );
};

export default ChartComponent;
