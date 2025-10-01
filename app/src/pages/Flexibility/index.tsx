"use client"
import { useMemo } from 'react';
import { Typography } from 'antd';
import VideoList, { VideoListItem } from '../../VideoList';

const { Title, Paragraph } = Typography;

export default function Flexibility() {
  return (
    <div style={{ marginTop: 20 }}>
      <Title level={2}>柔韧性</Title>
      <Paragraph>瑜伽与普拉提提高柔韧性，放松紧张肌群。</Paragraph>
    </div>
  );
}
