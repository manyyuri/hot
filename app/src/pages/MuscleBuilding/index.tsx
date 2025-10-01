"use client"
import { useEffect, useMemo, useState } from 'react';
import { Card, Row, Col, Typography, Space, Tag, Spin } from 'antd';

const { Title, Paragraph, Text } = Typography;

interface VideoItem {
  id: string;
  title: string;
  cover: string;
  duration?: string;
  b23Url: string;
}

export default function MoreMuscle() {

  const videos: VideoItem[] = useMemo(() => ([
    {
      id: 'b1',
      title: '跟练｜增肌启蒙课程（上肢力量）',
      cover: '/vercel.svg',
      duration: '12:34',
      b23Url: 'https://b23.tv/gJdysfM'
    },
    {
      id: 'b2',
      title: '帕梅拉 - 12分钟 翘臀轰炸 第二弹｜屁屁更翘 臀部激活 弹力带升级版',
      cover: '/vercel.svg',
      b23Url: 'https://www.bilibili.com/video/BV1qZ421W7oc/?share_source=copy_web&vd_source=d51bd9d7b47e3f3231783a6b89b8016a'
    },
    {
      id: 'b3',
      title: '帕梅拉 - 10分钟 上肢塑形魔法 | 告别圆肩大厚背 改善体态 雕刻肩背线条+阻力带',
      cover: '/vercel.svg',
      b23Url: 'https://www.bilibili.com/video/BV1WN411H7MA/?share_source=copy_web&vd_source=d51bd9d7b47e3f3231783a6b89b8016a'
    },
    {
      id: 'b4',
      title: '【自用】帕梅拉10分钟练臀腿丨弹力带',
      cover: '/vercel.svg',
      b23Url: 'https://www.bilibili.com/video/BV1NZ4y1H7Fi/?share_source=copy_web&vd_source=d51bd9d7b47e3f3231783a6b89b8016a'
    },
    {
      id: 'b5',
      title: '【自用帕梅拉】无深蹲，翘臀不粗腿，35min全面臀腿训练（没有弹力带也能练）',
      cover: '/vercel.svg',
      b23Url: 'https://www.bilibili.com/video/BV1XV4y1E7VM/?share_source=copy_web&vd_source=d51bd9d7b47e3f3231783a6b89b8016a'
    },
    {
      id: 'b6',
      title: '帕梅拉 - 10min 翘臀虐燃—无深蹲跳跃&膝盖友好 激活臀部肌肉 翘臀不粗腿 (Pamela Reif Official)',
      cover: '/vercel.svg',
      b23Url: 'https://www.bilibili.com/video/BV1y64y1Y7sR/?share_source=copy_web&vd_source=d51bd9d7b47e3f3231783a6b89b8016a'
    }
  ]), []);

  const buildEmbedFromUrl = (url: string): string | null => {
    const bvMatch = url.match(/\/video\/(BV\w+)/i) || url.match(/[?&#]bvid=(BV\w+)/i);
    const bvId = bvMatch ? bvMatch[1] : null;
    if (bvId) {
      return `https://player.bilibili.com/player.html?bvid=${bvId}&p=1&high_quality=1&autoplay=0`;
    }
    return null;
  };

  const VideoCard = ({ item }: { item: VideoItem }) => {
    const [embed, setEmbed] = useState<string | null>(() => buildEmbedFromUrl(item.b23Url));
    const [resolving, setResolving] = useState(false);

    useEffect(() => {
      if (!embed) {
        let cancelled = false;
        const run = async () => {
          try {
            setResolving(true);
            const resp = await fetch(`/api/resolve?url=${encodeURIComponent(item.b23Url)}`);
            const data = await resp.json();
            const next = data?.bvId
              ? `https://player.bilibili.com/player.html?bvid=${data.bvId}&p=1&high_quality=1&autoplay=0`
              : (data?.finalUrl ? buildEmbedFromUrl(data.finalUrl) : null);
            if (!cancelled) setEmbed(next);
          } finally {
            if (!cancelled) setResolving(false);
          }
        };
        run();
        return () => { cancelled = true; };
      }
    }, [embed, item.b23Url]);

    return (
      <Card
        hoverable
        cover={
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', paddingTop: '56.25%', background: '#000' }}>
              {embed ? (
                <iframe
                  src={embed}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                />)
              : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {resolving ? <Spin /> : <img src={item.cover} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                </div>
              )}
            </div>
            <Tag color="black" style={{ position: 'absolute', right: 8, bottom: 8, opacity: 0.85 }}>
              {item.duration || '—'}
            </Tag>
          </div>
        }
      >
        <Space direction="vertical" size={4} style={{ width: '100%' }}>
          <Text strong ellipsis>{item.title}</Text>
        </Space>
      </Card>
    );
  };

  return (
    <div style={{ marginTop: 20 }}>
      <Title level={2}>增肌训练方案</Title>
      <Paragraph>分表层肌肉和深层肌肉。表层肌肉需要用力量训练的方式，深层肌肉可以用普拉提和 PBT。</Paragraph>

      <Row gutter={[16, 16]}>
        {videos.map(v => (
          <Col xs={24} sm={12} md={8} lg={6} key={v.id}>
            <VideoCard item={v} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
