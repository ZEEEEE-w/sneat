import React, { useEffect, useState } from 'react';
import { Tabs, Table, Typography, Progress, Avatar } from 'antd';
import axios from 'axios';

const { TabPane } = Tabs;
const { Text } = Typography;

const columns = [
  {
    title: 'No.',
    dataIndex: 'index',
    key: 'index',
    width: 60,
    render: (_, __, i) => <Text>{i + 1}</Text>,
  },
  {
    title: 'Item',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => (
      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Avatar shape="circle" size="small" src={record.icon} />
        <Text>{text}</Text>
      </span>
    ),
  },
  {
    title: 'Visits',
    dataIndex: 'visits',
    key: 'visits',
    render: (v) => <Text strong>{v}</Text>,
  },
  {
    title: 'Data in Percentage',
    dataIndex: 'percent',
    key: 'percent',
    render: (val, record) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Progress
          percent={parseFloat(val)}
          showInfo={false}
          strokeColor={record.color}
          trailColor="#E5E7EB"
          strokeWidth={8}
          style={{ width: 150 }}
        />
        <Text>{val}%</Text>
      </div>
    ),
  },
];

const dataSources = {
  browser: [
    { name: 'Chrome', visits: '8.92k', percent: '84.91', icon: '/img/chrome.png', color: '#22c55e' },
    { name: 'Safari', visits: '1.29k', percent: '69.03', icon: '/img/safari.png', color: '#6366f1' },
    { name: 'Firefox', visits: '328', percent: '43.26', icon: '/img/firefox.png', color: '#0ea5e9' },
    { name: 'Edge', visits: '142', percent: '39.99', icon: '/img/edge.png', color: '#f59e0b' },
    { name: 'Opera', visits: '85', percent: '22.12', icon: '/img/opera.png', color: '#ef4444' },
    { name: 'Brave', visits: '36', percent: '21.06', icon: '/img/brave.png', color: '#0ea5e9' },
  ],
  os: [
    { name: 'Windows', visits: '475.26k', percent: '61.5', icon: '/img/windows.png', color: '#22c55e' },
    { name: 'Mac', visits: '89.12k', percent: '45.67', icon: '/img/mac.png', color: '#6366f1' },
    { name: 'Ubuntu', visits: '38.68k', percent: '45.12', icon: '/img/ubuntu.png', color: '#0ea5e9' },
    { name: 'Linux', visits: '30.27k', percent: '35.03', icon: '/img/linux.png', color: '#f59e0b' },
    { name: 'Chrome', visits: '8.34k', percent: '23.25', icon: '/img/chrome.png', color: '#ef4444' },
    { name: 'Cent', visits: '2.25k', percent: '2.76', icon: '/img/centos.png', color: '#0ea5e9' },
  ],
  country: [
    { name: 'USA', visits: '87.24k', percent: '98.12', icon: '/img/usa.png', color: '#22c55e' },
    { name: 'Brazil', visits: '42.69k', percent: '88.23', icon: '/img/brazil.png', color: '#6366f1' },
    { name: 'India', visits: '12.58k', percent: '53.82', icon: '/img/india.png', color: '#0ea5e9' },
    { name: 'Australia', visits: '4.13k', percent: '32.72', icon: '/img/australia.png', color: '#f59e0b' },
    { name: 'China', visits: '2.21k', percent: '27.11', icon: '/img/china.png', color: '#ef4444' },
    { name: 'France', visits: '1.56k', percent: '26.59', icon: '/img/france.png', color: '#0ea5e9' },
  ],
};

export default function DataAnalytics() {
  const [activeKey, setActiveKey] = useState('browser');
  const [dataSources, setDataSources] = useState({ browser: [], os: [], country: [] })
  useEffect(() => {
    const getVisits = async () => {
      const res = await axios.get('http://127.0.0.1/getVisits');
      const remoteDataSources = {
        browser: [],
        os: [],
        country: [],
      };

      const iconMap = {
        Chrome: '/img/chrome.png',
        Safari: '/img/safari.png',
        Firefox: '/img/firefox.png',
        Edge: '/img/edge.png',
        Opera: '/img/opera.png',
        Brave: '/img/brave.png',
        Windows: '/img/windows.png',
        Mac: '/img/mac.png',
        Ubuntu: '/img/ubuntu.png',
        Linux: '/img/linux.png',
        Cent: '/img/centos.png',
        USA: '/img/usa.png',
        Brazil: '/img/brazil.png',
        India: '/img/india.png',
        Australia: '/img/australia.png',
        China: '/img/china.png',
        France: '/img/france.png',
      };

      const colorMap = {
        Chrome: '#22c55e',
        Safari: '#6366f1',
        Firefox: '#0ea5e9',
        Edge: '#f59e0b',
        Opera: '#ef4444',
        Brave: '#0ea5e9',
        Windows: '#22c55e',
        Mac: '#6366f1',
        Ubuntu: '#0ea5e9',
        Linux: '#f59e0b',
        Cent: '#0ea5e9',
        USA: '#22c55e',
        Brazil: '#6366f1',
        India: '#0ea5e9',
        Australia: '#f59e0b',
        China: '#ef4444',
        France: '#0ea5e9',
      };

      res.data.forEach((item) => {
        remoteDataSources[item.catagory]?.push({
          name: item.name,
          visits: item.visits,
          percent: item.percent,
          icon: iconMap[item.name] || '',
          color: colorMap[item.name] || '#ccc',
        });
      });

      setDataSources(remoteDataSources);
    };

    getVisits();
  }, []);

  return (
    <div style={{}}>
      <Tabs activeKey={activeKey} onChange={setActiveKey}>
        <TabPane tab="BROWSER" key="browser" />
        <TabPane tab="OPERATING SYSTEM" key="os" />
        <TabPane tab="COUNTRY" key="country" />
      </Tabs>

      <Table
        dataSource={dataSources[activeKey]}
        columns={columns}
        pagination={false}
        rowKey="name"
      />
    </div>
  );
}
