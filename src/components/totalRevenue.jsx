import React, { useEffect, useState } from 'react';
import { Row, Col, Select } from 'antd';
import Chart from 'react-apexcharts';
import { DollarOutlined, WalletOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Option } = Select;

const TotalRevenue = () => {
  const [year, setYear] = useState('2025');

  // const revenueSeries = [
  //   { name: '2024', data: [16, 5, 14, 26, 16, 10, 8] },
  //   { name: '2023', data: [-12, -18, -8, -14, -5, -15, -10] }
  // ];
  const [revenueSeries, setRevenueSeries] = useState([]) 
  useEffect(()=>{
    const getTotalRevenue = async () => {
      const res = await axios.get('http://127.0.0.1/getTotalRevenue')
      const series = res.data.map(item => ({
        name: item.name,
        data: item.data
      }))
      setRevenueSeries(series)
      console.log(series);
    }
    getTotalRevenue()
  },[])

  const revenueOptions = {
    chart: { toolbar: { show: false }, zoom: { enabled: false } },
    plotOptions: {
      bar: { columnWidth: '50%', borderRadius: 4 }
    },
    colors: ['#6465E5', '#41C0CC'],
    dataLabels: { enabled: false },
    grid: {
      borderColor: '#EAEAEA',
      yaxis: { lines: { show: true } },
      xaxis: { lines: { show: false } },
      padding: { top: 0, bottom: 0, left: 0, right: 0 }
    },
    xaxis: {
      categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
      labels: { style: { colors: '#9AA0AC' } }
    },
    yaxis: { labels: { style: { colors: '#9AA0AC' } } },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
      markers: { width: 10, height: 10, radius: 6 },
      itemMargin: { horizontal: 8 }
    },
    tooltip: { y: { formatter: v => Math.abs(v) } }
  };

  const gaugeSeries = [78];
  const gaugeOptions = {
    chart: { sparkline: { enabled: true }, offsetY: 0 },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: { size: '60%' },
        track: { background: '#EBEAEE', strokeWidth: '100%' },
        dataLabels: { name: { show: false }, value: { show: false } }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        gradientToColors: ['#6465E5'],
        stops: [0, 100]
      }
    },
    stroke: { lineCap: 'round' }
  };

  return (
    <div className="totalRevenue">
      <Row gutter={24} className="totalRevenue__row">
        <Col span={12} className="totalRevenue__left" style={{textAlign: 'left'}}>
          <div className="totalRevenue__title">Total Revenue</div>
          <div className="totalRevenue__legend">
            <span className="dot dot--2024" />2024
            <span className="dot dot--2023" />2023
          </div>

          <Chart
            options={revenueOptions}
            series={revenueSeries}
            type="bar"
            height={260}
            width="100%"
          />
        </Col>

        <Col span={12} className="totalRevenue__right">
          <div className="totalRevenue__select">
            <Select
              value={year}
              onChange={setYear}
              style={{ width: 80,zIndex:1 }}
            >
              <Option value="2025">2025</Option>
              <Option value="2024">2024</Option>
            </Select>
          </div>

          <div className="totalRevenue__gauge">
            <Chart
              options={gaugeOptions}
              series={gaugeSeries}
              type="radialBar"
              height={260}
              width="100%"
            />
            <div className="gauge__label">
              <div className="gauge__value">78%</div>
              <div className="gauge__text">Growth</div>
            </div>
          </div>

          <div className="totalRevenue__subtext">62% Company Growth</div>

          <div className="totalRevenue__bottom">
            <div className="item">
              <div className="icon icon--dollar"><DollarOutlined /></div>
              <div className="info">
                <div className="year">2025</div>
                <div className="amount">$32.5k</div>
              </div>
            </div>
            <div className="item">
              <div className="icon icon--wallet"><WalletOutlined /></div>
              <div className="info">
                <div className="year">2024</div>
                <div className="amount">$41.2k</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TotalRevenue;
