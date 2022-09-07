// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

function returnNeighboringNumbers(num) {
  return [num - 1, num, num + 1]
}
returnNeighboringNumbers(5);

console.log(returnNeighboringNumbers(5));