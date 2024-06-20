import type { Recipe } from "../types";

import {
    borschtWithCabbageAndPotatoes,
    buckwheatPorridgeCrumbly,
    viscousPorridgeWithPumpkin,
    mainWhiteSauce,
    ricePorridgeCrumbly,
    mainRedSauce,
    coldBorscht,
    potatoSoupWithPasta
} from "../recipes";

export const recipes: Recipe[] = [
    borschtWithCabbageAndPotatoes,
    potatoSoupWithPasta,
    coldBorscht,
    buckwheatPorridgeCrumbly,
    ricePorridgeCrumbly,
    viscousPorridgeWithPumpkin,
    mainRedSauce,
    mainWhiteSauce
];