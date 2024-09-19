function fibonacci(num) {
// your code here
   if (num <= 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    // Use dynamic programming for efficiency
    let fibNums = [0, 1];
    for (let i = 2; i <= num; i++) {
      fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[num];
  }
module.exports = fibonacci;
