(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('most'), require('@most/prelude')) :
	typeof define === 'function' && define.amd ? define(['exports', 'most', '@most/prelude'], factory) :
	(factory((global['most-curried'] = global['most-curried'] || {}),global.Most,global.MostPrelude));
}(this, (function (exports,Most,_most_prelude) { 'use strict';

/** @license MIT License (c) copyright 2016 Josh Burgess, mostjs */

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
var defaultScheduler$1 = Most.defaultScheduler;


// @unary functions (exported directly without changes)

var Stream$1 = Most.Stream;
// @alias: `of`
var just$1 = Most.just;
var empty$1 = Most.empty;
var never$1 = Most.never;
var from$1 = Most.from;
var periodic$1 = Most.periodic;
var drain$1 = Most.drain;
var join$1 = Most.join;
var mergeArray$1 = Most.mergeArray;
var switchLatest$1 = Most.switchLatest;
var skipRepeats$1 = Most.skipRepeats;
var timestamp$1 = Most.timestamp;
var fromPromise$1 = Most.fromPromise;
var awaitPromises$1 = Most.awaitPromises;
var throwError$1 = Most.throwError;
var multicast$1 = Most.multicast;


// @binary functions (exported after being modified with `curry2`)

// @alias: `forEach`
var observe$1 = _most_prelude.curry2(Most.observe);
var unfold$1 = _most_prelude.curry2(Most.unfold);
var iterate$1 = _most_prelude.curry2(Most.iterate);
// @changed: wrap variadic function with binary function to handle injecting a single arg
var generate$1 = _most_prelude.curry2(function (generator, arg) { return Most.generate(generator, arg); });
// @new: wrap variadic function with binary function to handle injecting multiple args
var generateArray = _most_prelude.curry2(function (generator, argsArray) { return Most.generate.apply(Most, [ generator ].concat( argsArray )); });
var concat$1 = _most_prelude.curry2(Most.concat);
var startWith$1 = _most_prelude.curry2(Most.startWith);
var map$1 = _most_prelude.curry2(Most.map);
var constant$1 = _most_prelude.curry2(Most.constant);
var tap$1 = _most_prelude.curry2(Most.tap);
var ap$1 = _most_prelude.curry2(Most.ap);
var transduce$1 = _most_prelude.curry2(Most.transduce);
var chain$1 = _most_prelude.curry2(Most.chain);
var continueWith$1 = _most_prelude.curry2(Most.continueWith);
var concatMap$1 = _most_prelude.curry2(Most.concatMap);
var mergeConcurrently$1 = _most_prelude.curry2(Most.mergeConcurrently);
// @changed: wrap variadic function with binary function to handle merging two streams
var merge = _most_prelude.curry2(function (stream1, stream2) { return Most.mergeArray([stream1, stream2]); });
var combineArray$1 = _most_prelude.curry2(Most.combineArray);
var sampleWith$1 = _most_prelude.curry2(Most.sampleWith);
// @new: exported by most.js, but doesn't have documentation or defined types
var zipArray$1 = _most_prelude.curry2(Most.zipArray);
var filter$1 = _most_prelude.curry2(Most.filter);
var skipRepeatsWith$1 = _most_prelude.curry2(Most.skipRepeatsWith);
var take$1 = _most_prelude.curry2(Most.take);
var skip$1 = _most_prelude.curry2(Most.skip);
var takeWhile$1 = _most_prelude.curry2(Most.takeWhile);
var skipWhile$1 = _most_prelude.curry2(Most.skipWhile);
var skipAfter$1 = _most_prelude.curry2(Most.skipAfter);
var until$1 = _most_prelude.curry2(Most.until);
var since$1 = _most_prelude.curry2(Most.since);
var during$1 = _most_prelude.curry2(Most.during);
var delay$1 = _most_prelude.curry2(Most.delay);
var throttle$1 = _most_prelude.curry2(Most.throttle);
var debounce$1 = _most_prelude.curry2(Most.debounce);
// @aliases: `flatMapError`, `chainError`
var recoverWith$1 = _most_prelude.curry2(Most.recoverWith);
// @changed: wrap variadic function with binary function to handle case without capture 
var fromEvent$1 = _most_prelude.curry2(function (eventType, source) { return Most.fromEvent(eventType, source, false); });
// @new: only available in most.js as a Stream method, but added for convenience
var subscribe = _most_prelude.curry2(function (observer, stream) { return stream.subscribe(observer); });


// @trinary functions (exported after being modified with `curry3`)

var loop$1 = _most_prelude.curry3(Most.loop);
var scan$1 = _most_prelude.curry3(Most.scan);
var reduce$1 = _most_prelude.curry3(Most.reduce);
// @new: exported by most.js, but doesn't have documentation or defined types
var sampleArray$1 = _most_prelude.curry3(Most.sampleArray);
var slice$1 = _most_prelude.curry3(Most.slice);
var PropagateTask$1 = _most_prelude.curry3(Most.PropagateTask);
// @changed: wrap variadic function with trinary function to handle combining two streams
var combine = _most_prelude.curry3(function (f, stream1, stream2) { return Most.combineArray(f, [stream1, stream2]); });
// @changed: wrap variadic function with trinary function to handle zipping two streams
var zip = _most_prelude.curry3(function (f, stream1, stream2) { return Most.zipArray(f, [stream1, stream2]); });
// @new: wrap variadic function with trinary function to handle case with capture 
var fromEventWithCapture = _most_prelude.curry3(
  function (eventType, source, capture) { return Most.fromEvent(eventType, source, capture); }
);

exports.Stream = Stream$1;
exports.just = just$1;
exports.empty = empty$1;
exports.never = never$1;
exports.from = from$1;
exports.periodic = periodic$1;
exports.fromEvent = fromEvent$1;
exports.fromEventWithCapture = fromEventWithCapture;
exports.observe = observe$1;
exports.drain = drain$1;
exports.loop = loop$1;
exports.scan = scan$1;
exports.reduce = reduce$1;
exports.unfold = unfold$1;
exports.iterate = iterate$1;
exports.generate = generate$1;
exports.generateArray = generateArray;
exports.concat = concat$1;
exports.startWith = startWith$1;
exports.map = map$1;
exports.constant = constant$1;
exports.tap = tap$1;
exports.ap = ap$1;
exports.transduce = transduce$1;
exports.chain = chain$1;
exports.join = join$1;
exports.continueWith = continueWith$1;
exports.concatMap = concatMap$1;
exports.mergeConcurrently = mergeConcurrently$1;
exports.merge = merge;
exports.mergeArray = mergeArray$1;
exports.combine = combine;
exports.combineArray = combineArray$1;
exports.sampleArray = sampleArray$1;
exports.sampleWith = sampleWith$1;
exports.zip = zip;
exports.zipArray = zipArray$1;
exports.switchLatest = switchLatest$1;
exports.filter = filter$1;
exports.skipRepeats = skipRepeats$1;
exports.skipRepeatsWith = skipRepeatsWith$1;
exports.take = take$1;
exports.skip = skip$1;
exports.slice = slice$1;
exports.takeWhile = takeWhile$1;
exports.skipWhile = skipWhile$1;
exports.skipAfter = skipAfter$1;
exports.until = until$1;
exports.since = since$1;
exports.during = during$1;
exports.delay = delay$1;
exports.timestamp = timestamp$1;
exports.throttle = throttle$1;
exports.debounce = debounce$1;
exports.fromPromise = fromPromise$1;
exports.awaitPromises = awaitPromises$1;
exports.recoverWith = recoverWith$1;
exports.throwError = throwError$1;
exports.multicast = multicast$1;
exports.defaultScheduler = defaultScheduler$1;
exports.PropagateTask = PropagateTask$1;
exports.subscribe = subscribe;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
