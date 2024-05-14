import { Layout, Typography } from 'antd';

import './AppHeader.scss';

export function AppHeader() {
    const { Header } = Layout;
    const { Title } = Typography;

    return (
        <Header>
            <Title level={1}>📕 Книга рецептов</Title>
        </Header>
    )
}
