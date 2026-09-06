// Disable console.* in production to reduce JS work and log spam
if (typeof __DEV__ !== 'undefined' && !__DEV__) {
  const noop = () => {};
  // @ts-ignore
  console.log = noop;
  // @ts-ignore
  console.info = noop;
  // @ts-ignore
  console.debug = noop;
  // @ts-ignore
  console.warn = noop;
}
