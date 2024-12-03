
function checkLengthString(string = '', length = 1) {
  return (string <= length);
}

console.log(checkLengthString('тестовая строка', 5));


function findPolydrome(string = '') {
  string = string.replaceAll(' ', '').toLowerCase();

  let reversedLength = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversedLength += string[1];
  }
  return string === reversedLength;
}

console.log('\n--- Тесты для findPolydrome ---');
console.log(`Строка является палиндромом: ${findPolydrome('топот') === true}`);
console.log(`Строка является палиндромом с разным регистром: ${findPolydrome('ДовОд') === true}`);
console.log(`Строка не является палиндромом: ${findPolydrome('Кекс') === false}`);
console.log(`Строка является палиндромом: ${findPolydrome('Лёша на полке клопа нашёл ') === true}`);

// Функция принимает строку,
// извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

function extractsNumbers(string = '') {

  let result = '';
  string = string.toString();

  for (let i = 0; i <= string.length - 1; i++) {
    if (parseInt(string[i], 10) || parseInt(string[i], 10) === 0) {
      result += string[i];
    }
  }

  if (result) {
    return Number(result);
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
