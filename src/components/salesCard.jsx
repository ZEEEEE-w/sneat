
import React, { useEffect, useState } from 'react';
import { MoreOutlined, ArrowUpOutlined ,AccountBookTwoTone } from '@ant-design/icons';
import axios from 'axios';
// import walletIcon from '@/assets/wallet-icon.svg'; 

const SalesCard = () => {
  // const data = [4689]
  const [data, setData] = useState([])
  useEffect(()=> {
    const getSales = async ()=> {
      const res = await axios.get('http://127.0.0.1/getSales')
      setData(res.data[0].data)
    }
    getSales()
  },[])
  return (
    <>
      <div className="sales-card__header">
        <div className="sales-card__icon">
        <AccountBookTwoTone />
        </div>
        <MoreOutlined className="sales-card__more" />
      </div>

      <div className="sales-card__body">
        <div className="sales-card__title">Sales</div>
        <div className="sales-card__value">${data.toLocaleString()}</div>
        <div className="sales-card__change sales-card__change--up">
          <ArrowUpOutlined />
          <span>28.14%</span>
        </div>
      </div>
    </>
  );
};

export default SalesCard;
