module.exports = {
    createIdentityMatrix: function(n) {
        var e = [];
        for (var i = 0; i < n; i++) {
            e[i] = Array(n);
            for (var j = 0; j < n; j++) {
                if (i === j) e[i][j] = 1;
                else e[i][j] = 0;
            }
        }
        return e;
    },
    createArray: function createArray(len) {
        var array = [];
        for (var i = 0; i < len; i++) {
            array.push(parseInt(Math.random() * 100));
        }
        return array;
    }
};
