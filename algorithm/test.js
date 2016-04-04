var JellyMatrix = require('./JellyMatrix.js');
var Matrix = require('matrixmath/Matrix');

// var jmat1 = new JellyMatrix([[1,2,3],[1,2,3]]);
// var mat1 = new Matrix(2, 3).setData([1,2,3,1,2,3]);
// var jmat2 = new JellyMatrix(3, 4);
// jmat2.setData([[1,2,3,4],[5,6,7,8],[9,1,2,3]]);
// var mat2 = new Matrix(3,4).setData([1,2,3,4,5,6,7,8,9,1,2,3]);
// var jmat3 = new JellyMatrix(4,2).setData([[1,2],[3,4],[5,6],[7,8]]);
// var mat3 = new Matrix(4,2).setData([1,2,3,4,5,6,7,8]);
//
// console.log(jmat1.multiply(jmat2).getData());
// console.log(mat1.multiply(mat2).toLogString());
// console.log(jmat2.multiply(jmat3).getData());
// console.log(mat2.toLogString());
// console.log(mat3.toLogString());
// console.log(Matrix.multiply(mat2, mat3).toLogString());
// console.log(jmat1.multiply(jmat2, jmat3).getData());
// console.log(mat1.multiply(mat2, mat3).toLogString());
// console.log(JellyMatrix.meta(2).power(3).getData());


// var jm1 = new JellyMatrix([[1],[0]]);
// var jm2 = new JellyMatrix([[1,0]]);
// console.log(jm1.getData());
// console.log(jm2.getData());
// var jm = jm2.multiply(jm1);
// console.log(jm.getData());

var m = new Matrix(2, 2).setData([1, 1, 1, 0]);
console.log(m.power(3).toLogString());
var jm = new JellyMatrix([
    [1, 1],
    [1, 0]
]);
console.log(jm.power(3).getData());
