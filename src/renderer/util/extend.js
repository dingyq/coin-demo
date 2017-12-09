let extend = (rawObj, copyObj) => {
  if (!rawObj) {
    rawObj = {}
  }
  for (let key in copyObj) {
    rawObj[key] = copyObj[key]
  }
  return rawObj
}
export default extend
