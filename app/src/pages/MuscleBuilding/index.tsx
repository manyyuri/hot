"use client"
import { useMemo } from 'react';
import { Typography } from 'antd';
import VideoList, { VideoListItem } from '../../VideoList';

const { Title, Paragraph } = Typography;

export default function MoreMuscle() {

  const videos: VideoListItem[] = useMemo(() => ([
    { id: 'b1', title: '跟练｜增肌启蒙课程（上肢力量）', cover: '/vercel.svg', duration: '12:34', url: 'https://b23.tv/gJdysfM' },
    { id: 'b2', title: '帕梅拉 - 12分钟 翘臀轰炸 第二弹｜屁屁更翘 臀部激活 弹力带升级版', cover: '/vercel.svg', url: 'https://www.bilibili.com/video/BV1qZ421W7oc/?share_source=copy_web&vd_source=d51bd9d7b47e3f3231783a6b89b8016a' },
    { id: 'b3', title: '帕梅拉 - 10分钟 上肢塑形魔法 | 告别圆肩大厚背 改善体态 雕刻肩背线条+阻力带', cover: '/vercel.svg', url: 'https://www.bilibili.com/video/BV1WN411H7MA/?share_source=copy_web&vd_source=d51bd9d7b47e3f3231783a6b89b8016a' },
    { id: 'b4', title: '【自用】帕梅拉10分钟练臀腿丨弹力带', cover: '/vercel.svg', url: 'https://www.bilibili.com/video/BV1NZ4y1H7Fi/?share_source=copy_web&vd_source=d51bd9d7b47e3f3231783a6b89b8016a' },
    { id: 'b5', title: '【自用帕梅拉】无深蹲，翘臀不粗腿，35min全面臀腿训练（没有弹力带也能练）', cover: '/vercel.svg', url: 'https://www.bilibili.com/video/BV1XV4y1E7VM/?share_source=copy_web&vd_source=d51bd9d7b47e3f3231783a6b89b8016a' },
    { id: 'b6', title: '帕梅拉 - 10min 翘臀虐燃—无深蹲跳跃&膝盖友好 激活臀部肌肉 翘臀不粗腿 (Pamela Reif Official)', cover: '/vercel.svg', url: 'https://www.bilibili.com/video/BV1y64y1Y7sR/?share_source=copy_web&vd_source=d51bd9d7b47e3f3231783a6b89b8016a' }
  ]), []);

  return (
    <div style={{ marginTop: 20 }}>
      <Title level={2}>增肌训练方案</Title>
      <Paragraph>分表层肌肉和深层肌肉。表层肌肉需要用力量训练的方式，深层肌肉可以用普拉提和 PBT。</Paragraph>

      <VideoList items={videos} />
    </div>
  );
}
