// const rxjs = require("rxjs");
//
// let on_message_source = new rxjs.BehaviorSubject();
//
// let sources = [[], [], [], []];
//
// // t1
// on_message_source.next('Data1')
// on_message_source.subscribe((s) => sources[0].push(s))
//
//
// on_message_source.next('Data2')
// on_message_source.subscribe((s) => sources[1].push(s))
//
// // on_message_source.subscribe('Data')
// on_message_source.next('Data3')
//
// for( let source of sources)
//   console.log(source, 'Source', sources.indexOf(source));
//
//
// let observable_source = subscriber => {
//   setTimeout(() => subscriber.next(`observable_source, ${Date.now()}`), 1000)
// };
//
// let on_message_observable = new rxjs.Observable(observable_source);
//
// setTimeout(() => {
//   on_message_observable.subscribe((s) => sources[2].push(s))
//   on_message_observable.subscribe((s) => sources[3].push(s))
// }, 2000)
//
//
// let obj  = { a: 'aa' }
// let obj2  = { b: 'bb' }
// let obj3  = { c: 'cc' }
//
// let m = [obj, obj2, obj3];
//
// let mg = Object.assign({}, ...m)
// console.log(mg)


let data = [1, 2, 3, 4, 5]
let new_data = data
  .map((v) => new Array(v).fill(1))
let merged_data = (function (data) {
  let merged_data = [];

  new_data.forEach((v) => {
    merged_data.push(...v)
  })

  return merged_data
})(new_data)

console.log(data, new_data, merged_data);
