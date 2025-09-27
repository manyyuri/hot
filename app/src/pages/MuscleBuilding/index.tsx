"use client"
import { Card, Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface MuscleBuildingContent {
  type: string;
  description: string;
  benefits: string[];
  exercises: string[];
  frequency: string;
}

export default function MoreMuscle() {
  const muscleBuildingData: MuscleBuildingContent = {
    type: '普拉提',
    description: '核心训练，塑造肌肉线条',
    benefits: ['增强核心力量', '改善肌肉平衡', '提升身体控制力'],
    exercises: ['百次呼吸', '卷腹起身', '腿部环绕'],
    frequency: '每周3-4次'
  };

  return (
    <div style={{ marginTop: 20 }}>
      <Title level={2}>增肌训练方案</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card 
            title={muscleBuildingData.type} 
            variant={'borderless'}
            style={{ height: '100%' }}
          >
            <Paragraph>{muscleBuildingData.description}</Paragraph>
            
            <div>
              <Title level={4}>训练益处</Title>
              <ul>
                {muscleBuildingData.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div>
              <Title level={4}>训练内容</Title>
              <ul>
                {muscleBuildingData.exercises.map((exercise, index) => (
                  <li key={index}>{exercise}</li>
                ))}
              </ul>
            </div>

            <div>
              <Title level={4}>训练建议</Title>
              <p>频率：{muscleBuildingData.frequency}</p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
