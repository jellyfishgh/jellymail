var fabonaci = {
    // T(N) = O(1.618^N), S(N) = O(N), 递归
    // a(n) = (1/sqrt(5))(((sqrt(5)+1)/2)^n-((sqrt(5)-1)/2)^n)
    fabOne: function(n) {
        if (n < 2) return n;
        else return this.fabOne(n - 1) + this.fabOne(n - 2);
    },
    // T(N) = O(N), S(N) = O(1), 递推
    fabTwo: function(n) {
        if (n === 0) return 0;
        var arr = [0, 1],
            temp,
            i = 0;
        while (++i < n) {
            temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp + arr[1];
        }
        return arr[1];
    },
    // T(N) = O(logN), S(N) = O(1), 矩阵
    // F(n) = [[1,1][1,0]]^(n-1)*[1,0]
    fabThree: function(n) {
        if (n < 2) return n;
        else {
            // 第三方 js 矩阵运算库
            var Matrix = require('matrixmath/Matrix');
            return new Matrix(2, 2).setData([1, 1, 1, 0]).power(n - 1).multiply(new Matrix(2, 1).setData(1, 0)).toArray()[0];
        }
    },
    fabFour: function(n) {
        // 自己构造二维数组和矩阵运算
        var JellyMatrix = require('./JellyMatrix');
        if(n < 2)return n;
        else {
            return new JellyMatrix([[1, 1], [1, 0]]).power(n - 1).multiply(new JellyMatrix([[1], [0]])).getData()[0][0];
        }
    }
};

var args = process.argv.slice(2);
console.log(fabonaci[args[0]](parseInt(args[1])));
