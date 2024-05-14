import { Layout, Typography, Table } from 'antd';
import { useParams } from 'react-router-dom';

import type { TableProps } from 'antd'
import type { Product, Recipe } from '../../../shared/types';
import { recipes } from '@constants/recipes';

import './RecipePage.scss';

export function RecipePage() {
    const { Content } = Layout;
    const { Title, Paragraph } = Typography;
    const { id } = useParams();

    const recipeColumns: TableProps<Product>['columns'] = [
        {
            dataIndex: 'ingredientIcon',
            key: 'ingredientIcon',
            render: (icon) => (<img src={icon} />)
        },
        {
            title: 'Продукт',
            dataIndex: 'ingredientName',
            key: 'ingredientName'
        },
        {
            title: 'БРУТТО (г)',
            dataIndex: 'grossWeight',
            key: 'grossWeight'
        },
        {
            title: 'НЕТТО (г)',
            dataIndex: 'netWeight',
            key: 'netWeight'
        }
    ];

    let recipe: Recipe | undefined = ((id !== undefined) ? recipes.find((recipe) => (recipe.id === +id)) : undefined);
    let recipeIngredients: Product[] | undefined = ((id !== undefined) ? recipe?.ingredients : undefined);

    return (
        <Content>
            <Title level={2}>{recipe?.title}</Title>
            <Table
                dataSource={recipeIngredients}
                columns={recipeColumns}
                pagination={false} />
            <Title level={4}>{`Выход готового блюда ${recipe?.output}г`}</Title>
            <Paragraph>{recipe?.cooking}</Paragraph>
        </Content>
    )
}
