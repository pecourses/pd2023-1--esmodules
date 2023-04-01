// ESModules

// default import ---------------------------
// import _ from './math.js'

// console.log('_ :>> ', _)

// console.log('_.PI :>> ', _.PI)
// console.log('_.sum(1,10) :>> ', _.sum(1, 10))

// named import ----------------------------
// import { sum, PI, mult } from './math1.js'

// console.log('PI :>> ', PI)
// console.log('sum(1,5) :>> ', sum(1, 5))

// import * as Math from './math1.js'
// console.log('Math :>> ', Math)
// console.log('Math.PI :>> ', Math.PI)
// console.log('Math.sum(1,20) :>> ', Math.sum(1, 20))

import testDefaultExp, { PI, sum } from './math1.js'
console.log('testDefaultExp :>> ', testDefaultExp)
console.log('PI :>> ', PI)
