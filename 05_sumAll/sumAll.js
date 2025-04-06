const sumAll = function (param1, param2) {
  let finalAnswer = 0;
  if (!Number.isInteger(param1) || !Number.isInteger(param2)) return "ERROR";
  if (param1 < 0 || param2 < 0) return "ERROR";
  if (param1 > param2) {
    const placeholder = param1;
    param1 = param2;
    param2 = placeholder;
  }

  for (let i = param1; i <= param2; i++) {
    finalAnswer += i;
  }
  return finalAnswer;
};

// Do not edit below this line
module.exports = sumAll;
