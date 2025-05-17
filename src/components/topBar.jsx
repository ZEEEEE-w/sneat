import React from 'react';
import { Input, Space, Avatar, Badge, Tooltip } from 'antd';
import {
  SearchOutlined,
  GlobalOutlined,
  BulbOutlined,
  AppstoreOutlined,
  BellOutlined,
} from '@ant-design/icons';

export default function Topbar() {
  return (
    <div style={{
      display: 'flex',
      alignItems: '',
      justifyContent: 'space-between',
      height: '100%',
      marginTop: -6,
    }}>
      <Input
        prefix={<SearchOutlined style={{ color: '#94A3B8' }} />}
        placeholder="Search (Ctrl+/)"
        style={{
          width: 300,
          borderRadius: 12,
          backgroundColor: '#F9FAFB',
        }}
      />

      {/* 图标 + 头像 */}
      <Space size="middle">
        <Tooltip title="Language">
          <GlobalOutlined style={{ fontSize: 18, color: '#475569' }} />
        </Tooltip>
        <Tooltip title="Theme">
          <BulbOutlined style={{ fontSize: 18, color: '#475569' }} />
        </Tooltip>
        <Tooltip title="Layout">
          <AppstoreOutlined style={{ fontSize: 18, color: '#475569' }} />
        </Tooltip>
        <Tooltip title="Notifications">
          <Badge dot offset={[-1, 3]}>
            <BellOutlined style={{ fontSize: 18, color: '#475569' }} />
          </Badge>
        </Tooltip>
        <Badge
          dot
          status="success"
          offset={[-5, 5]}
          style={{ backgroundColor: '#22C55E' }}
        >
          <Avatar
            size="large"
            src="https://randomuser.me/api/portraits/men/45.jpg"
            style={{ backgroundColor: '#c7d2fe' }}
          />
        </Badge>
      </Space>
    </div>
  );
}
