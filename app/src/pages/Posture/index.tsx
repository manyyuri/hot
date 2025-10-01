"use client"
import { useMemo } from 'react';
import { Typography } from 'antd';
import VideoList, { VideoListItem } from '../../VideoList';

const { Title, Paragraph } = Typography;

export default function Posture() {
  const videos: VideoListItem[] = useMemo(() => ([
    { id: 'p1', title: '【回归的美丽芭蕾：芭蕾舞剧《珠宝改编》，绿宝石篇，紧致全身，优美仪态】', cover: '/vercel.svg', url: 'https://www.bilibili.com/video/BV1wt411q75V/' },
  ]), []);

  return (
    <div style={{ marginTop: 20 }}>
      <VideoList items={videos} />
    </div>
  );
}
