import React, { useState } from 'react'
import { Row, Col, Card, Layout, Menu, Button, Typography } from 'antd';
import TopBar from '../../components/topBar.jsx';
import BasicLineChart from '../../components/order.jsx';
import SalesCard from '../../components/salesCard.jsx';
import TotalRevenue from '../../components/totalRevenue.jsx';
import PaymentCard from '../../components/paymentCard.jsx'
import Revenue from '../../components/revenue.jsx';
import ProfitReport from '../../components/profitReport.jsx';
import OrderStatistics from '../../components/orderStatistics/orderStatistics.jsx';
import Financial from '../../components/financial.jsx';
import Transactions from '../../components/transactions.jsx';
import Activity from '../../components/activity.jsx';
import Data from '../../components/data.jsx';

import {
  AppstoreOutlined,
  FireTwoTone,
  HomeTwoTone,
  UserOutlined,
  // CaretRightFilled,
  // CaretLeftFilled,
  MailOutlined,
  MessageOutlined,
  CalendarOutlined,
  FileTextOutlined,
  SafetyOutlined,
  FileOutlined,
  UnlockOutlined,
  ExperimentOutlined,
  CommentOutlined,
  BugOutlined,
  CreditCardOutlined,
  FormOutlined,
  TableOutlined,
  BarChartOutlined,
  KeyOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import './Home.scss';
import john from '../../assets/john.png';

const { Title, Text } = Typography;
const { Sider, Content } = Layout;
const menuItems = [
  {
    key: '1',
    icon: <HomeTwoTone twoToneColor="#fa541c" />,
    label: 'Dashboard',
    children: [
      { key: '2', label: 'Analytics' },
      { key: '3', label: 'CRM' },
      { key: '4', label: 'eCommerce' },
    ],
  },
  {
    type: 'group',
    key: 'divider1',
    label: 'APPS&PAGES',
  },
  { type: 'divider' },
  { key: '5', icon: <MailOutlined />, label: 'Email' },
  { key: '6', icon: <MessageOutlined />, label: 'Chat' },
  { key: '7', icon: <CalendarOutlined />, label: 'Calendar' },
  {
    key: '8',
    label: 'Invoice',
    icon: <FileTextOutlined />,
    children: [
      { key: '9', label: 'List' },
      { key: '10', label: 'Preview' },
      { key: '11', label: 'Edit' },
      { key: '12', label: 'Add' },
    ],
  },
  {
    key: '13',
    label: 'User',
    icon: <UserOutlined />,
    children: [
      { key: '14', label: 'List' },
      { key: '15', label: 'View' },
    ],
  },
  {
    key: '16',
    label: 'Role&Permission',
    icon: <SafetyOutlined />,
    children: [
      { key: '17', label: 'Roles' },
      { key: '18', label: 'Permission' },
    ],
  },
  {
    key: '19',
    label: 'Pages',
    icon: <FileOutlined />,
    children: [
      { key: '20', label: 'User Profile' },
      { key: '21', label: 'Account Settings' },
      { key: '22', label: 'FAQ' },
      { key: '23', label: 'Help Center' },
      { key: '24', label: 'Pricing' },
      { key: '25', label: 'Miscellaneous' },
    ],
  },
  {
    key: '26',
    label: 'Auth Pages',
    icon: <UnlockOutlined />,
    children: [
      { key: '27', label: 'Login' },
      { key: '28', label: 'Register' },
      { key: '29', label: 'Verfiy Email' },
      { key: '30', label: 'Forgot Password' },
      { key: '31', label: 'Reset Password' },
      { key: '32', label: 'Two Steps' },
    ],
  },
  {
    key: '32',
    label: 'Wizard Examples',
    icon: <ExperimentOutlined />,
    children: [
      { key: '33', label: 'Checkout' },
      { key: '34', label: 'Property Listing' },
      { key: '35', label: 'Create Deal' },
    ],
  },
  { key: '36', icon: <CommentOutlined />, label: 'Dialog Example' },
  {
    type: 'group',
    key: 'divider2',
    label: 'USER INTERFACE',
  },
  { type: 'divider' },
  { key: '37', icon: <AppstoreOutlined />, label: 'Icons' },
  { key: '38', icon: <BugOutlined />, label: 'Icons Test' },
  { key: '39', icon: <CreditCardOutlined />, label: 'Cards' },
  {
    type: 'group',
    key: 'divider3',
    label: 'FORM&TABLES',
  },
  { type: 'divider' },
  { key: '40', icon: <FormOutlined />, label: 'Form Elements' },
  { key: '41', icon: <FormOutlined />, label: 'Form Layout' },
  { key: '42', icon: <FormOutlined />, label: 'Form Validation' },
  { key: '43', icon: <FormOutlined />, label: 'Form Wizard' },
  { key: '44', icon: <TableOutlined />, label: 'Table' },
  {
    type: 'group',
    key: 'divider4',
    label: 'CHART&MISC',
  },
  { type: 'divider' },
  { key: '46', icon: <BarChartOutlined />, label: 'Charts' },
  { key: '47', icon: <KeyOutlined />, label: 'Access Control' },
  { key: '48', icon: <EllipsisOutlined />, label: 'Others' },
];


export default function Home() {
  const [collapsed, setCollapsed] = useState(true);

  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };

  const filteredItems = collapsed ? menuItems.filter(item => item.type !== 'group') : menuItems;

  return (
    <div className='home'>
      <Layout >
        <Sider trigger={null}
          collapsible collapsed={collapsed}
          theme="light"
          style={{ height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0, zIndex: 2, overflowY: "auto", }}
          onMouseEnter={() => setCollapsed(false)}
          onMouseLeave={() => setCollapsed(true)}
        >
          <div style={{height:70,zIndex:1}}></div>
          {/* logo */}
          <div
            style={{
              height: 90,
              display: 'flex',
              alignItems: 'center',
              padding: '0 20px',
              position: 'fixed',
              top: 0,
              left: 0,
              transition: 'width 0.2s',
              zIndex: 2,
              backgroundColor: '#fff',
              width: collapsed ? 70 : 200,
            }}
          >
            <FireTwoTone twoToneColor="#fa541c" style={{ fontSize: 40 }} />
            {!collapsed && (
              <span style={{ marginLeft: 12, fontSize: 25, fontWeight: 600, color: '#fa541c' }}>
                Sneat
              </span>
            )}
          </div>
          {/* <Button type="primary" shape="circle" onClick={toggleCollapsed} style={{ fontSize: 12, position: 'absolute', top: 70, right: -10, zIndex: 1, }}>
            {collapsed ? <CaretRightFilled /> : <CaretLeftFilled />}
          </Button> */}
          <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            theme="light"
            inlineCollapsed={collapsed}
            items={filteredItems}
            style={{ marginTop: 20, textAlign: 'left', fontSize: 16, fontWeight: 300, }}
          />

        </Sider>

        <Content style={{ marginLeft: 100, marginRight: 30, marginBottom: 30 }}>
          <Row gutter={[18, 24]}  >
            <div style={{ width: '100%', height: '60px' }}></div>
            {/* top bar */}
            <Col span={24} style={{
              position: 'fixed',
              top: 10,
              zIndex: 1,
              width: 'calc(100% - 110px)',
            }}>
              <Card variant="outlined" style={{ height: 60, textAlign: 'left' }}>
                <TopBar />
              </Card>
            </Col>

            {/* Congrats John */}
            <Col span={16} >
              <Card variant="outlined" style={{ height: 180, textAlign: 'left' }}>
                <div className="congrats">
                  <div>
                    <Title level={3} style={{ margin: 0, color: '#6366F1' }}>
                      Congratulations John! 🎉
                    </Title>
                    <Text type="secondary" style={{ display: 'block', margin: '8px 0' }}>
                      You have done 72% more sales today.<br />
                      Check your new badge in your profile.
                    </Text>
                    <Button type="primary" ghost>
                      VIEW BADGES
                    </Button>
                  </div>
                  <img
                    src={john}
                    alt="John"
                    style={{
                      height: '140px',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </Card>
            </Col>

            {/* order */}
            <Col span={4} >
              <Card variant="outlined" style={{ height: 180, textAlign: 'left' }} className="orderCard">
                <div className="order">
                  <Text type="secondary" style={{ display: 'block', fontSize: 16 }}>
                    Order
                  </Text>
                  <Text type="secondary" style={{ display: 'block', fontSize: 20, fontWeight: 600 }}>
                    276K
                  </Text>
                  <div className="orderChart">
                    <BasicLineChart />
                  </div>
                </div>
              </Card>
            </Col>

            {/* sales */}
            <Col span={4} ><Card variant="outlined" style={{ height: 180, textAlign: 'left' }} > <SalesCard /></Card></Col>

            {/* total revenue */}
            <Col span={16}>
              <Card variant="outlined" style={{ height: 380 }} className="total-revenue-card">
                <TotalRevenue />
              </Card>
            </Col>
            {/* payment Revenue Profit Report*/}
            <Col span={8}>
              <Row gutter={[18, 18]}>
                <Col span={12}>
                  <Card variant="outlined" style={{ height: 180, textAlign: 'left' }}>
                    <PaymentCard />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card variant="outlined" style={{ height: 180 }}>
                    <Revenue />
                  </Card>
                </Col>
                <Col span={24}>
                  <Card variant="outlined" style={{ height: 180 }}>
                    <ProfitReport />
                  </Card>
                </Col>
              </Row>
            </Col>
            {/* Order Statistics */}
            <Col span={8} style={{ paddingTop: 14 }}>
              <Card variant="outlined" style={{ height: 500 }}>
                <OrderStatistics />
              </Card>
            </Col>
            {/* financial */}
            <Col span={8} style={{ paddingTop: 14 }}>
              <Card variant="outlined" style={{ height: 500 }}>
                <Financial />
              </Card>
            </Col>
            {/* transactions */}
            <Col span={8} style={{ paddingTop: 14 }}>
              <Card variant="outlined" style={{ height: 500 }}>
                <Transactions />
              </Card>
            </Col>
            {/* activity */}
            <Col span={12} style={{ paddingTop: 14 }}>
              <Card variant="outlined" style={{ height: 500 }}>
                <Activity />
              </Card>
            </Col>
            {/* data */}
            <Col span={12} style={{ paddingTop: 14 }}>
              <Card variant="outlined" style={{ height: 500 }}>
                <Data />
              </Card>
            </Col>
          </Row>
        </Content>

      </Layout>
    </div>
  );
}
