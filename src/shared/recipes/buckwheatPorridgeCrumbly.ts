import type { Recipe } from "../types";

import buckwheat from '../assets/icons/buckwheat.png';
import water from '../assets/icons/water.png';
import salt from '../assets/icons/salt.png';
import cookingOil from '../assets/icons/cooking-oil.png';

export const buckwheatPorridgeCrumbly: Recipe = {
    id: 282,
    title: 'Каша гречневая рассыпчатая',
    ingredients: [
        { key: '1', ingredientIcon: buckwheat, ingredientName: 'Крупа гречневая', grossWeight: 420, netWeight: 417 },
        { key: '2', ingredientIcon: water, ingredientName: 'Вода', grossWeight: 790, netWeight: 790 },
        { key: '3', ingredientIcon: salt, ingredientName: 'Соль', grossWeight: 10, netWeight: 10 },
        { key: '4', ingredientIcon: cookingOil, ingredientName: 'Масло сливочное', grossWeight: 100, netWeight: 100 },
    ],
    output: 1000,
    cooking: 'Подготовленную для варки крупу всыпают в подсоленную кипящую жидкость. При этом всплывшие пустотелые зерна удаляют. Кашу варят до загустения, помешивая. Жир можно добавлять во время варки или использовать его, поливая кашу при отпуске. Когда каша сделается густой, перемешивание прекращают, закрывают котел крышкой и дают каше упреть; за это время она приобретает своеобразный приятный запах и цвет. Для упревания требуется 1—1,5 ч.'
}