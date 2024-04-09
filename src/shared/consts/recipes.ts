import type { Recipe } from "../types";

import beetroot from '../assets/icons/beetroot.png';
import cabbage from '../assets/icons/cabbage.png';
import carrot from '../assets/icons/carrot.png';
import cookingOil from '../assets/icons/cooking-oil.png';
import onion from '../assets/icons/onion.png';
import potato from '../assets/icons/potato.png';
import sugar from '../assets/icons/sugar.png';
import tomato from '../assets/icons/tomato.png';
import vinegar from '../assets/icons/vinegar.png';
import water from '../assets/icons/water.png';

export const recipes: Recipe[] = [
    {
        id: 133,
        title: 'Борщ с капустой и картофелем',
        ingredients: [
            { key: '1', ingredientIcon: beetroot, ingredientName: 'Свекла', grossWeight: 200, netWeight: 160 },
            { key: '2', ingredientIcon: cabbage, ingredientName: 'Капуста свежая', grossWeight: 100, netWeight: 80 },
            { key: '3', ingredientIcon: cabbage, ingredientName: 'Или квашеная', grossWeight: 86, netWeight: 60 },
            { key: '4', ingredientIcon: potato, ingredientName: 'Картофель', grossWeight: 107, netWeight: 80 },
            { key: '5', ingredientIcon: carrot, ingredientName: 'Морковь', grossWeight: 50, netWeight: 40 },
            { key: '6', ingredientIcon: onion, ingredientName: 'Лук репчатый', grossWeight: 48, netWeight: 40 },
            { key: '7', ingredientIcon: tomato, ingredientName: 'Томатное пюре', grossWeight: 30, netWeight: 30 },
            { key: '8', ingredientIcon: cookingOil, ingredientName: 'Кулинарный жир', grossWeight: 20, netWeight: 20 },
            { key: '9', ingredientIcon: sugar, ingredientName: 'Сахар', grossWeight: 10, netWeight: 10 },
            { key: '10', ingredientIcon: vinegar, ingredientName: 'Уксус 3%-ный', grossWeight: 16, netWeight: 16 },
            { key: '11', ingredientIcon: water, ingredientName: 'Бульон или вода', grossWeight: 800, netWeight: 800 }
        ],
        output: 1000,
        cooking: 'В кипящий бульон или воду закладывают нашинкованную свежую капусту, доводят до кипения, затем добавляют нарезанный брусочками картофель, варят 10—15 мин, кладут пассерованные овощи, тушеную или вареную свеклу и варят борщ до готовности. За 5—10 мин до окончания варки добавляют соль, сахар, специи. При использовании квашеной капусты, ее в тушеном виде вводят в борщ вместе со свеклой. Борщ можно заправить пассерованной мукой, разведенной бульоном или водой (10 г муки на 1000 г борща).'
    }
];