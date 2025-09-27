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

  return (
    <div style={{ marginTop: 20 }}>
      <Title level={2}>减脂训练方案</Title>
      主要在饮食控制
      运动可以做舞蹈、健身操、动感单车
    </div>
  );
}
