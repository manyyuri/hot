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
  return (
    <div style={{ marginTop: 20 }}>
      <Title level={2}>柔韧性</Title>
     瑜伽练习
    </div>
  );
}
