const path = require('path')

const filePath = path.join('/sxd', 'xd', 'xdddd', 'xefdeff')

console.log(filePath)
console.log(path.basename(filePath))
console.log(path.dirname(filePath))
console.log(path.parse(filePath))
console.log(path.resolve('dist'))