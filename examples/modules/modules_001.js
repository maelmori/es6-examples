// Still failing in lot of parsers
import * as math from 'lib/math'
console.log('2π = ' + math.sum(math.pi, math.pi))

import { sum, pi } from 'lib/math'
console.log('2π = ' + sum(pi, pi))
