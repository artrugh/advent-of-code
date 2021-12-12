import {
  positions,
  arrayOfBinaryNum,
  testArrayOfBinaryNum,
} from "./src/assets";
import {
  getMostPopularAndUnpopularArrayOfNumberInDecimal,
  getCommonBinaryConvertToDecimal,
  getPosition,
  getPositionAddAim,
  multiplyTwoNums,
} from "./src/utils";

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

const thirdDayFirstPuzzle = multiplyTwoNums(
  getMostPopularAndUnpopularArrayOfNumberInDecimal(arrayOfBinaryNum)
);
console.log("thirdDayFirstPuzzle", thirdDayFirstPuzzle);

const thirdDaySecondPuzzle = multiplyTwoNums(
  getCommonBinaryConvertToDecimal(arrayOfBinaryNum)
);
console.log("thirdDaySecondPuzzle", thirdDaySecondPuzzle);
