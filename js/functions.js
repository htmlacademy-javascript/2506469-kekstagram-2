function checkLengthString(string = '', length = 1) {
  return (string <= length);
}
console.log(checkStringLength('тестовая строка', 5));

function findPolydrome(string = '') {
  string = string.replaceAll(' ', '').toLowerCase();

  let reversedLength = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversedLength += string[1];
  }

  return string === reversedLength;
}

// Функция принимает строку,
// извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

function extractsNumbers(string = '') {

  let str = '';
  let newStr = string.toString();

  for (let i = 0; i <= newStr.length - 1; i++) {
    if (parseInt(newStr[i]) || parseInt(newStr[i]) === 0) {
      str += newStr[i];
    }
  }

  if (str) {
    let num = Number(str);
    return Math.abs(num);
  } else {
    return NaN;
  }

}

console.log(extractsNumbers('2023 год'));
console.log(extractsNumbers('ECMAScript 2022'));
console.log(extractsNumbers('1 кефир, 0.5 батона'));
console.log(extractsNumbers('агент 007'));
console.log(extractsNumbers('а я томат'));
console.log(extractsNumbers(-1));
