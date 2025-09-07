import type { Recipe } from "../types";

import beetroot from '../assets/icons/beetroot.png';
import carrot from '../assets/icons/carrot.png';
import onion from '../assets/icons/onion.png';
import egg from '../assets/icons/egg.png';
import sugar from '../assets/icons/sugar.png';
import vinegar from '../assets/icons/vinegar.png';
import water from '../assets/icons/water.png';

export const coldBorscht: Recipe = {
    id: 212,
    title: 'Борщ холодный',
    ingredients: [
        { key: '1', ingredientIcon: beetroot, ingredientName: 'Свекла', grossWeight: 200, netWeight: 160 },
        { key: '2', ingredientIcon: carrot, ingredientName: 'Морковь', grossWeight: 50, netWeight: 40 },
        { key: '3', ingredientIcon: onion, ingredientName: 'Лук зеленый', grossWeight: 63, netWeight: 50 },
        { key: '4', ingredientIcon: '', ingredientName: 'Огурцы свежие', grossWeight: 125, netWeight: 100 },
        { key: '5', ingredientIcon: egg, ingredientName: 'Яйца', grossWeight: 80, netWeight: 80 },
        { key: '6', ingredientIcon: sugar, ingredientName: 'Сахар', grossWeight: 10, netWeight: 10 },
        { key: '7', ingredientIcon: vinegar, ingredientName: 'Уксус 3%-ный', grossWeight: 16, netWeight: 16 },
        { key: '9', ingredientIcon: water, ingredientName: 'Бульон или вода', grossWeight: 800, netWeight: 800 }
    ],
    output: 1000,
    cooking: 'Свеклу варят целиком, неочищенную без уксуса. После варки свеклу очищают от кожицы. Свеклу и морковь нарезают соломкой. Морковь припускают отдельно, соединяют со свеклой, добавляют горячую воду, соль, сахар, уксус и доводят до кипения и охлаждают. При отпуске в порционную посуду кладут нарезанные огурцы, лук, вареные яйца, наливают борщ, кладут сметану.'
}