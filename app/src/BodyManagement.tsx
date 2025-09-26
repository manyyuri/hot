"use client"
import { useState } from 'react';
import { Menu, Card, Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

// 定义菜单项类型
interface MenuItem {
  key: number;
  label: string;
}

// 定义内容项类型
interface ContentItem {
  type: string;
  description: string;
  exercises?: string[];
  benefits?: string[];
  recommendations?: string[];
  poses?: string[];
  categories?: string[];
  duration?: string;
  frequency?: string;
}

// 定义菜单内容类型
interface MenuContent {
  title: string;
  content: ContentItem[];
}

// 定义菜单内容映射类型
type MenuContentMap = {
  [key: number]: MenuContent;
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

  const menuContentMap: MenuContentMap = {
    1: {
      title: '今日训练计划',
      content: [
        {
          type: '123训练',
          description: '基础体能训练，包含有氧和无氧结合',
          exercises: ['热身10分钟', '深蹲3组×15次', '俯卧撑3组×12次', '平板支撑3组×30秒'],
          duration: '60分钟'
        }
      ]
    },
    2: {
      title: '减脂训练方案',
      content: [
        {
          type: '跳舞',
          description: '通过舞蹈运动燃烧脂肪，提升协调性',
          benefits: ['高效燃脂', '提升心肺功能', '改善身体协调性'],
          recommendations: ['Zumba', '街舞', '有氧舞蹈'],
          duration: '45-60分钟'
        }
      ]
    },
    3: {
      title: '增肌训练方案',
      content: [
        {
          type: '普拉提',
          description: '核心训练，塑造肌肉线条',
          benefits: ['增强核心力量', '改善肌肉平衡', '提升身体控制力'],
          exercises: ['百次呼吸', '卷腹起身', '腿部环绕'],
          frequency: '每周3-4次'
        }
      ]
    },
    4: {
      title: '柔韧性',
      content: [
        {
          type: '瑜伽',
          description: '提高身体柔韧性和关节活动度',
          benefits: ['增强柔韧性', '缓解肌肉紧张', '改善姿势'],
          poses: ['下犬式', '鸽子式', '坐姿前屈'],
          duration: '30-45分钟'
        }
      ]
    },
    5: {
      title: '体态矫正训练',
      content: [
        {
          type: 'PBT（基于芭蕾的训练）',
          description: '专业芭蕾基础训练，改善身体姿态',
          benefits: ['矫正体态', '提升气质', '增强肌肉耐力'],
          exercises: ['Plie组合', 'Tendu练习', '核心稳定性训练'],
          frequency: '每周2-3次'
        }
      ]
    },
    6: {
      title: '训练资料库',
      content: [
        {
          type: '综合资料',
          description: '各类训练方法参考资料',
          categories: [
            '训练视频库',
            '饮食指导',
            '动作详解',
            '训练计划模板'
          ]
        }
      ]
    }
  };

  const handleMenuClick = (e: { key: string }) => {
    setCurrentMenu(parseInt(e.key));
  };

  const renderContent = () => {
    const content = menuContentMap[currentMenu];
    if (!content) return null;

    return (
      <div style={{ marginTop: 20 }}>
        <Title level={2}>{content.title}</Title>
        <Row gutter={[16, 16]}>
          {content.content.map((item: ContentItem, index: number) => (
            <Col xs={24} lg={12} key={index}>
              <Card 
                title={item.type} 
                variant={'borderless'}
                style={{ height: '100%' }}
              >
                <Paragraph>{item.description}</Paragraph>
                
                {item.benefits && (
                  <div>
                    <Title level={4}>训练益处</Title>
                    <ul>
                      {item.benefits.map((benefit: string, i: number) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.exercises && (
                  <div>
                    <Title level={4}>训练内容</Title>
                    <ul>
                      {item.exercises.map((exercise: string, i: number) => (
                        <li key={i}>{exercise}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.recommendations && (
                  <div>
                    <Title level={4}>推荐项目</Title>
                    <ul>
                      {item.recommendations.map((rec: string, i: number) => (
                        <li key={i}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.poses && (
                  <div>
                    <Title level={4}>瑜伽体式</Title>
                    <ul>
                      {item.poses.map((pose: string, i: number) => (
                        <li key={i}>{pose}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.categories && (
                  <div>
                    <Title level={4}>资料分类</Title>
                    <ul>
                      {item.categories.map((category: string, i: number) => (
                        <li key={i}>{category}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {(item.duration || item.frequency) && (
                  <div>
                    <Title level={4}>训练建议</Title>
                    <p>
                      {item.duration && `时长：${item.duration}`}
                      {item.frequency && `频率：${item.frequency}`}
                    </p>
                  </div>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title level={1}>身材管理</Title>
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