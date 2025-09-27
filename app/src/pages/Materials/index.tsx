"use client"
import { Card, Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface MaterialsContent {
  type: string;
  description: string;
  categories: string[];
}

export default function Materials() {


  return (
    <div style={{ marginTop: 20 }}>
      <Title level={2}>训练资料库</Title>
    </div>
  );
}
