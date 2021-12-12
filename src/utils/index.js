"use strict";
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
exports.__esModule = true;
exports.getCommonBinaryConvertToDecimal =
  exports.getCommon =
  exports.multiplyTwoNums =
  exports.getMostPopularAndUnpopularArrayOfNumberInDecimal =
  exports.mostUnPopular =
  exports.mostPopular =
  exports.restNumbersFromArray =
  exports.getAmountOfIndexedBinaryNum =
  exports.counterFrequentNum =
  exports.getPositionAddAim =
  exports.getPosition =
  exports.getCounterPosition =
  exports.getAxesPositionFromObj =
  exports.getAxesPosition =
  exports.countDirectionsAddAim =
  exports.countDirections =
  exports.replaceNumberByChar =
  exports.addNumWindowsArrayToNumArray =
  exports.countIncreaseAmountNumberFromWindows =
  exports.measureWindows =
  exports.countIncreaseAmountNumber =
    void 0;
var enums_1 = require("../../enums");
var assets_1 = require("../assets");
var getCyrcleNumber = function (input, cols) {
  return (input + cols) % cols;
};
var countIncreaseAmountNumber = function (input) {
  var counter = 0;
  for (var i = 0; i < input.length; i++) {
    if (i > 0 && input[i] > input[i - 1]) {
      counter++;
    }
  }
  return counter;
};
exports.countIncreaseAmountNumber = countIncreaseAmountNumber;
var measureWindows = function (windowsTable) {
  var objOfNumber = {};
  for (var i = 0; i < windowsTable.length; i++) {
    var number = windowsTable[i][0];
    var windows = windowsTable[i][1];
    for (var j = 0; j < windows.length; j++) {
      var window_1 = windows[j];
      if (!window_1) {
      } else {
        if (Number.isInteger(objOfNumber[window_1])) {
          objOfNumber[window_1] = objOfNumber[window_1] + number;
        } else {
          objOfNumber[window_1] = number;
        }
      }
    }
  }
  return objOfNumber;
};
exports.measureWindows = measureWindows;
var countIncreaseAmountNumberFromWindows = function (input) {
  var windows = (0, exports.measureWindows)(input);
  var arrayOfMessuredWindows = Object.values(windows);
  return (0, exports.countIncreaseAmountNumber)(arrayOfMessuredWindows);
};
exports.countIncreaseAmountNumberFromWindows =
  countIncreaseAmountNumberFromWindows;
