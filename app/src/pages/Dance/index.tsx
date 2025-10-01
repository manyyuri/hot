"use client"
import { useMemo } from 'react';
import { Typography } from 'antd';
import VideoList, { VideoListItem } from '../../VideoList';

export default function Dance() {
  const videos: VideoListItem[] = useMemo(() => ([
    { id: 'p1', title: '蕾｜Twice Talk That Talk 全曲翻跳+保姆级教程 一定要教会你', cover: '/vercel.svg', url: '【蕾｜Twice Talk That Talk 全曲翻跳+保姆级教程 一定要教会你】 https://www.bilibili.com/video/BV1mg411D7ao' },
    { id: 'p2', title: '蕾｜JYP练习生同款舞蹈入门练习 JYP基本舞步详细分解教程', cover: '/vercel.svg', url: '【蕾｜JYP练习生同款舞蹈入门练习 JYP基本舞步详细分解教程】 https://www.bilibili.com/video/BV15a411374Z' },
  ]), []);

  return (
    <div style={{ marginTop: 20 }}>
      <VideoList items={videos} />
    </div>
  );
}
