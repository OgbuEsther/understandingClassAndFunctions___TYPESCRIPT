const newfunc = (n: number) => {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
  console.log("counting down now");
  for (let x = n; x >= 0; x--) {
    console.log(x);
  }
};

newfunc(5);

const newfunc1 = (n: number) => {
  for (let i = 0; i <= n; i++) {
    return 10 * 10;
  }
};
console.log(newfunc1(20));

const newfunc2 = (n: number) => {
  for (let y = 0; y <= Math.max(6, n); y++) {
    console.log(y);
  }
};
newfunc2(10);

const newfunc3 = (n: number) => {
  for (let y = 0; y <= Math.min(6, n); y++) {
    console.log(y);
  }
};
newfunc3(10);

const newfunc4 = (n: number) => {
  for (let y = 0; y <= n; y++) {
    for (let x = 0; x <= n; x++) {
      console.log(y, x);
    }
  }
};
newfunc4(2);

//maximum call stack
console.time("start");
const recall = (n: number) => {
  if (n === 1) {
    return "okayyyy!";
  }
  console.log(n);
  // return recall(n / 2);
  // to avoid it giving us a fracion , we will use math.floor
  return recall(Math.floor(n / 2));
};
console.log(recall(7));
console.timeLog("start");

console.time("start2");
const num = (x: number) => {
  while (x > 1) {
    console.log(x);
    return Math.floor(x / 2);
  }
};
console.log(num(7));
console.timeLog("start2");
//anytime you are doing a recursive code , youre doing O(log n)......it only stops when it hits the base case and the condition given to it has been met.....while loop does the same thing as recursive
//how many times raise to the power of log n
//recursive is a function , while is a condition
// O(1) is  linear .... do know an O(1) , it runs once and you get your value
// O(n) to know an 0(n) .... it iterates more than once ( when using loops)
//0(n^2) to know an 0(n^2) is a nested loops..... having a loop inside a loop =
// O(nlogn) is the binary seach  ......it is used in search algorithm .....it is used to search through a set a data

const show = (n: number) => {
  for (let x = 0; x < n; x++) {
    for (let y = n; y > 0; y--) {
      if (x === 0 && y === 2) {
        console.log("lock found");
      } else {
        console.log(x, y);
      }
    }
  }
};
show(2);
