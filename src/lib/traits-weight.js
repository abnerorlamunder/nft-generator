import traits from './traits.js';

export const traitsWeight = {
  type: {
    [traits.type.regular]: [99, 990],
    [traits.type.gold]: [0.01, 10]
  },
  background: {
    [traits.background.gold]: [0.01, 10],
    [traits.background.silver]: [0.02, 20],
    [traits.background.tan]: [0.07, 70],
    [traits.background.amsterdamBlue]: [18, 180],
    [traits.background.gray]: [18, 180],
    [traits.background.black]: [18, 180],
    [traits.background.white]: [18, 180],
    [traits.background.pink]: [18, 180],
  },
  border: {
    [traits.border.empty]: [0.01, 10],
    [traits.border.gold]: [0.02, 20],
    [traits.border.silver]: [0.07, 70],
    [traits.border.black]: [18, 180],
    [traits.border.white]: [18, 180],
    [traits.border.pink]: [18, 180],
    [traits.border.dashed]: [18, 180],
    [traits.border.x]: [18, 180],
  },
  icon: {
    [traits.icon.icon1]: [0.01, 10],
    [traits.icon.icon2]: [0.02, 20],
    [traits.icon.icon3]: [0.07, 70],
    [traits.icon.icon4]: [18, 180],
    [traits.icon.icon5]: [18, 180],
    [traits.icon.icon6]: [18, 180],
    [traits.icon.icon7]: [18, 180],
    [traits.icon.icon8]: [18, 180],
  },
}