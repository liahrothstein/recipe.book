import { Layout, Typography } from 'antd';

import './MainPage.scss';

export function MainPage() {
    const { Content } = Layout;
    const { Title } = Typography;

    return (
        <Content>
            <Title level={2}>⬅ Пожалуйста, выберите рецепт в списке</Title>
        </Content>
    )
}
