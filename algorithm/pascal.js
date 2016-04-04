//Pascal's Triangle
//杨辉三角
//返回第 n 行第 m 个数字
function select(n, m) {
    if (n === 0) return 1;
    else {
        if (m === 0 || m === n) return 1;
        else return select(n - 1, m - 1) + select(n - 1, m);
    }
}

function pascalRow(n) {
    var arr = [];
    for (var i = 0; i <= n; i++) {
        arr.push(select(n, i));
    }
    return arr;
}

function pascalTriangle1(n) {
    var arr = [];
    for (var i = 0; i <= n; i++) {
        arr.push(pascalRow(i));
    }
    return arr;
}

function pascalTriangle2(n) {
    if (n === parseInt(n) && n > 0) {
        if (n === 1) return [
            [1]
        ];
        else if (n === 2) return [
            [1],
            [1, 1]
        ];
        else {
            var arr = [];
            arr.push([1]);
            arr.push([1, 1]);
            for (var i = 2; i < n; i++) {
                arr[i] = [];
                arr[i][0] = 1;
                for (var j = 1; j < i; j++) {
                    arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1];
                }
                arr[i].push(1);
            }
            return arr;
        }
    }
}

function pascalTriangle(n, type) {
    if (type === 'true') {
        return pascalTriangle2(n);
    } else return pascalTriangle1(n);
}

function getRow(index) {
    if (index === 0) return [1];
    else if (index === 1) return [1, 1];
    else {
        var arr = [1, 1];
        for (var i = 2; i <= index; i++) {
            arr[i] = 1;
            for (var j = i - 1; j > 0; j--) {
                arr[j] = arr[j] + arr[j - 1];
            }
        }
        return arr;
    }
}

function pascal2LogStr(pascal) {
    var n = pascal.length;
    var s = '',
        space;
    for (var i = 0; i < n; i++) {
        space = createSpace(n - i);
        s += space + pascal[i].join(' ') + space + '\r\n';
    }
    return s;
}

function createSpace(count) {
    var str = '';
    for (var i = 0; i < count; i++) {
        str += ' ';
    }
    return str;
}

var arg = process.argv.slice(2);
var n = parseInt(isNaN(arg[0]) ? 0 : arg);
console.log(pascal2LogStr(pascalTriangle(n, arg[1])));
console.log(getRow(n));
