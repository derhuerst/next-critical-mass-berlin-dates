# next-critical-mass-berlin-dates

**Compute dates of the next [Critical Mass](https://en.wikipedia.org/wiki/Critical_Mass_(cycling)) Berlin events.**

[![npm version](https://img.shields.io/npm/v/next-critical-mass-berlin-dates.svg)](https://www.npmjs.com/package/next-critical-mass-berlin-dates)
[![build status](https://api.travis-ci.org/derhuerst/next-critical-mass-berlin-dates.svg?branch=master)](https://travis-ci.org/derhuerst/next-critical-mass-berlin-dates)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/next-critical-mass-berlin-dates.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installation

```shell
npm install next-critical-mass-berlin-dates
```


## Usage

```js
const computeNextCriticalMassDates = require('next-critical-mass-berlin-dates')

const nextCriticalMassDates = computeNextCriticalMassDates()

console.log(nextCriticalMassDates.next().value) // 1553886000000
console.log(nextCriticalMassDates.next().value) // 1556301600000
console.log(nextCriticalMassDates.next().value) // 1559325600000
```


## Contributing

If you have a question or need support using `next-critical-mass-berlin-dates`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/next-critical-mass-berlin-dates/issues).
