import { traitsWeight } from "./traits-weight.js";

export function averageTrait(element) {
  return (traitsWeight.background[element.background][0] + traitsWeight.border[element.border][0] + traitsWeight.icon[element.icon][0] + traitsWeight.type[element.type][0]) / 4;
}

export function statistic(element) {
  return traitsWeight.background[element.background][0] / 100 * traitsWeight.border[element.border][0] / 100 * traitsWeight.icon[element.icon][0] / 100 * traitsWeight.type[element.type][0] / 100
}

export function rarityScore(element) {
  return (1 / (traitsWeight.background[element.background][1] / 1000)) + (1 / (traitsWeight.border[element.border][1] / 1000)) + (1 / (traitsWeight.icon[element.icon][1] / 1000)) + (1 / (traitsWeight.type[element.type][1] / 1000));
}