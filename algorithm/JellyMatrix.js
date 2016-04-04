var util = require('./util');

function JellyMatrix() {
    if (arguments.length === 2) {
        //rows, cols
        this._data = JellyMatrix.init(arguments[0], arguments[1]);
    } else if (arguments.length === 1) {
        //[[x,...],...],二维数组
        this.setData(arguments[0]);
    } else if (arguments.length === 3) {
        //rows, cols, [x, ...]
        this._data = JellyMatrix.init(arguments[0], arguments[1]);
        this.setData(arguments[2]);
    }
}

JellyMatrix.normalMultiply = function(mat1, mat2) {
    //两个矩阵想乘
    var x = mat1.rowsSize(),
        y = mat1.colsSize(),
        z = mat2.colsSize(),
        a = mat1.getData(),
        b = mat2.getData(),
        arr = [],
        temp = 0;
    for (var i = 0; i < x; i++) {
        arr[i] = Array();
        for (var k = 0; k < z; k++) {
            for (var j = 0; j < y; j++) {
                temp += a[i][j] * b[j][k];
            }
            arr[i][k] = temp;
            temp = 0;//temp 一定要置于0
        }
    }
    return new JellyMatrix(arr);
};

JellyMatrix.multiply = function() {
    return arguments[0].multiply(Array.prototype.slice.call(arguments, 1));
};

JellyMatrix.power = function(mat, n) {
    return mat.power(n);
};

JellyMatrix.meta = function(n) {
    return new JellyMatrix(util.createIdentityMatrix(n));
};

JellyMatrix.init = function(rows, cols) {
    var arr = [], cs = [];
    for (var i = 0; i < rows; i++) {
        arr[i] = [];
        for(var j = 0; j < cols; j++){
            arr[i][j] = 0;//初始化为0
        }
    }
    return arr;
};

JellyMatrix.prototype = {
    construcor: JellyMatrix,
    setData: function(arr) {
        //二维数组
        if (arr[0] instanceof Array) {
            this._data = arr;
        } else {
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.cols; j++) {
                    this._data[i][j] = arr[j * i + j];
                }
            }
        }
        return this;
    },
    getData: function() {
        return this._data;
    },
    size: function() {
        return this.colsSize() * this.rowsSize();
    },
    rowsSize: function() {
        return this._data.length;
    },
    colsSize: function() {
        return this._data[0].length;
    },
    multiply: function() {
        var result = this;
        for (var i = 0; i < arguments.length; i++) {
            result = JellyMatrix.normalMultiply(result, arguments[i]);
        }
        return result;
    },
    power: function(n) {
        var result = this;
        for (var i = 1; i < n; i++) {
            result = result.multiply(this);
        }
        return result;
    }
};

module.exports = JellyMatrix;
