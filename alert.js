'use strict';

function countFulfilledPromises(...args) {
      return Promise.allSettled(args).then((result =>{
          return result.filter((objPromise) => objPromise.status == "fulfilled").length;
            })
        )
}
const p1 = new Promise(resolve => resolve(1));
const p2 = new Promise(resolve => resolve(2));
const p3 = new Promise((_, reject) => reject(3));

countFulfilledPromises(p1, p2,p3).then(console.log);     // 2
countFulfilledPromises().then(console.log);            // 0
countFulfilledPromises(p1).then(console.log);          // 1
countFulfilledPromises(p1, p2,p3).then(console.log);     // 2
countFulfilledPromises(p1, p2, p3).then(console.log);  // 2
countFulfilledPromises(p1, p3).then(console.log);      // 1
countFulfilledPromises(p3).then(console.log);          // 0