import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { Typography } from 'antd';
import axios from 'axios';

const { Title, Text } = Typography;

const Revenue = () => {
  //data
  // const data = [30, 60, 50, 40, 90, 70, 80];
  const [data,setData] = useState([])
  useEffect(()=>{
    const getRevenue = async ()=>{
      const res = await axios.get('http://127.0.0.1/getRevenue')
      console.log(res.data[0].data);
      setData(res.data[0].data)
    }
    getRevenue()
  },[])

  const options = {
    chart: {
      toolbar: { show: false },
      sparkline: { enabled: false },
      offsetY: -30,
      dropShadow: { enabled: false },
    },
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        columnWidth: '60%'
      }
    },
    colors: [
      '#E0E7FF', // M
      '#E0E7FF', // T
      '#E0E7FF', // W
      '#E0E7FF', // T
      '#6366F1', // F
      '#E0E7FF', // S
      '#E0E7FF'  // S
    ],
    dataLabels: { enabled: false },
    grid: { show: false },
    xaxis: {
      show: false,
      categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        show: true,
        style: { colors: '#9CA3AF', fontSize: '10px' }
      }
    },
    yaxis: { show: false },
    tooltip: { enabled: false },
    legend: { show: false }, 
    states: {
      hover: { filter: { type: 'none' } }
    }
  };

  const series = [{
    name: 'Revenue',
    data
  }];

  return (
    <div style={{ textAlign: 'left', height: '100%', boxSizing: 'border-box',overflow: 'hidden' }}>
      <Text style={{ color: '#6B7280', fontSize: '12px' }}>Revenue</Text>
      <Title level={3} style={{ margin: '2px 0', fontSize: '20px', lineHeight: 1 }}>425k</Title>
      <Chart options={options} series={series} type="bar" height={140}  />
    </div>
  );
};

export default Revenue;
