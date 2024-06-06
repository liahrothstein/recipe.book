import type { Recipe } from "../types";

import cookingOil from '../assets/icons/cooking-oil.png';
import onion from '../assets/icons/onion.png';
import water from '../assets/icons/water.png';
import wheatFlour from '../assets/icons/wheat-flour.png';
import tomato from '../assets/icons/tomato.png';
import carrot from '../assets/icons/carrot.png';
import sugar from '../assets/icons/sugar.png';

export const mainRedSauce: Recipe = {
    id: 558,
    title: 'Соус красный основной',
    ingredients: [
        { key: '1', ingredientIcon: water, ingredientName: 'Бульон или вода', grossWeight: 1000, netWeight: 1000 },
        { key: '2', ingredientIcon: cookingOil, ingredientName: 'Кулинарный жир', grossWeight: 30, netWeight: 30 },
        { key: '3', ingredientIcon: wheatFlour, ingredientName: 'Мука пшеничная', grossWeight: 50, netWeight: 50 },
        { key: '4', ingredientIcon: tomato, ingredientName: 'Томатное пюре', grossWeight: 200, netWeight: 200 },
        { key: '5', ingredientIcon: carrot, ingredientName: 'Морковь', grossWeight: 100, netWeight: 80 },
        { key: '6', ingredientIcon: onion, ingredientName: 'Лук репчатый', grossWeight: 48, netWeight: 40 },
        { key: '7', ingredientIcon: sugar, ingredientName: 'Сахар', grossWeight: 25, netWeight: 25 }
    ],
    output: 1000,
    cooking: 'Нарезанные лук, морковь, петрушку пассеруют с жиром, добавляют томатное пюре и продолжают пассерование еще 10—15 мин. Просеянную пшеничную муку пассеруют при температуре 150—160 °С, периодически помешивая в наплитной посуде или на противне в жарочном шкафу слоем не более 4 см до приобретения светло- коричневого цвета. Охлажденную до 70—80 °С мучную пассеровку разводят теплым бульоном в соотношении 1:4, тщательно размешивают и вводят в кипящий коричневый бульон, затем добавляют пассерованные с томатным пюре овощи и при слабом кипении варят 45—60 мин. В конце варки добавляют соль, сахар, перец черный горошком, лавровый лист. Соус процеживают, протирая в него разварившиеся овощи, и доводят до кипения.'
}