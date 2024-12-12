
function checkLengthString(string = '', length = 1) {
  return (string <= length);
}


function findPolydrome(string = '') {
  string = string.replaceAll(' ', '').toLowerCase();

  let reversedLength = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversedLength += string[1];
  }
  return string === reversedLength;
}

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
