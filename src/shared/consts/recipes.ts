import type { Recipe } from "../types";

import {
    borschtWithCabbageAndPotatoes,
    buckwheatPorridgeCrumbly,
    viscousPorridgeWithPumpkin,
    mainWhiteSauce,
    ricePorridgeCrumbly,
    mainRedSauce,
    coldBorscht
} from "../recipes";

export const recipes: Recipe[] = [
    borschtWithCabbageAndPotatoes,
    coldBorscht,
    buckwheatPorridgeCrumbly,
    ricePorridgeCrumbly,
    viscousPorridgeWithPumpkin,
    mainRedSauce,
    mainWhiteSauce
];