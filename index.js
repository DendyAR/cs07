const Sort = require('./sort');

let x = [35,27,13,3,12,25,45];
let y = [35,27,13,3,12,25,45]
let o = x.toString()
o = y.toString()
let sort = new Sort();
let hasil = sort.selectionSort(x, y);

console.log(hasil);