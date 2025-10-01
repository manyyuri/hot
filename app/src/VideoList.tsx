"use client"
import { useEffect, useMemo, useState } from 'react';
import { Card, Row, Col, Typography, Space, Tag, Spin, Button } from 'antd';

const { Title, Text, Paragraph } = Typography;

export interface VideoListItem {
  id: string;
  title: string;
  cover: string;
  duration?: string;
  url: string; // can be bilibili page, b23 short, or any external link
}

export interface VideoListProps {
  heading?: string;
  description?: string;
  items: VideoListItem[];
}

function buildBilibiliEmbedFromUrl(url: string): string | null {
  const bvMatch = url.match(/\/video\/(BV\w+)/i) || url.match(/[?&#]bvid=(BV\w+)/i);
  const bvId = bvMatch ? bvMatch[1] : null;
  if (bvId) {
    return `https://player.bilibili.com/player.html?bvid=${bvId}&p=1&high_quality=1&autoplay=0`;
  }
  return null;
}

function isLikelyBilibili(url: string): boolean {
  return /bilibili\.com|b23\.tv/i.test(url);
}

function VideoCard({ item }: { item: VideoListItem }) {
  const [embed, setEmbed] = useState<string | null>(() => buildBilibiliEmbedFromUrl(item.url));
  const [resolving, setResolving] = useState(false);

  useEffect(() => {
    if (!embed && isLikelyBilibili(item.url)) {
      let cancelled = false;
      const run = async () => {
        try {
          setResolving(true);
          const resp = await fetch(`/api/resolve?url=${encodeURIComponent(item.url)}`);
          const data = await resp.json();
          const next = data?.bvId
            ? `https://player.bilibili.com/player.html?bvid=${data.bvId}&p=1&high_quality=1&autoplay=0`
            : (data?.finalUrl ? buildBilibiliEmbedFromUrl(data.finalUrl) : null);
          if (!cancelled) setEmbed(next);
        } finally {
          if (!cancelled) setResolving(false);
        }
      };
      run();
      return () => { cancelled = true; };
    }
  }, [embed, item.url]);


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
              />
            ) : (
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {resolving ? (
                  <Spin />
                ) : (
                  <img src={item.cover} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                )}
              </div>
            )}
          </div>
          {item.duration && (
            <Tag color="black" style={{ position: 'absolute', right: 8, bottom: 8, opacity: 0.85, pointerEvents: 'none' }}>
              {item.duration}
            </Tag>
          )}
        </div>
      }
    >
      <Space direction="vertical" size={8} style={{ width: '100%' }}>
        <Text strong ellipsis>{item.title}</Text>
      </Space>
    </Card>
  );
}

export default function VideoList({ heading, description, items }: VideoListProps) {
  const memoItems = useMemo(() => items, [items]);

  return (
    <div style={{ marginTop: 20 }}>
      {heading && <Title level={2}>{heading}</Title>}
      {description && <Paragraph>{description}</Paragraph>}

      <Row gutter={[16, 16]}>
        {memoItems.map(v => (
          <Col xs={24} sm={12} md={8} lg={6} key={v.id}>
            <VideoCard item={v} />
          </Col>
        ))}
      </Row>
    </div>
  );
}


