'use strict'

const computeNextCriticalMassDates = require('.')

const nextCriticalMassDates = computeNextCriticalMassDates()

console.log(nextCriticalMassDates.next().value)
console.log(nextCriticalMassDates.next().value)
console.log(nextCriticalMassDates.next().value)
