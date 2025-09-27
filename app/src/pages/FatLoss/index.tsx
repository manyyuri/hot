"use client"
import { Card, Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface FatLossContent {
  type: string;
  description: string;
  benefits: string[];
  recommendations: string[];
  duration: string;
}

export default function LowerFat() {
  const fatLossData: FatLossContent = {
    type: '跳舞',
    description: '通过舞蹈运动燃烧脂肪，提升协调性',
    benefits: ['高效燃脂', '提升心肺功能', '改善身体协调性'],
    recommendations: ['Zumba', '街舞', '有氧舞蹈'],
    duration: '45-60分钟'
  };

  return (
    <div style={{ marginTop: 20 }}>
      <Title level={2}>减脂训练方案</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card 
            title={fatLossData.type} 
            variant={'borderless'}
            style={{ height: '100%' }}
          >
            <Paragraph>{fatLossData.description}</Paragraph>
            
            <div>
              <Title level={4}>训练益处</Title>
              <ul>
                {fatLossData.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div>
              <Title level={4}>推荐项目</Title>
              <ul>
                {fatLossData.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>

            <div>
              <Title level={4}>训练建议</Title>
              <p>时长：{fatLossData.duration}</p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
