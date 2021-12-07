import  {arrayOfNumbers}  from "./src/assets";
import  { countIncreaseAmountNumberFromWindows, addNumWindowsArrayToNumArray, countIncreaseAmountNumber} from "./src/utils";

// firstDayFirstPuzzle
const firstDayFirstPuzzle = countIncreaseAmountNumber(arrayOfNumbers);
console.log(firstDayFirstPuzzle)
// fistDaySecondPuzzle
const windows = addNumWindowsArrayToNumArray(arrayOfNumbers);
const fistDaySecondPuzzle = countIncreaseAmountNumberFromWindows(windows);
console.log(fistDaySecondPuzzle);

