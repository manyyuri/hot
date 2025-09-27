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
  return (
    <div style={{ marginTop: 20 }}>
      <Title level={2}>体态矫正训练</Title>
      PBT 搭配芭蕾基训
    </div>
  );
}
