import React, { useEffect, useState } from 'react';
import { Tabs, Typography } from 'antd';
import Chart from 'react-apexcharts';
import { WalletOutlined, RiseOutlined, FallOutlined } from '@ant-design/icons';
import axios from 'axios';

const { TabPane } = Tabs;
const { Title, Text } = Typography;

const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

// const getData = async ()=>{
//   const res = await axios.get('http://127.0.0.1/getFinancial')
//   console.log(res.data);
//   return res.data
// }
// getData()

// const dataMap = {
//   income: {
//     title: 'Income',
//     total: '$459.1k',
//     percent: 42.9,
//     weeklyValue: '6.5k',
//     weeklyDesc: '$39k less than last week',
//     icon: <WalletOutlined style={{ fontSize: 24, color: '#6366F1' }} />,
//     series: [30, 40, 35, 80, 45, 60, 50],
//   },
//   expenses: {
//     title: 'Expenses',
//     total: '$316.5k',
//     percent: -27.8,
//     weeklyValue: '7.2k',
//     weeklyDesc: '$16k less than last week',
//     icon: <FallOutlined style={{ fontSize: 24, color: '#EF4444' }} />,
//     series: [20, 40, 25, 28, 35, 50, 90],
//   },
//   profit: {
//     title: 'Profit',
//     total: '$147.9k',
//     percent: 35.1,
//     weeklyValue: '4.2k',
//     weeklyDesc: '$28k less than last week',
//     icon: <RiseOutlined style={{ fontSize: 24, color: '#10B981' }} />,
//     series: [23, 37, 15, 77, 20, 55, 60],
//   },
// };

export default function Financial() {
  const [activeKey, setActiveKey] = useState('income');
  const [dataMap, setDataMap] = useState({income:{},expenses:{},profit:{}});
  useEffect(()=>{
    const getData = async ()=>{
      const res = await axios.get('http://127.0.0.1/getFinancial')
      console.log(res.data);
      const remoteData = res.data
      const newDataMap = {
        income: {
          title: 'Income',
          total: '$459.1k',
          percent: 42.9,
          weeklyValue: '6.5k',
          weeklyDesc: '$39k less than last week',
          icon: <WalletOutlined style={{ fontSize: 24, color: '#6366F1' }} />,
          series: [],
        },
        expenses: {
          title: 'Expenses',
          total: '$316.5k',
          percent: -27.8,
          weeklyValue: '7.2k',
          weeklyDesc: '$16k less than last week',
          icon: <FallOutlined style={{ fontSize: 24, color: '#EF4444' }} />,
          series: [],
        },
        profit: {
          title: 'Profit',
          total: '$147.9k',
          percent: 35.1,
          weeklyValue: '4.2k',
          weeklyDesc: '$28k less than last week',
          icon: <RiseOutlined style={{ fontSize: 24, color: '#10B981' }} />,
          series: [],
        },
      }
      remoteData.forEach(item=>{
        if (newDataMap[item.name.toLowerCase()]){
          newDataMap[item.name.toLowerCase()].series = item.data
        }
      })
      setDataMap(newDataMap)
    }
    getData()
  },[])
  const {
    title,
    total,
    percent,
    weeklyValue,
    weeklyDesc,
    icon,
    series,
  } = dataMap[activeKey];

  const areaOptions = {
    chart: {
      type: 'area',
      sparkline: { enabled: false },
      toolbar: { show: false },
    },
    stroke: { curve: 'smooth', width: 3 },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "vertical",
        shadeIntensity: 0.5,
        opacityFrom: 0.4,
        opacityTo: 0.05,
        stops: [0, 100],
      },
    },
    colors: ['#6366F1'],
    tooltip: { enabled: false },
    xaxis: {
      categories,
      labels: { show: true, style: { colors: '#ccc' } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: { show: false },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: { left: -10, right: 0 },
    },
  };

  const radialOptions = {
    chart: {
      type: 'radialBar',
      sparkline: { enabled: true },
    },
    plotOptions: {
      radialBar: {
        hollow: { size: '70%' },
        track: { background: '#e0e7ff' },
        dataLabels: {
          name: { show: false },
          value: {
            show: true,
            fontSize: '14px',
            fontWeight: 600,
            formatter: () => weeklyValue,
          },
        },
      },
    },
    colors: ['#6366F1'],
  };

  return (
    <div style={{ width: '100%', height: '100%', }}>
      <Tabs activeKey={activeKey} onChange={setActiveKey}>
        <TabPane tab="INCOME" key="income" />
        <TabPane tab="EXPENSES" key="expenses" />
        <TabPane tab="PROFIT" key="profit" />
      </Tabs>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
        <div style={{
          background: '#EEF2FF',
          borderRadius: 8,
          padding: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 12,
        }}>
          {icon}
        </div>
        <div>
          <Text type="secondary">Total {title}</Text>
          <Title level={3} style={{ margin: 0 }}>{total}</Title>
          <Text style={{ color: percent >= 0 ? '#22C55E' : '#EF4444' }}>
            {percent >= 0 ? '↑' : '↓'} {Math.abs(percent)}%
          </Text>
        </div>
      </div>

      <Chart
        options={areaOptions}
        series={[{ name: title, data: series }]}
        type="area"
        height={220}
        width="100%"
      />

      <div style={{ display: 'flex', alignItems: 'center',justifyContent:'center' }}>
        <Chart
          options={radialOptions}
          series={[75]}
          type="radialBar"
          height={70}
          width={70}
        />
        <div style={{ marginLeft: 12 }}>
          <Text type="secondary">{title} this week</Text>
          <div><Text>{weeklyDesc}</Text></div>
        </div>
      </div>
    </div>
  );
}
