// eslint-disable-next-line no-unused-vars
function checkLengthString(string = '', length = 1) {
  return (string <= length);
}

// eslint-disable-next-line no-unused-vars
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
  const newStr = string.toString();

  for (let i = 0; i <= newStr.length - 1; i++) {
    if (parseInt(newStr[i], 10) || parseInt(newStr[i], 10) === 0) {
      str += newStr[i];
    }
  }

  if (str) {
    const num = Number(str);
    return Math.abs(num);
  } else {
    return NaN;
  }

}

// eslint-disable-next-line no-console
console.log(extractsNumbers('2023 год'));
// eslint-disable-next-line no-console
console.log(extractsNumbers('ECMAScript 2022'));
// eslint-disable-next-line no-console
console.log(extractsNumbers('1 кефир, 0.5 батона'));
// eslint-disable-next-line no-console
console.log(extractsNumbers('агент 007'));
// eslint-disable-next-line no-console
console.log(extractsNumbers('а я томат'));
// eslint-disable-next-line no-console
console.log(extractsNumbers(-1));
