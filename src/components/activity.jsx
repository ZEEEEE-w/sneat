import React from 'react';
import { Timeline, Typography, Avatar, Space } from 'antd';
import { FilePdfOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

export default function Activity() {
  return (
    <div style={{ textAlign:'left', overflowY: 'auto', height: '100%' }}>
      <Title level={3} style={{ marginBottom: 40 }}>Activity Timeline</Title>
      <Timeline
        mode="left"
        items={[
          {
            color: '#8b5cf6',
            children: (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Text strong style={{ color: '#1e293b' }}>12 Invoices have been paid</Text>
                  <Text type="secondary">12 min ago</Text>
                </div>
                <Text type="secondary">Invoices have been paid to the company</Text>
                <div style={{ marginTop: 8, display: 'flex', alignItems: 'center' }}>
                  <FilePdfOutlined style={{ fontSize: 20, color: '#ef4444' }} />
                  <Text strong style={{ marginLeft: 8 }}>Invoices.pdf</Text>
                </div>
              </div>
            ),
          },
          {
            color: '#facc15',
            children: (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Text strong style={{ color: '#1e293b' }}>Client Meeting</Text>
                  <Text type="secondary">45 min ago</Text>
                </div>
                <Text type="secondary">Project meeting with john @10:15am</Text>
                <div style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                  <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" size="small" />
                  <div style={{ marginLeft: 8 }}>
                    <Text strong>Steven Nash (Client)</Text><br />
                    <Text type="secondary">CEO of ThemeSelection</Text>
                  </div>
                </div>
              </div>
            ),
          },
          {
            color: '#22d3ee',
            children: (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Text strong style={{ color: '#1e293b' }}>Create a new project for client</Text>
                  <Text type="secondary">2 days ago</Text>
                </div>
                <Text type="secondary">5 team members in a project</Text>
                <Space style={{ marginTop: 10,paddingLeft:15 }}>
                  <Avatar src="https://randomuser.me/api/portraits/men/10.jpg" />
                  <Avatar src="https://randomuser.me/api/portraits/women/11.jpg" />
                  <Avatar src="https://randomuser.me/api/portraits/men/12.jpg" />
                  <Avatar src="https://randomuser.me/api/portraits/women/13.jpg" />
                  <Avatar src="https://randomuser.me/api/portraits/men/14.jpg" />
                </Space>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
