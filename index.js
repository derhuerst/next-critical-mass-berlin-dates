'use strict'

const {DateTime} = require('luxon')

const TIMEZONE = 'Europe/Berlin'
const FRIDAY = 5 // Sunday is `0`
const TIME = {
	hour: 20, minute: 0, second: 0, millisecond: 0
}

function* computeNextEvents (t0 = Date.now()) {
	let t = DateTime.fromMillis(t0, {zone: TIMEZONE})
	.set({weekday: FRIDAY})
	.set(TIME)
	if (t.toMillis() < Date.now()) t = t.plus({week: 1})

	while (true) {
		const nextFriday = t.plus({week: 1}).set(TIME)
		if (nextFriday.month !== t.month) yield +t
		t = nextFriday
	}
}

module.exports = computeNextEvents
