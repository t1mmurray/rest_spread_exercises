// 1. Refactor

const filterOutOdds = (...nums) => {
  return nums.filter((n) => n % 2 === 0);
};

// 2. findMin

const findMin = (...nums) => {
  return nums.reduce((min, currentValue) =>
    min < currentValue ? min : currentValue
  );
};

// 3, mergeObjects

const mergeObjects = (object1, object2) => {
  return { ...object1, ...object2 };
};

// 4. doubleAndReturnArgs

const doubleAndReturnArgs = (arr, ...values) => {
  let doubledArr = values.map((v) => v * 2);
  return [...arr, ...doubledArr];
};

// 5. Slice and dice

function removeRandom(items) {
  let index = Math.floor(Math.random() * items.length);
  return [...items.slice(0, index), ...items.slice(index + 1)];
}

const extend = (array1, array2) => {
  return [...array1, ...array2];
};

const addKeyVal = (obj, key, val) => {
  return { ...obj, [key]: val };
};

const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const update = (obj, key, value) => {
  return { ...obj, [key]: value };
};
