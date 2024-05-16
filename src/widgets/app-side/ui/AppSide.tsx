import { Layout, List, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { recipes } from '@constants/index';

import './AppSide.scss';

export function AppSide() {
    const { Sider } = Layout;
    const { Title } = Typography;

    return (
        <Sider width="20%">
            <List
                header={<Title level={5}>📑 Список рецептов</Title>}
                dataSource={recipes}
                renderItem={(recipe) => (
                    <List.Item>
                        <Link to={`/recipe/${recipe.id}`}>{`🏷 ${recipe.title}`}</Link>
                    </List.Item>
                )}>
            </List>
        </Sider>
    )
}
