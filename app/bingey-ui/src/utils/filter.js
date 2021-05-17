export const filter = (values, filters) => {
  return values?.filter((value) => isValid(value, filters));
};

const isValid = (value, filters) => {
  let filter;

  for (let i = 0; i < filters.length; i++) {
    filter = filters[i];

    if (Array.isArray(value[filter.field])) {
      if (!value[filter.field].includes(filter.value)) {
        return false;
      }
    } else {
      if (value[filter.field] != filter.value) {
        return false;
      }
    }
  }

  return true;
};
