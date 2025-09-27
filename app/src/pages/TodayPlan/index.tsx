"use client"
import { Card, Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface Exercise {
  name: string;
  sets?: string;
  reps?: string;
  duration?: string;
}

interface ScheduleContent {
  type: string;
  description: string;
  exercises: Exercise[];
  duration: string;
}

export default function Schedule() {
  const scheduleData: ScheduleContent = {
    type: '123训练',
    description: '基础体能训练，包含有氧和无氧结合',
    exercises: [
      { name: '热身', duration: '10分钟' },
      { name: '深蹲', sets: '3组', reps: '15次' },
      { name: '俯卧撑', sets: '3组', reps: '12次' },
      { name: '平板支撑', sets: '3组', duration: '30秒' }
    ],
    duration: '60分钟'
  };

  return (
    <div style={{ marginTop: 20 }}>
      <Title level={2}>今日训练计划</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card 
            title={scheduleData.type} 
            variant={'borderless'}
            style={{ height: '100%' }}
          >
            <Paragraph>{scheduleData.description}</Paragraph>
            
            <div>
              <Title level={4}>训练内容</Title>
              <ul>
                {scheduleData.exercises.map((exercise, index) => (
                  <li key={index}>
                    {exercise.name}
                    {exercise.sets && ` - ${exercise.sets}`}
                    {exercise.reps && ` × ${exercise.reps}`}
                    {exercise.duration && ` (${exercise.duration})`}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Title level={4}>训练建议</Title>
              <p>时长：{scheduleData.duration}</p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
