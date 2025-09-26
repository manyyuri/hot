import { Menu } from "antd";

export default function Home() {
  return (
    <div>
        身材管理
        <Menu defaultValue={1} items={[{key: 1, label: '今日计划'},{key: 2, label: '减脂'},{key: 3, label: '增肌'},{key: 4, label: '软开'},{key: 5, label: '体态'},{key: 6, label: '资料'},]}/>
    </div>
  );
}
