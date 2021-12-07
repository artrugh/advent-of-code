import  {positions}  from "./src/assets";
import  { getPosition, getPositionAddAim} from "./src/utils";

// firstDayFirstPuzzle
// const firstDayFirstPuzzle = countIncreaseAmountNumber(arrayOfNumbers);
// // console.log(firstDayFirstPuzzle)
// fistDaySecondPuzzle
// const windows = addNumWindowsArrayToNumArray(arrayOfNumbers);
// const fistDaySecondPuzzle = countIncreaseAmountNumberFromWindows(windows);
// // console.log(fistDaySecondPuzzle);

const secondDayFirstPuzzle = getPosition(positions);
console.log("secondDayFirstPuzzle", secondDayFirstPuzzle);

const secondDaySecondPuzzle = getPositionAddAim(positions);
console.log("secondDaySecondPuzzle", secondDaySecondPuzzle)

