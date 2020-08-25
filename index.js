/**
 * 
 * @param {Array} input The input array to chunk.
 * @param {number} perChunk The number of items per chunk.
 */

module.exports = (input, perChunk) => {
  if(!Array.isArray(input)) throw new TypeError("Input should be an array.")
  if(!Number.isInteger(perChunk)) throw new TypeError("Number of items per chunk should be an integer.")
  return input.reduce((resultArray, item, x) => {
    const chunkIndex = Math.floor(x / perChunk)
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []
    }
    resultArray[chunkIndex].push(item)
    return resultArray
  }, [])
}