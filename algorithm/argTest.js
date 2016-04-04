var arr = [1, 2, 3];

function MyApple(arr) {
    this.arr = arr;
}

var apple = new MyApple(arr);
apple.arr[2] = 4;
console.log(arr);
