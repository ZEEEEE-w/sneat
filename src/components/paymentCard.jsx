import React from 'react';
import { MoreOutlined, ArrowDownOutlined ,PayCircleOutlined} from '@ant-design/icons';


const PaymentCard = () => (
  <div className="payment-card">
    <div className="payment-card__header">
      <div className="payment-card__icon">
      <PayCircleOutlined />
      </div>
      <MoreOutlined className="payment-card__more" />
    </div>
    <div className="payment-card__body">
      <div className="payment-card__title">Payments</div>
      <div className="payment-card__value">$2,468</div>
      <div className="payment-card__change payment-card__change--down">
        <ArrowDownOutlined />
        <span>14.82%</span>
      </div>
    </div>
  </div>
);

export default PaymentCard;
