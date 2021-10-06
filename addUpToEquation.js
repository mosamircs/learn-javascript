//equation version add up to specific number
const { PerformanceObserver, performance } = require('perf_hooks');
function addUpTo (number){
    return  number*(number+1)/2;
}
let time1 =performance.now();
console.log(addUpTo(100000000));
let time2 = performance.now();
console.log(`time elapsed ${(time2 - time1)/1000} seconds`);