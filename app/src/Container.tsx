"use client"
import { useState } from 'react';
import { Tag, Typography, Space } from 'antd';
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


  const handleTagClick = (key: number) => {
    setCurrentMenu(key);
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
      <Space wrap style={{ marginBottom: 20 }}>
        {menuItems.map(item => (
          <Tag
            key={item.key}
            color={currentMenu === item.key ? 'blue' : 'default'}
            style={{ 
              cursor: 'pointer',
              padding: '4px 12px',
              fontSize: '14px',
              borderRadius: '6px'
            }}
            onClick={() => handleTagClick(item.key)}
          >
            {item.label}
          </Tag>
        ))}
      </Space>
      
      {renderContent()}
    </div>
  );
}