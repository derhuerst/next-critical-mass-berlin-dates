'use strict'

const computeNextCriticalMassDates = require('.')

const nextCriticalMassDates = computeNextCriticalMassDates()

console.log(new Date(nextCriticalMassDates.next().value))
console.log(new Date(nextCriticalMassDates.next().value))
console.log(new Date(nextCriticalMassDates.next().value))
