import type { Recipe } from "../types";

import potato from '../assets/icons/potato.png';
import carrot from '../assets/icons/carrot.png';
import onion from '../assets/icons/onion.png';
import cabbage from '../assets/icons/cabbage.png';
import cookingOil from '../assets/icons/cooking-oil.png';
import tomato from '../assets/icons/tomato.png';
import pumpkin from '../assets/icons/pumpkin.png';
import zucchini from '../assets/icons/zucchini.png';
import peas from '../assets/icons/peas.png';
import garlic from '../assets/icons/garlic.png';

export const vegetableStew: Recipe = {
    id: 233,
    title: 'Рагу овощное',
    ingredients: [
        { key: '1', ingredientIcon: potato, ingredientName: 'Картофель', grossWeight: 67, netWeight: 50 },
        { key: '2', ingredientIcon: carrot, ingredientName: 'Морковь', grossWeight: 46, netWeight: 31 },
        { key: '3', ingredientIcon: onion, ingredientName: 'Лук репчатый', grossWeight: 50, netWeight: 25 },
        { key: '4', ingredientIcon: cabbage, ingredientName: 'Капуста свежая белокочанная', grossWeight: 30, netWeight: 27 },
        { key: '5', ingredientIcon: cookingOil, ingredientName: 'Кулинарный жир', grossWeight: 10, netWeight: 10 },
        { key: '6', ingredientIcon: tomato, ingredientName: 'Соус томатный', grossWeight: 75, netWeight: 75 },
        { key: '7', ingredientIcon: pumpkin, ingredientName: 'Тыква', grossWeight: 43, netWeight: 30 },
        { key: '8', ingredientIcon: zucchini, ingredientName: 'Или кабачки', grossWeight: 45, netWeight: 30 },
        { key: '9', ingredientIcon: peas, ingredientName: 'Горошек зеленый консервированный', grossWeight: 31, netWeight: 20 },
        { key: '10', ingredientIcon: garlic, ingredientName: 'Чеснок', grossWeight: 1, netWeight: 0.8 }
    ],
    output: 260,
    cooking: 'Нарезанный кубиками картофель и коренья слегка обжаривают, лук пассеруют. Капусту белокочанную нарезают шашками, припускают. Затем картофель и овощи соединяют с соусом томатным и тушат 10 мин. После этого добавляют нарезанную сырую тыкву или кабачки, очищенные от кожицы и семян, припущенную белокочанную капусту и продолжают тушить 20 мин. За 5—10 мин до готовности кладут горошек зеленый консервированный, растертый чеснок и специи. При отпуске рагу поливают жиром и посыпают зеленью.'
}