var addNumWindowsArrayToNumArray = function (input, numberOfCol) {
  if (numberOfCol === void 0) {
    numberOfCol = 4;
  }
  // create empty arrays after the number
  // the length of the array is pass as an argument
  var newEmptyArray = input.map(function (v) {
    return [v, Array(numberOfCol)];
  });
  var result = newEmptyArray.map(function (v, idx) {
    // copy the array
    var newArr = __spreadArray([], v[1], true);
    var colIdx = getCyrcleNumber(idx, numberOfCol);
    // replace number by characters
    // newArr[colIdx] = getCyrcleNumber(idx, alphabet.length);
    newArr[colIdx] = idx;
    // fill the two index before the main index
    for (var i = idx - 1; i >= idx - 2; i--) {
      if (i >= 0) {
        var colIdx_1 = getCyrcleNumber(i, numberOfCol);
        // newArr[colIdx] = getCyrcleNumber(i, alphabet.length);
        newArr[colIdx_1] = i;
      }
    }
    return [v[0], newArr];
  });
  return result;
};
exports.addNumWindowsArrayToNumArray = addNumWindowsArrayToNumArray;
var replaceNumberByChar = function (input) {
  var arrayOfChar = input.map(function (v) {
    if (Number.isInteger(v)) {
      return assets_1.alphabet[v];
    }
    return;
  });
  return arrayOfChar;
};
exports.replaceNumberByChar = replaceNumberByChar;
var countDirections = function (input) {
  var counterDirections = {
    forward: 0,
    down: 0,
    up: 0,
  };
  for (var i = 0; i < input.length; i++) {
    switch (input[i][0]) {
      case enums_1.Direction.Forward:
        counterDirections.forward = counterDirections.forward + input[i][1];
        break;
      case enums_1.Direction.Down:
        counterDirections.down = counterDirections.down + input[i][1];
        break;
      case enums_1.Direction.Up:
        counterDirections.up = counterDirections.up + input[i][1];
        break;
      default:
        console.log("Sorry, this is not a right direction");
    }
  }
  return counterDirections;
};
exports.countDirections = countDirections;
var countDirectionsAddAim = function (input) {
  var counterDirections = {
    x: 0,
    y: 0,
  };
  var aim = 0;
  for (var i = 0; i < input.length; i++) {
    switch (input[i][0]) {
      case enums_1.Direction.Forward:
        // increase horizontal
        counterDirections.x = counterDirections.x + input[i][1];
        // increase depth multiply aim
        counterDirections.y = counterDirections.y + aim * input[i][1];
        break;
      case enums_1.Direction.Down:
        aim = aim + input[i][1];
        break;
      case enums_1.Direction.Up:
        aim = aim - input[i][1];
        break;
      default:
        console.log("Sorry, this is not a right direction");
    }
  }
  return counterDirections;
};
exports.countDirectionsAddAim = countDirectionsAddAim;
var getAxesPosition = function (input) {
  var x = input.forward;
  var y = input.down - input.up;
  return [x, y];
};
exports.getAxesPosition = getAxesPosition;
var getAxesPositionFromObj = function (input) {
  return [input.x, input.y];
};
exports.getAxesPositionFromObj = getAxesPositionFromObj;
var getCounterPosition = function (input) {
  return input[0] * input[1];
};
exports.getCounterPosition = getCounterPosition;
var getPosition = function (input) {
  var directions = (0, exports.countDirections)(input);
  var axes = (0, exports.getAxesPosition)(directions);
  var result = (0, exports.getCounterPosition)(axes);
  return result;
};
exports.getPosition = getPosition;
var getPositionAddAim = function (input) {
  var directions = (0, exports.countDirectionsAddAim)(input);
  var axes = (0, exports.getAxesPositionFromObj)(directions);
  var result = (0, exports.getCounterPosition)(axes);
  return result;
};
exports.getPositionAddAim = getPositionAddAim;
var counterFrequentNum = function (input) {
  var counter = Array.from(Array(input[0].length), function (_) {
    return [0, 0];
  });
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input[i].length; j++) {
      if (Number(input[i][j]) === 0) {
        counter[j][0]++;
      } else if (Number(input[i][j]) === 1) {
        counter[j][1]++;
      }
    }
  }
  return counter;
};
exports.counterFrequentNum = counterFrequentNum;
var getAmountOfIndexedBinaryNum = function (input, idx) {
  var counter = [0, 0];
  for (var i = 0; i < input.length; i++) {
    if (Number(input[i][idx]) === 0) {
      counter[0]++;
    } else if (Number(input[i][idx]) === 1) {
      counter[1]++;
    }
  }
  return counter;
};
exports.getAmountOfIndexedBinaryNum = getAmountOfIndexedBinaryNum;
var restNumbersFromArray = function (input) {
  return input.map(function (v) {
    return v[0] - v[1];
  });
};
exports.restNumbersFromArray = restNumbersFromArray;
var mostPopular = function (input) {
  var result = input.map(function (v) {
    return v < 0 ? 1 : 0;
  });
  return result;
};
exports.mostPopular = mostPopular;
var mostUnPopular = function (input) {
  var result = input.map(function (v) {
    return v < 0 ? 0 : 1;
  });
  return result;
};
exports.mostUnPopular = mostUnPopular;
var setBinaryToDecimal = function (input) {
  return parseInt(input, 2);
};
var getMostPopularAndUnpopularArrayOfNumberInDecimal = function (input) {
  var freqNums = (0, exports.counterFrequentNum)(input);
  var arrayOfFreqNumb = (0, exports.restNumbersFromArray)(freqNums);
  var popular = (0, exports.mostPopular)(arrayOfFreqNumb);
  var unpopular = (0, exports.mostUnPopular)(arrayOfFreqNumb);
  var firstResult = setBinaryToDecimal(popular.join(""));
  var secondResult = setBinaryToDecimal(unpopular.join(""));
  return [firstResult, secondResult];
};
exports.getMostPopularAndUnpopularArrayOfNumberInDecimal =
  getMostPopularAndUnpopularArrayOfNumberInDecimal;
var multiplyTwoNums = function (input) {
  return input[0] * input[1];
};
exports.multiplyTwoNums = multiplyTwoNums;
var getCommon = function (input, common) {
  // store input
  var newArray = input;
  if (newArray.length > 1) {
    var _loop_1 = function (i) {
      var freqNums = (0, exports.getAmountOfIndexedBinaryNum)(newArray, i);
      var numb = freqNums[0] - freqNums[1];
      var limit;
      if (common) {
        limit = numb <= 0 ? 1 : 0;
      } else {
        limit = numb > 0 ? 1 : 0;
      }
      var filteredresults = newArray.filter(function (v) {
        return Number(v[i]) === limit;
      });
      console.log("results", filteredresults);
      newArray = filteredresults;
    };
    for (var i = 0; i < newArray[0].length; i++) {
      _loop_1(i);
    }
  }
  return newArray;
};
exports.getCommon = getCommon;
var getCommonBinaryConvertToDecimal = function (input) {
  var binaryCommon = (0, exports.getCommon)(input, true);
  var binaryUncommon = (0, exports.getCommon)(input, false);
  var decimalCommon = setBinaryToDecimal(binaryCommon.join(""));
  var decimalUncommon = setBinaryToDecimal(binaryUncommon.join(""));
  return [decimalCommon, decimalUncommon];
};
exports.getCommonBinaryConvertToDecimal = getCommonBinaryConvertToDecimal;
