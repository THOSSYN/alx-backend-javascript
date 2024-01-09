const weakMap = new WeakMap();

function queryAPI(obj) {
  if (!weakMap.has(obj)) {
    weakMap.set(obj, 1);
  } else {
    const callCount = weakMap.get(obj);
    weakMap.set(obj, callCount + 1);
  }

  const callCount = weakMap.get(obj);

  if (callCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { weakMap, queryAPI };
