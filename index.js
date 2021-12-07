"use strict";
exports.__esModule = true;
var assets_1 = require("./src/assets");
var utils_1 = require("./src/utils");
// firstDayFirstPuzzle
var firstDayFirstPuzzle = (0, utils_1.countIncreaseAmountNumber)(assets_1.arrayOfNumbers);
console.log(firstDayFirstPuzzle);
// fistDaySecondPuzzle
var windows = (0, utils_1.addNumWindowsArrayToNumArray)(assets_1.arrayOfNumbers);
var fistDaySecondPuzzle = (0, utils_1.countIncreaseAmountNumberFromWindows)(windows);
console.log(fistDaySecondPuzzle);
