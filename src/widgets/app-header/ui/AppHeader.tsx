import { Layout, Typography } from 'antd';

export function AppHeader() {
    const { Header } = Layout;
    const { Title } = Typography;

    return (
        <Header>
            <Title level={1} style={{ color: 'silver' }}>Книга рецептов</Title>
        </Header>
    )
}
