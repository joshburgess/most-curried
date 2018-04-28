/** @license MIT License (c) copyright 2016 Josh Burgess, mostjs */

import * as Most from 'most'
import { curry2, curry3 } from '@most/prelude'

// @deprecated (not exported due to being deprecated)

// Use `awaitPromises` instead of `await`
// Use `chain` instead of `flatMap`
// Use `continueWith` instead of `flatMapEnd`
// Use `switchLatest` instead of `switch`
// Use `skipRepeats` instead of `distinct`
// Use `skipRepeatsWith` instead of `distinctBy`
// Use `until` instead of `takeUntil`
// Use `since` instead of `skipUntil`


// defaultScheduler instance (exported directly without changes)
const defaultScheduler = Most.defaultScheduler


// @unary functions (exported directly without changes)

const Stream = Most.Stream
// @alias: `of`
const just = Most.just
const empty = Most.empty
const never = Most.never
const from = Most.from
const periodic = Most.periodic
const drain = Most.drain
const join = Most.join
const mergeArray = Most.mergeArray
const switchLatest = Most.switchLatest
const skipRepeats = Most.skipRepeats
const timestamp = Most.timestamp
const fromPromise = Most.fromPromise
const awaitPromises = Most.awaitPromises
const throwError = Most.throwError
const multicast = Most.multicast


// @binary functions (exported after being modified with `curry2`)

// @alias: `forEach`
const observe = curry2(Most.observe)
const unfold = curry2(Most.unfold)
const iterate = curry2(Most.iterate)
// @changed: wrap variadic function with binary function to handle injecting a single arg
const generate = curry2((generator, arg) => Most.generate(generator, arg))
// @new: wrap variadic function with binary function to handle injecting multiple args
const generateArray = curry2((generator, argsArray) => Most.generate(generator, ...argsArray))
const concat = curry2(Most.concat)
const startWith = curry2(Most.startWith)
const map = curry2(Most.map)
const constant = curry2(Most.constant)
const tap = curry2(Most.tap)
const ap = curry2(Most.ap)
const transduce = curry2(Most.transduce)
const chain = curry2(Most.chain)
const continueWith = curry2(Most.continueWith)
const concatMap = curry2(Most.concatMap)
const mergeConcurrently = curry2(Most.mergeConcurrently)
// @changed: wrap variadic function with binary function to handle merging two streams
const merge = curry2((stream1, stream2) => Most.mergeArray([stream1, stream2]))
const combineArray = curry2(Most.combineArray)
const sampleWith = curry2(Most.sampleWith)
// @new: exported by most.js, but doesn't have documentation or defined types
const zipArray = curry2(Most.zipArray)
const filter = curry2(Most.filter)
const skipRepeatsWith = curry2(Most.skipRepeatsWith)
const take = curry2(Most.take)
const skip = curry2(Most.skip)
const takeWhile = curry2(Most.takeWhile)
const skipWhile = curry2(Most.skipWhile)
const skipAfter = curry2(Most.skipAfter)
const until = curry2(Most.until)
const since = curry2(Most.since)
const during = curry2(Most.during)
const delay = curry2(Most.delay)
const throttle = curry2(Most.throttle)
const debounce = curry2(Most.debounce)
// @aliases: `flatMapError`, `chainError`
const recoverWith = curry2(Most.recoverWith)
// @changed: wrap variadic function with binary function to handle case without capture 
const fromEvent = curry2((eventType, source) => Most.fromEvent(eventType, source, false))
// @new: only available in most.js as a Stream method, but added for convenience
const subscribe = curry2((observer, stream) => stream.subscribe(observer))


// @trinary functions (exported after being modified with `curry3`)

const loop = curry3(Most.loop)
const scan = curry3(Most.scan)
const reduce = curry3(Most.reduce)
// @new: exported by most.js, but doesn't have documentation or defined types
const sampleArray = curry3(Most.sampleArray)
const slice = curry3(Most.slice)
const PropagateTask = curry3(Most.PropagateTask)
// @changed: wrap variadic function with trinary function to handle combining two streams
const combine = curry3((f, stream1, stream2) => Most.combineArray(f, [stream1, stream2]))
// @changed: wrap variadic function with trinary function to handle zipping two streams
const zip = curry3((f, stream1, stream2) => Most.zipArray(f, [stream1, stream2]))
// @new: wrap variadic function with trinary function to handle case with capture 
const fromEventWithCapture = curry3(
  (eventType, source, capture) => Most.fromEvent(eventType, source, capture)
)


// Functions are exported here in the same order they are exported in:
// https://github.com/cujojs/most/blob/master/src/index.js
export {
  Stream,
  // of: just,
  just,
  empty,
  never,
  from,
  periodic,
  fromEvent,
  fromEventWithCapture,
  observe,
  // forEach: observe,
  drain,
  loop,
  scan,
  reduce,
  unfold,
  iterate,
  generate,
  generateArray,
  concat,
  startWith,
  map,
  constant,
  tap,
  ap,
  transduce,
  chain,
  join,
  continueWith,
  concatMap,
  mergeConcurrently,
  merge,
  mergeArray,
  combine,
  combineArray,
  sampleArray,
  sampleWith,
  zip,
  zipArray,
  switchLatest, 
  filter,
  skipRepeats,
  skipRepeatsWith,
  take,
  skip,
  slice,
  takeWhile,
  skipWhile,
  skipAfter,
  until,
  since,
  during,
  delay,
  timestamp,
  throttle,
  debounce,
  fromPromise,
  awaitPromises,
  recoverWith,
  // flatMapError: recoverWith,
  // chainError: recoverWith,
  throwError,
  multicast,
  defaultScheduler,
  PropagateTask,
  subscribe, 
}
