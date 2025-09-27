"use client"
import { Card, Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface FlexibilityContent {
  type: string;
  description: string;
  benefits: string[];
  poses: string[];
  duration: string;
}

export default function Flexibility() {
  const flexibilityData: FlexibilityContent = {
    type: '瑜伽',
    description: '提高身体柔韧性和关节活动度',
    benefits: ['增强柔韧性', '缓解肌肉紧张', '改善姿势'],
    poses: ['下犬式', '鸽子式', '坐姿前屈'],
    duration: '30-45分钟'
  };

  return (
    <div style={{ marginTop: 20 }}>
      <Title level={2}>柔韧性</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card 
            title={flexibilityData.type} 
            variant={'borderless'}
            style={{ height: '100%' }}
          >
            <Paragraph>{flexibilityData.description}</Paragraph>
            
            <div>
              <Title level={4}>训练益处</Title>
              <ul>
                {flexibilityData.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div>
              <Title level={4}>瑜伽体式</Title>
              <ul>
                {flexibilityData.poses.map((pose, index) => (
                  <li key={index}>{pose}</li>
                ))}
              </ul>
            </div>

            <div>
              <Title level={4}>训练建议</Title>
              <p>时长：{flexibilityData.duration}</p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
