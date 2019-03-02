'use strict'

const a = require('assert')
const isGeneratorFn = require('is-generator-fn')

const computeNextCriticalMassDates = require('.')

const t0 = 1551526920000 // 2019-03-02T12:42:00+01:00

a.ok(isGeneratorFn(computeNextCriticalMassDates))

const nextEvents = computeNextCriticalMassDates(t0)
const steps = [
	nextEvents.next(),
	nextEvents.next(),
	nextEvents.next()
]
a.ok(steps.every(step => !step.done))

a.strictEqual(steps[0].value, +new Date('2019-03-29T20:00:00+01:00'))
a.strictEqual(steps[1].value, +new Date('2019-04-26T20:00:00+02:00'))
a.strictEqual(steps[2].value, +new Date('2019-05-31T20:00:00+02:00'))
