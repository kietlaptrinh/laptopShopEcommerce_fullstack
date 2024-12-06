export const categorizeSpecifications = (specifications) => {
  return specifications.reduce((acc, specification) => {
    const { category } = specification;
    if (!acc[category.name]) {
      acc[category.name] = [];
    }
    acc[category.name].push(specification);
    return acc;
  }, {});
};
