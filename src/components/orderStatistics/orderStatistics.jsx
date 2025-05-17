import React from 'react';
import Chart from 'react-apexcharts';
import { Typography } from 'antd';
import './orderStatistics.scss';

const { Title, Text } = Typography;

const OrderStatistics = () => {
  const series = [40, 45, 80, 20];
  const options = {
    chart: { type: 'donut', toolbar: { show: false } },
    labels: ['Decor', 'Fashion', 'Electronic', 'Sports'],
    colors: ['#32d3eb', '#71dd37', '#556ee6', '#ced4da'],
    legend: { show: false },
    dataLabels: { enabled: false },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          labels: {
            show: true,
            name: { show: false },
            value: { show: true, formatter: val => `${val}%`, offsetY: 0, style: { fontSize: '20px', fontWeight: 600 } },
            total: { show: true, label: 'Weekly', formatter: () => '38%', style: { fontSize: '14px', color: '#9ba9b4' } }
          }
        }
      }
    }
  };

  return (
    <div className="order-statistics-component">
      <div className="header">
        <Title level={4}>Order Statistics</Title>
        <Text className="subtitle">42.82k Total Sales</Text>
      </div>
      <div className="summary-row">
        <div>
          <p className="orders-count">8,258</p>
          <p className="orders-label">Total Orders</p>
        </div>
        <div className="donut-chart">
          <Chart options={options} series={series} type="donut" height={120} width={120} />
        </div>
      </div>
      <div className="list-items">
        <div className="list-item">
          <div className="item-info">
            <div className="icon-wrapper electronic">
              <i className="icon-electronic" />
            </div>
            <div className="titles">
              <Text strong>Electronic</Text>
              <Text>Total Sales Details?</Text>
            </div>
          </div>
          <Text className="value">82.5k</Text>
        </div>
        <div className="list-item">
          <div className="item-info">
            <div className="icon-wrapper fashion">
              <i className="icon-fashion" />
            </div>
            <div className="titles">
              <Text strong>Fashion</Text>
              <Text>Tshirt, Jeans, Shoes</Text>
            </div>
          </div>
          <Text className="value">23.8k</Text>
        </div>
        <div className="list-item">
          <div className="item-info">
            <div className="icon-wrapper decor">
              <i className="icon-decor" />
            </div>
            <div className="titles">
              <Text strong>Decor</Text>
              <Text>Fine Art, Dining</Text>
            </div>
          </div>
          <Text className="value">849</Text>
        </div>
        <div className="list-item">
          <div className="item-info">
            <div className="icon-wrapper sports">
              <i className="icon-sports" />
            </div>
            <div className="titles">
              <Text strong>Sports</Text>
              <Text>Football, Cricket Kit</Text>
            </div>
          </div>
          <Text className="value">99</Text>
        </div>
      </div>
    </div>
  );
};

export default OrderStatistics;
