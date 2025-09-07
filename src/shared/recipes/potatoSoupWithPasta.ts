import type { Recipe } from "../types";

import potato from '../assets/icons/potato.png';
import carrot from '../assets/icons/carrot.png';
import onion from '../assets/icons/onion.png';
import cookingOil from '../assets/icons/cooking-oil.png';
import water from '../assets/icons/water.png';

export const potatoSoupWithPasta: Recipe = {
    id: 163,
    title: 'Суп картофельный с макаронными изделиями',
    ingredients: [
        { key: '1', ingredientIcon: potato, ingredientName: 'Картофель', grossWeight: 400, netWeight: 300 },
        { key: '2', ingredientIcon: '', ingredientName: 'Макароны, лапша, вермишель, фигурные изделия', grossWeight: 40, netWeight: 40 },
        { key: '3', ingredientIcon: carrot, ingredientName: 'Морковь', grossWeight: 50, netWeight: 40 },
        { key: '4', ingredientIcon: onion, ingredientName: 'Лук репчатый', grossWeight: 24, netWeight: 20 },
        { key: '5', ingredientIcon: cookingOil, ingredientName: 'Кулинарный жир', grossWeight: 10, netWeight: 10 },
        { key: '6', ingredientIcon: water, ingredientName: 'Бульон или вода', grossWeight: 750, netWeight: 750 }
    ],
    output: 1000,
    cooking: 'Овощи нарезают: картофель — кубиками, лук и морковь шинкуют. Морковь и лук пассеруют. В кипящий бульон или воду кладут макароны с картофелем и варят 10—15 мин, затем добавляют пассерованные овощи и варят суп до готовности. Лапшу кладут в суп одновременно с картофелем, а вермишель и фигурные изделия за 10—15 мин до готовности супа. Добавляют соль, специи.'
}