import type { Recipe } from "../types";

import potato from '../assets/icons/potato.png';
import carrot from '../assets/icons/carrot.png';
import onion from '../assets/icons/onion.png';
import cabbage from '../assets/icons/cabbage.png';
import cookingOil from '../assets/icons/cooking-oil.png';
import tomato from '../assets/icons/tomato.png';
import water from '../assets/icons/water.png';

export const cabbageSoupWithPotatoes: Recipe = {
    id: 145,
    title: 'Щи из свежей капусты с картофелем',
    ingredients: [
        { key: '1', ingredientIcon: cabbage, ingredientName: 'Капуста белокочанная', grossWeight: 300, netWeight: 240 },
        { key: '2', ingredientIcon: potato, ingredientName: 'Картофель', grossWeight: 160, netWeight: 120 },
        { key: '3', ingredientIcon: carrot, ingredientName: 'Морковь', grossWeight: 50, netWeight: 40 },
        { key: '4', ingredientIcon: onion, ingredientName: 'Лук репчатый', grossWeight: 48, netWeight: 40 },
        { key: '5', ingredientIcon: tomato, ingredientName: 'Помидоры свежие', grossWeight: 94, netWeight: 80 },
        { key: '6', ingredientIcon: cookingOil, ingredientName: 'Кулинарный жир', grossWeight: 20, netWeight: 20 },
        { key: '7', ingredientIcon: water, ingredientName: 'Бульон или вода', grossWeight: 650, netWeight: 650 }
    ],
    output: 1000,
    cooking: 'В кипящий бульон или воду кладут картофель и варят 10—15 мин. Затем кладут подготовленную свежую капусту, доводят до кипения, добавляют пассерованные морковь, лук и варят до готовности. За 5—10 мин до окончания варки в щи добавляют нарезанные дольками помидоры, соль и специи.'
}