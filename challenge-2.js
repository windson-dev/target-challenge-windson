// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número,
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const fibonacciVerifyIntegerNumber = (num) => {
  let previous = 0;
  let current = 1;
  let sumPreviousMoreCurrent = 0;

  if (num === previous || num === current) {
   return `${num} pertence à sequência de Fibonacci.`;
  }

  for (let index = 2; sumPreviousMoreCurrent <= num; index += 1) {
    sumPreviousMoreCurrent = previous + current;

    previous = current;

    current = sumPreviousMoreCurrent;


    if (num === sumPreviousMoreCurrent) {
      return `${num} pertence à sequência de Fibonacci.`;
    }
  }

  return`${num} não pertence à sequência de Fibonacci.`;
}

const fibonnaciValidValue = 5;
const fibonnaciInvalidValue = 6;

// fibonnaci valid value
console.log(fibonacciVerifyIntegerNumber(fibonnaciValidValue))

// fibonnaci invalid value
console.log(fibonacciVerifyIntegerNumber(fibonnaciInvalidValue))