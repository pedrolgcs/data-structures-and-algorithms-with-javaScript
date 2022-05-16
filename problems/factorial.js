(() => {
  // iterative
  {
    function factorialIterative(number) {
      if (number <= 0) return 0;
      if (number <= 2) return 1;

      let factorial = 1;

      for (let i = 2; i <= number; i++) {
        factorial = factorial * i;
      }

      return factorial;
    }

    console.log(factorialIterative(5));
  }

  // recursive
  {
    function factorial(number) {
      if (number === 1 || number === 0) {
        return 1;
      }

      return number * factorial(number - 1);
    }

    console.log(factorial(5));
  }
})();
