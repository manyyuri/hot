"use client"
import { useMemo } from 'react';
import { Typography } from 'antd';
import VideoList, { VideoListItem } from '../../VideoList';

const { Title, Paragraph } = Typography;

export default function Posture() {
  const videos: VideoListItem[] = useMemo(() => ([
    { id: 'p1', title: '【回归的美丽芭蕾：芭蕾舞剧《珠宝改编》，绿宝石篇，紧致全身，优美仪态】', cover: '/vercel.svg', url: 'https://www.bilibili.com/video/BV1wt411q75V/' },
    { id: 'p2', title: '蕾｜JYP练习生同款舞蹈入门练习 JYP基本舞步详细分解教程', cover: '/vercel.svg', url: '【蕾｜JYP练习生同款舞蹈入门练习 JYP基本舞步详细分解教程】 https://www.bilibili.com/video/BV15a411374Z/?share_source=copy_web&vd_source=d51bd9d7b47e3f3231783a6b89b8016a' },
  ]), []);

  return (
    <div style={{ marginTop: 20 }}>
      <VideoList items={videos} />
    </div>
  );
}
