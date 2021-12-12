"use strict";
exports.__esModule = true;
var assets_1 = require("./src/assets");
var utils_1 = require("./src/utils");
// firstDayFirstPuzzle
// const firstDayFirstPuzzle = countIncreaseAmountNumber(arrayOfNumbers);
// // console.log(firstDayFirstPuzzle)
// fistDaySecondPuzzle
// const windows = addNumWindowsArrayToNumArray(arrayOfNumbers);
// const firstDaySecondPuzzle = countIncreaseAmountNumberFromWindows(windows);
// // console.log(firstDaySecondPuzzle);
// const secondDayFirstPuzzle = getPosition(positions);
// console.log("secondDayFirstPuzzle", secondDayFirstPuzzle);
// const secondDaySecondPuzzle = getPositionAddAim(positions);
// console.log("secondDaySecondPuzzle", secondDaySecondPuzzle)
var thirdDayFirstPuzzle = (0, utils_1.multiplyTwoNums)((0, utils_1.getMostPopularAndUnpopularArrayOfNumberInDecimal)(assets_1.arrayOfBinaryNum));
console.log("thirdDayFirstPuzzle", thirdDayFirstPuzzle);
var thirdDaySecondPuzzle = (0, utils_1.multiplyTwoNums)((0, utils_1.getCommonBinaryConvertToDecimal)(assets_1.arrayOfBinaryNum));
console.log("thirdDaySecondPuzzle", thirdDaySecondPuzzle);
