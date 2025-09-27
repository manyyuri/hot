"use client"
import { useState } from 'react';
import { Menu, Typography } from 'antd';
import Schedule from './pages/TodayPlan';
import LowerFat from './pages/FatLoss';
import MoreMuscle from './pages/MuscleBuilding';
import Flexibility from './pages/Flexibility';
import Posture from './pages/Posture';
import Materials from './pages/Materials';

const { Title } = Typography;

// 定义菜单项类型
interface MenuItem {
  key: number;
  label: string;
}

export default function BodyManagement() {
  const [currentMenu, setCurrentMenu] = useState<number>(1);

  const menuItems: MenuItem[] = [
    { key: 1, label: '今日计划' },
    { key: 2, label: '减脂' },
    { key: 3, label: '增肌' },
    { key: 4, label: '柔韧性' },
    { key: 5, label: '体态' },
    { key: 6, label: '资料' }
  ];


  const handleMenuClick = (e: { key: string }) => {
    setCurrentMenu(parseInt(e.key));
  };

  const renderContent = () => {
    switch (currentMenu) {
      case 1:
        return <Schedule />;
      case 2:
        return <LowerFat />;
      case 3:
        return <MoreMuscle />;
      case 4:
        return <Flexibility />;
      case 5:
        return <Posture />;
      case 6:
        return <Materials />;
      default:
        return <Schedule />;
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title level={1}>HOT</Title>
      <Menu 
        mode="horizontal" 
        defaultSelectedKeys={['1']}
        selectedKeys={[currentMenu.toString()]}
        items={menuItems.map(item => ({
          key: item.key.toString(),
          label: item.label
        }))}
        onClick={handleMenuClick}
        style={{ marginBottom: 20 }}
      />
      
      {renderContent()}
    </div>
  );
}