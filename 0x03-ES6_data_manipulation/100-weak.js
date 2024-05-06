const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!('protocol' in endpoint) || !('name' in endpoint)) {
    throw new Error();
  }

  if (!weakMap.has(endpoint)) weakMap.set(endpoint, 0);

  const callCount = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, callCount);

  if (callCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { queryAPI, weakMap };
