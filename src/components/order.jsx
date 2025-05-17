import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const BasicLineChart = () => {

    const [data,setData] = useState([])
    const [series, setSeries] = useState([{}])
    useEffect(()=>{
      const getOrder = async ()=> {
        const res = await axios.get('http://127.0.0.1/getOrder')
        console.log(res.data[0].data);
        setData(res.data[0].data)
        setSeries([{
          data: res.data[0].data
        }])
      }
      getOrder()
    },[])

  // const data = []
  // const series = [
  //   {
  //     data
  //   }
  // ]

  const options = {
    chart: {
      type: 'area',
      sparkline: { enabled: true },
      toolbar: { show: false },
      zoom: { enabled: false },
      offsetY: 0,
      offsetX: 0,
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.6,
        inverseColors: false,
        opacityFrom: 0.6,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    colors: ['#59E296'],
    markers: {
      size: 4,
      colors: ['#59E296'],
      strokeColors: '#fff',
      strokeWidth: 2,
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: data.length - 1,
          fillColor: '#fff',
          strokeColor: '#59E296',
          size: 6
        }
      ]
    },
    tooltip: { enabled: false }
  };

  return (
    <Chart
      options={options}
      series={series}
      type="area"
      width="100%"
      height="100%"
    />
  );
};

export default BasicLineChart;
