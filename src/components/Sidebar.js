import React, { useState } from 'react';
import { Menu } from 'antd';
import {
  HomeOutlined,
  EnvironmentOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleCollapsed}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <SubMenu key="sub1" icon={<EnvironmentOutlined />} title="Regions">
          <Menu.Item key="2">United States</Menu.Item>
          <Menu.Item key="3">India</Menu.Item>
          <Menu.Item key="4">United Kingdom</Menu.Item>
        </SubMenu>
        <Menu.Item key="5" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Sidebar;
