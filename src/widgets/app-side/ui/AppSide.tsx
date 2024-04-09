import { Layout, List } from 'antd';
import { Link } from 'react-router-dom';

import { recipes } from '@constants/index';

export function AppSide() {
    const { Sider } = Layout;

    return (
        <Sider width="20%">
            <List
                dataSource={recipes}
                renderItem={(recipe) => (
                    <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                )}>
            </List>
        </Sider>
    )
}
