const ASCENDING_ORDER = ['ASC', 'asc'];

const compareValues = (x, y) => {
  return x < y ? -1 : x == y ? 0 : 1;
};

const compare = (x, y, fields) => {
  let field;
  let comparison;

  for (let i = 0; i < fields.length; i++) {
    field = fields[i];
    comparison = compareValues(x[field.name], y[field.name]);

    if (comparison != 0) {
      if (ASCENDING_ORDER.includes(field.order)) {
        return comparison;
      }

      return comparison * -1;
    }
  }

  return 0;
};

const mergeSort = (values, fields) => {
  const merge = (left, right) => {
    const mergedValues = [];

    while (left.length && right.length) {
      if (compare(left[0], right[0], fields) < 0) {
        mergedValues.push(left.shift());
      } else {
        mergedValues.push(right.shift());
      }
    }

    return [...mergedValues, ...left, ...right];
  };

  const mergeSortLocal = (values) => {
    const half = values.length / 2;

    if (values.length < 2) {
      return values;
    }

    const left = values.splice(0, half);
    return merge(mergeSortLocal(left), mergeSortLocal(values), fields);
  };

  return mergeSortLocal(values);
};

const insertionSort = (values, fields) => {
  const n = values.length;

  for (let i = 1; i < n; i++) {
    let current = values[i];
    let j = i - 1;

    while (j > -1 && compare(current, values[j], fields) < 0) {
      values[j + 1] = values[j];
      j--;
    }

    values[j + 1] = current;
  }

  return values;
};

export const sort = (values, fields) => {
  if (!values) {
    return null;
  }

  const valuesCopy = [...values];

  return valuesCopy.length < 16
    ? insertionSort(valuesCopy, fields)
    : mergeSort(valuesCopy, fields);
};
