import type { Recipe } from "../types";

import rice from '../assets/icons/rice.png';
import water from '../assets/icons/water.png';
import salt from '../assets/icons/salt.png';
import cookingOil from '../assets/icons/cooking-oil.png';

export const ricePorridgeCrumbly: Recipe = {
    id: 282.1,
    title: 'Каша рисовая рассыпчатая',
    ingredients: [
        { key: '1', ingredientIcon: rice, ingredientName: 'Крупа рисовая', grossWeight: 360, netWeight: 357 },
        { key: '2', ingredientIcon: water, ingredientName: 'Вода', grossWeight: 750, netWeight: 750 },
        { key: '3', ingredientIcon: salt, ingredientName: 'Соль', grossWeight: 10, netWeight: 10 },
        { key: '4', ingredientIcon: cookingOil, ingredientName: 'Масло сливочное', grossWeight: 100, netWeight: 100 }
    ],
    output: 1000,
    cooking: 'Подготовленную для варки крупу всыпают в подсоленную кипящую жидкость. При этом всплывшие пустотелые зерна удаляют. Кашу варят до загустения, помешивая. Жир можно добавлять во время варки или использовать его, поливая кашу при отпуске. Когда каша сделается густой, перемешивание прекращают, закрывают котел крышкой и дают каше упреть; за это время она приобретает своеобразный приятный запах и цвет. Для упревания требуется около 1 ч.'
}