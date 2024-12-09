// components/BarChart.jsx
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
  const chartData = {
    series: [
      {
        name: 'Task Completion',
        data: [70, 50, 30], // Example data
      },
    ],
    options: {
      chart: {
        type: 'line',
        height: 350,
      },
       //plotOptions: {bar: {horizontal: true,borderRadius: 5,barHeight: '70%',},
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Mobile App', 'UX Wireframes', 'Research'], // Task names
      },
      title: {
        text: 'Tasks for Today',
        align: 'left',
        style: {
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#000000',
        },
      },
      stroke: {
        curve: 'smooth', // Optional: smooth line appearance
        width: 2,
      },
    },
  };

  return (
    <div className="flex">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={300}
      />
    </div>
  );
};

export default BarChart;
