import { PropagateTask, Stream, ap, awaitPromises, chain, combineArray, concat, concatMap, constant, continueWith, debounce, defaultScheduler, delay, drain, during, empty, filter, from, fromEvent, fromPromise, generate, iterate, join, just, loop, map, mergeArray, mergeConcurrently, multicast, never, observe, periodic, recoverWith, reduce, sampleArray, sampleWith, scan, since, skip, skipAfter, skipRepeats, skipRepeatsWith, skipWhile, slice, startWith, switchLatest, take, takeWhile, tap, throttle, throwError, timestamp, transduce, unfold, until, zipArray } from 'most';
import * as Most from 'most';
import { curry2, curry3 } from '@most/prelude';

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
var defaultScheduler$1 = defaultScheduler;


// @unary functions (exported directly without changes)

var Stream$1 = Stream;
// @alias: `of`
var just$1 = just;
var empty$1 = empty;
var never$1 = never;
var from$1 = from;
var periodic$1 = periodic;
var drain$1 = drain;
var join$1 = join;
var mergeArray$1 = mergeArray;
var switchLatest$1 = switchLatest;
var skipRepeats$1 = skipRepeats;
var timestamp$1 = timestamp;
var fromPromise$1 = fromPromise;
var awaitPromises$1 = awaitPromises;
var throwError$1 = throwError;
var multicast$1 = multicast;


// @binary functions (exported after being modified with `curry2`)

// @alias: `forEach`
var observe$1 = curry2(observe);
var unfold$1 = curry2(unfold);
var iterate$1 = curry2(iterate);
// @changed: wrap variadic function with binary function to handle injecting a single arg
var generate$1 = curry2(function (generator, arg) { return generate(generator, arg); });
// @new: wrap variadic function with binary function to handle injecting multiple args
var generateArray = curry2(function (generator, argsArray) { return generate.apply(Most, [ generator ].concat( argsArray )); });
var concat$1 = curry2(concat);
var startWith$1 = curry2(startWith);
var map$1 = curry2(map);
var constant$1 = curry2(constant);
var tap$1 = curry2(tap);
var ap$1 = curry2(ap);
var transduce$1 = curry2(transduce);
var chain$1 = curry2(chain);
var continueWith$1 = curry2(continueWith);
var concatMap$1 = curry2(concatMap);
var mergeConcurrently$1 = curry2(mergeConcurrently);
// @changed: wrap variadic function with binary function to handle merging two streams
var merge = curry2(function (stream1, stream2) { return mergeArray([stream1, stream2]); });
var combineArray$1 = curry2(combineArray);
var sampleWith$1 = curry2(sampleWith);
// @new: exported by most.js, but doesn't have documentation or defined types
var zipArray$1 = curry2(zipArray);
var filter$1 = curry2(filter);
var skipRepeatsWith$1 = curry2(skipRepeatsWith);
var take$1 = curry2(take);
var skip$1 = curry2(skip);
var takeWhile$1 = curry2(takeWhile);
var skipWhile$1 = curry2(skipWhile);
var skipAfter$1 = curry2(skipAfter);
var until$1 = curry2(until);
var since$1 = curry2(since);
var during$1 = curry2(during);
var delay$1 = curry2(delay);
var throttle$1 = curry2(throttle);
var debounce$1 = curry2(debounce);
// @aliases: `flatMapError`, `chainError`
var recoverWith$1 = curry2(recoverWith);
// @changed: wrap variadic function with binary function to handle case without capture 
var fromEvent$1 = curry2(function (eventType, source) { return fromEvent(eventType, source, false); });
// @new: only available in most.js as a Stream method, but added for convenience
var subscribe = curry2(function (observer, stream) { return stream.subscribe(observer); });


// @trinary functions (exported after being modified with `curry3`)

var loop$1 = curry3(loop);
var scan$1 = curry3(scan);
var reduce$1 = curry3(reduce);
// @new: exported by most.js, but doesn't have documentation or defined types
var sampleArray$1 = curry3(sampleArray);
var slice$1 = curry3(slice);
var PropagateTask$1 = curry3(PropagateTask);
// @changed: wrap variadic function with trinary function to handle combining two streams
var combine = curry3(function (f, stream1, stream2) { return combineArray(f, [stream1, stream2]); });
// @changed: wrap variadic function with trinary function to handle zipping two streams
var zip = curry3(function (f, stream1, stream2) { return zipArray(f, [stream1, stream2]); });
// @new: wrap variadic function with trinary function to handle case with capture 
var fromEventWithCapture = curry3(
  function (eventType, source, capture) { return fromEvent(eventType, source, capture); }
);

export { Stream$1 as Stream, just$1 as just, empty$1 as empty, never$1 as never, from$1 as from, periodic$1 as periodic, fromEvent$1 as fromEvent, fromEventWithCapture, observe$1 as observe, drain$1 as drain, loop$1 as loop, scan$1 as scan, reduce$1 as reduce, unfold$1 as unfold, iterate$1 as iterate, generate$1 as generate, generateArray, concat$1 as concat, startWith$1 as startWith, map$1 as map, constant$1 as constant, tap$1 as tap, ap$1 as ap, transduce$1 as transduce, chain$1 as chain, join$1 as join, continueWith$1 as continueWith, concatMap$1 as concatMap, mergeConcurrently$1 as mergeConcurrently, merge, mergeArray$1 as mergeArray, combine, combineArray$1 as combineArray, sampleArray$1 as sampleArray, sampleWith$1 as sampleWith, zip, zipArray$1 as zipArray, switchLatest$1 as switchLatest, filter$1 as filter, skipRepeats$1 as skipRepeats, skipRepeatsWith$1 as skipRepeatsWith, take$1 as take, skip$1 as skip, slice$1 as slice, takeWhile$1 as takeWhile, skipWhile$1 as skipWhile, skipAfter$1 as skipAfter, until$1 as until, since$1 as since, during$1 as during, delay$1 as delay, timestamp$1 as timestamp, throttle$1 as throttle, debounce$1 as debounce, fromPromise$1 as fromPromise, awaitPromises$1 as awaitPromises, recoverWith$1 as recoverWith, throwError$1 as throwError, multicast$1 as multicast, defaultScheduler$1 as defaultScheduler, PropagateTask$1 as PropagateTask, subscribe };
//# sourceMappingURL=index.es.js.map
