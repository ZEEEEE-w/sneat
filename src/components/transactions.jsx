import React from 'react';
import { List, Typography, Avatar } from 'antd';
import {
  WalletOutlined,
  CreditCardOutlined,
  DollarCircleOutlined,
  PayCircleOutlined,
} from '@ant-design/icons';

const { Text, Title } = Typography;

const data = [
  {
    title: 'Send money',
    subtitle: 'Paypal',
    amount: '+82.6',
    color: '#FEE2E2',
    icon: <PayCircleOutlined style={{ color: '#F87171' }} />,
  },
  {
    title: "Mac'D",
    subtitle: 'Wallet',
    amount: '+270.69',
    color: '#E0E7FF',
    icon: <WalletOutlined style={{ color: '#6366F1' }} />,
  },
  {
    title: 'Refund',
    subtitle: 'Transfer',
    amount: '+637.91',
    color: '#CCFBF1',
    icon: <DollarCircleOutlined style={{ color: '#0D9488' }} />,
  },
  {
    title: 'Ordered Food',
    subtitle: 'Credit Card',
    amount: '-838.71',
    color: '#DCFCE7',
    icon: <CreditCardOutlined style={{ color: '#22C55E' }} />,
  },
  {
    title: 'Starbucks',
    subtitle: 'Wallet',
    amount: '+203.33',
    color: '#E0E7FF',
    icon: <WalletOutlined style={{ color: '#6366F1' }} />,
  },
  {
    title: 'Ordered Food',
    subtitle: 'Mastercard',
    amount: '-92.45',
    color: '#FEF9C3',
    icon: <CreditCardOutlined style={{ color: '#F59E0B' }} />,
  },
];

export default function Transactions() {
  return (
    <div style={{ textAlign:'left'}}>
      <Title level={5} style={{ marginBottom: 20 }}>Transactions</Title>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item style={{ padding: '12px 0' }}>
            <List.Item.Meta
              avatar={
                <Avatar
                  style={{
                    backgroundColor: item.color,
                    verticalAlign: 'middle',
                  }}
                  size={48}
                  icon={item.icon}
                />
              }
              title={
                <div style={{ fontWeight: 500 }}>{item.title}</div>
              }
              description={
                <Text type="secondary">{item.subtitle}</Text>
              }
            />
            <div style={{ textAlign: 'right' }}>
              <Text style={{ fontWeight: 500 }}>{item.amount} <span style={{ color: '#94A3B8' }}>USD</span></Text>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
}
