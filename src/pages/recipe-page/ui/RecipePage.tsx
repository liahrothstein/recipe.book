import { Layout, Typography } from 'antd';

export function RecipePage() {
    const { Header, Footer, Sider, Content } = Layout;
    const { Title, Text } = Typography;

    return (
        <Layout style={{ height: '100dvh' }}>
            <Sider width="25%">

            </Sider>
            <Layout>
                <Header>
                    <Title level={1} style={{ color: 'silver' }}>Книга рецептов</Title>
                </Header>
                <Content>

                </Content>
                <Footer>
                    <Text>© 2024 Все права защищены</Text>
                </Footer>
            </Layout>
        </Layout>
    )
}
