"use client"
import { useMemo } from 'react';
import { Typography } from 'antd';
import VideoList, { VideoListItem } from '../../VideoList';

const { Title, Paragraph } = Typography;

export default function LowerFat() {
  return (
    <div style={{ marginTop: 20 }}>
      <Title level={2}>减脂训练方案</Title>
      <Paragraph>主要在饮食控制。运动可以做舞蹈、健身操、动感单车。</Paragraph>
    </div>
  );
}
