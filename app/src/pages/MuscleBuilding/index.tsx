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

  return (
    <div style={{ marginTop: 20 }}>
      <Title level={2}>增肌训练方案</Title>
     分表层肌肉和深层肌肉
     表层肌肉需要用力量训练的方式
     深层肌肉可以用普拉提和 PBT
    </div>
  );
}
