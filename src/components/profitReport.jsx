// components/ProfitReport.jsx
import React, { useEffect, useState } from 'react';
import { Typography, Tag } from 'antd';
import Chart from 'react-apexcharts';
import axios from 'axios';

const { Title, Text } = Typography;

const ProfitReport = () => {

  // const series = [
  //   {
  //     name: 'Profit',
  //     data: [10, 40, 20, 35, 30, 60]
  //   }
  // ];
  const [series, setSeries] = useState([])
  useEffect(() => {
    const getProfitReport = async ()=> {
      const res = await axios.get('http://127.0.0.1/getProfitReport')
      const series = res.data.map(item => {
        return {
          name: item.name,
          data: item.data
        }
      })
      console.log(series);
      setSeries(series)
    }
    getProfitReport()
  }, [])

  const options = {
    chart: {
      type: 'line',
      sparkline: { enabled: true }
    },
    stroke: {
      curve: 'smooth',
      width: 4
    },
    colors: ['#f59e0b'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        gradientToColors: ['#fde68a'],
        stops: [0, 100]
      }
    },
    tooltip: { enabled: false }
  };



  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', height: '100%', textAlign: 'left' }}>
      <div>
        <Text style={{ color: '#6B7280', fontSize: 20 }}>Profit Report</Text>
        <div style={{ margin: '10px 0' }}>
          <Tag color="gold" style={{ fontWeight: 500 }}>YEAR 2025</Tag>
        </div>
        <Text style={{ color: '#10B981', fontWeight: 600 }}>▲ 68.2%</Text>
        <Title level={3} style={{ margin: 0 }}>$84,686k</Title>
      </div>
      <div style={{ width: '65%', height: '100%' }}>
        <Chart options={options} series={series} type="line" height="100%" />
      </div>
    </div>
  );
};

export default ProfitReport;
