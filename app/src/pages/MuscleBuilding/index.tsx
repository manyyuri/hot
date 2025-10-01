"use client"
import { useMemo, useState } from 'react';
import { Card, Row, Col, Typography, Modal, Button, Space, Tag } from 'antd';

const { Title, Paragraph, Text } = Typography;

interface VideoItem {
  id: string;
  title: string;
  cover: string;
  duration?: string;
  b23Url: string;
}

export default function MoreMuscle() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [embedUrl, setEmbedUrl] = useState<string | null>(null);

  const videos: VideoItem[] = useMemo(() => ([
    {
      id: 'b1',
      title: '跟练｜增肌启蒙课程（上肢力量）',
      cover: '/vercel.svg',
      duration: '12:34',
      b23Url: 'https://b23.tv/gJdysfM'
    }
  ]), []);

  const resolveAndPlay = async (url: string) => {
    try {
      setLoading(true);
      const resp = await fetch(`/api/resolve?url=${encodeURIComponent(url)}`);
      const data = await resp.json();
      // Prefer BV id if present, construct embed player url
      const player = data?.bvId
        ? `https://player.bilibili.com/player.html?bvid=${data.bvId}&p=1&high_quality=1&autoplay=1`
        : `https://player.bilibili.com/player.html?isOutside=true&autoplay=1&url=${encodeURIComponent(data?.finalUrl || url)}`;
      setEmbedUrl(player);
      setOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: 20 }}>
      <Title level={2}>增肌训练方案</Title>
      <Paragraph>分表层肌肉和深层肌肉。表层肌肉需要用力量训练的方式，深层肌肉可以用普拉提和 PBT。</Paragraph>

      <Row gutter={[16, 16]}>
        {videos.map(v => (
          <Col xs={24} sm={12} md={8} lg={6} key={v.id}>
            <Card
              hoverable
              cover={
                <div style={{ position: 'relative' }}>
                  <img src={v.cover} alt={v.title} style={{ width: '100%', height: 140, objectFit: 'cover' }} />
                  <Tag color="black" style={{ position: 'absolute', right: 8, bottom: 8, opacity: 0.85 }}>
                    {v.duration || '—'}
                  </Tag>
                </div>
              }
              onClick={() => resolveAndPlay(v.b23Url)}
            >
              <Space direction="vertical" size={4} style={{ width: '100%' }}>
                <Text strong ellipsis>{v.title}</Text>
                <Text type="secondary" ellipsis>B站视频 · 点击横屏播放</Text>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width="80vw"
        styles={{ body: { padding: 0 } as any }}
      >
        <div style={{ position: 'relative', paddingTop: '56.25%', background: '#000' }}>
          {embedUrl && (
            <iframe
              src={embedUrl}
              allow="autoplay; fullscreen"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            />
          )}
        </div>
      </Modal>
    </div>
  );
}
