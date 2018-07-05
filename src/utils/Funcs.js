function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
const aSleep = async function asynchronousSleep(ms, fn, ...args) {
  console.log('start wait')

  await timeout(ms)
  return fn(...args)
}

export { aSleep }
