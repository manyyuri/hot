"use client"
import { Card, Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface MaterialsContent {
  type: string;
  description: string;
  categories: string[];
}

export default function Materials() {
  const materialsData: MaterialsContent = {
    type: '综合资料',
    description: '各类训练方法参考资料',
    categories: [
      '训练视频库',
      '饮食指导',
      '动作详解',
      '训练计划模板'
    ]
  };

  return (
    <div style={{ marginTop: 20 }}>
      <Title level={2}>训练资料库</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card 
            title={materialsData.type} 
            variant={'borderless'}
            style={{ height: '100%' }}
          >
            <Paragraph>{materialsData.description}</Paragraph>
            
            <div>
              <Title level={4}>资料分类</Title>
              <ul>
                {materialsData.categories.map((category, index) => (
                  <li key={index}>{category}</li>
                ))}
              </ul>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
