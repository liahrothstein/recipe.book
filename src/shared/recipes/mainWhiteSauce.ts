import type { Recipe } from "../types";

import cookingOil from '../assets/icons/cooking-oil.png';
import onion from '../assets/icons/onion.png';
import water from '../assets/icons/water.png';
import wheatFlour from '../assets/icons/wheat-flour.png';

export const mainWhiteSauce: Recipe = {
    id: 568,
    title: 'Соус белый основной',
    ingredients: [
        { key: '1', ingredientIcon: water, ingredientName: 'Бульон или вода', grossWeight: 1100, netWeight: 1100 },
        { key: '2', ingredientIcon: cookingOil, ingredientName: 'Кулинарный жир', grossWeight: 50, netWeight: 50 },
        { key: '3', ingredientIcon: wheatFlour, ingredientName: 'Мука пшеничная', grossWeight: 50, netWeight: 50 },
        { key: '4', ingredientIcon: onion, ingredientName: 'Лук репчатый', grossWeight: 48, netWeight: 40 }
    ],
    output: 1000,
    cooking: 'В растопленный жир всыпают просеянную муку и пассеруют при непрерывном помешивании, не допуская пригорания. Правильно пассерованная мука должна иметь слегка кремовый цвет. В пассерованную муку, охлажденную до 60—70 °С вливают четвертую часть горячего бульона и вымешивают до образования однородной массы, затем постепенно добавляют оставшийся бульон. После этого в соус кладут нарезанные лук и варят 25—30 мин. В конце варки добавляют соль, перец черный горошком, лавровый лист. Затем соус процеживают, протирая при этом разварившиеся овощи и доводят до кипения.'
}