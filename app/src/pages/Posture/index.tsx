"use client"
import { Card, Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface PostureContent {
  type: string;
  description: string;
  benefits: string[];
  exercises: string[];
  frequency: string;
}

export default function Posture() {
  const postureData: PostureContent = {
    type: 'PBT（基于芭蕾的训练）',
    description: '专业芭蕾基础训练，改善身体姿态',
    benefits: ['矫正体态', '提升气质', '增强肌肉耐力'],
    exercises: ['Plie组合', 'Tendu练习', '核心稳定性训练'],
    frequency: '每周2-3次'
  };

  return (
    <div style={{ marginTop: 20 }}>
      <Title level={2}>体态矫正训练</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card 
            title={postureData.type} 
            variant={'borderless'}
            style={{ height: '100%' }}
          >
            <Paragraph>{postureData.description}</Paragraph>
            
            <div>
              <Title level={4}>训练益处</Title>
              <ul>
                {postureData.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div>
              <Title level={4}>训练内容</Title>
              <ul>
                {postureData.exercises.map((exercise, index) => (
                  <li key={index}>{exercise}</li>
                ))}
              </ul>
            </div>

            <div>
              <Title level={4}>训练建议</Title>
              <p>频率：{postureData.frequency}</p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
