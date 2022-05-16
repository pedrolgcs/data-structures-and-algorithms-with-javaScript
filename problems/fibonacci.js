(() => {
  // iterative
  {
    function fibonacciIterative(number) {
      if (number <= 0) return 0;
      if (number <= 2) return 1;

      let fibNMinus2 = 0;
      let fibNMinus1 = 1;
      let fibN;
      const fibSequence = [0, 1];

      for (let i = 2; i <= number; i++) {
        fibN = fibNMinus1 + fibNMinus2;

        fibSequence.push(fibN);

        fibNMinus2 = fibNMinus1;
        fibNMinus1 = fibN;
      }

      return { fibN, fibSequence };
    }

    console.log(fibonacciIterative(5));
  }

  // recursive
  {
    function fibonacci(n) {
      if (n < 1) return 0;
      if (n <= 2) return 1;

      return fibonacci(n - 1) + fibonacci(n - 2);
    }

    console.log('recursive', fibonacci(5));
  }

  // memoization
  {
    function fibonacciMemoization() {
      const memo = [0, 1];

      const fibonacci = (n) => {
        if (memo[n] != null) {
          return memo[n];
        }

        return (memo[n] = fibonacci(n - 1) + fibonacci(n - 2));
      };

      return fibonacci;
    }

    const fib = fibonacciMemoization();
    console.log('memo', fib(5));
  }
})();
