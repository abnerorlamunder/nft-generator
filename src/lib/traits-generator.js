const generateTraits = () => {
  let generated = [];

  for (let type = 1; type <= 2; type++) {
    for (let background = 1; background <= 6; background++) {
      for (let border = 1; border <= 6; border++) {
        for (let icon = 1; icon <= 8; icon++) {
          generated.push({
            type,
            background,
            border,
            icon
          })
        }
      }
    }
  }
  return generated;
}

export default generateTraits;