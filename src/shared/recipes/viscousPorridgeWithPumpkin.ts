import type { Recipe } from "../types";

import millet from '../assets/icons/millet.png';
import pumpkin from '../assets/icons/pumpkin.png';
import milk from '../assets/icons/milk.png';
import sugar from '../assets/icons/sugar.png';
import cookingOil from '../assets/icons/cooking-oil.png';

export const viscousPorridgeWithPumpkin: Recipe = {
    id: 285,
    title: 'Каша вязкая с тыквой',
    ingredients: [
        { key: '1', ingredientIcon: millet, ingredientName: 'Крупа пшено', grossWeight: 44, netWeight: 44 },
        { key: '2', ingredientIcon: pumpkin, ingredientName: 'Тыква', grossWeight: 100, netWeight: 70 },
        { key: '3', ingredientIcon: milk, ingredientName: 'Молоко', grossWeight: 100, netWeight: 100 },
        { key: '4', ingredientIcon: sugar, ingredientName: 'Сахар', grossWeight: 3, netWeight: 3 },
        { key: '5', ingredientIcon: cookingOil, ingredientName: 'Масло сливочное', grossWeight: 15, netWeight: 15 }
    ],
    output: 215,
    cooking: 'Тыкву очищают от кожицы, удаляют семена и семенную мякоть, нарезают мелкими кубиками, закладывают в кипящее молоко, добавляют соль, сахар и нагревают до кипения. Затем засыпают подготовленную крупу и варят кашу до готовности при слабом кипении. При подаче горячую кашу с тыквой поливают жиром или кладут кусочек масла.'
}