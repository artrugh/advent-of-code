import { Direction } from "../../enums";
import { ArrayOfNumbers, AxesPosition, AxesPositionObj, CounterDirections, ObjectCharKeyNumber, PositionsArray, WindowsTable } from "../../types";
import {alphabet} from "../assets";

const getCyrcleNumber = (input: number, cols: number) => {
    return (input+cols) % cols
}

export const countIncreaseAmountNumber = (input:ArrayOfNumbers): number => {

    let counter = 0;

    for (let i = 0; i < input.length; i++){
        if(i> 0 && input[i] > input[i -1]){
                counter++
        } 
    }
    return counter
}


export const measureWindows = (windowsTable: WindowsTable<string | number| undefined>): ObjectCharKeyNumber => {

    const objOfNumber: ObjectCharKeyNumber = {};

    for (let i = 0; i< windowsTable.length; i++){
        
        const number = windowsTable[i][0];
        const windows = windowsTable[i][1];
        
        for(let j = 0; j < windows.length; j++){
            
            const window = windows[j];

            if(!window){
 
            } else {
                if(Number.isInteger(objOfNumber[window])){
                    objOfNumber[window] = objOfNumber[window] + number;
                } else {  
                    objOfNumber[window] = number;
                } 
            }      
        }
    }

    return objOfNumber;
}

export const countIncreaseAmountNumberFromWindows = (input: WindowsTable<undefined | number>): number => {
    const windows = measureWindows(input);
    const arrayOfMessuredWindows = Object.values(windows);
    return countIncreaseAmountNumber(arrayOfMessuredWindows)
}

export const addNumWindowsArrayToNumArray = (input: ArrayOfNumbers, numberOfCol: number = 4): WindowsTable<undefined | number> => {
    
    // create empty arrays after the number
    // the length of the array is pass as an argument
    const newEmptyArray: WindowsTable<undefined>  = input.map(v => {return [v, Array(numberOfCol)]});
 
    const result: WindowsTable<undefined | number> = newEmptyArray.map((v, idx)=> {
        // copy the array
        const newArr: Array<undefined | number> = [...v[1]];
        
        const colIdx = getCyrcleNumber(idx,numberOfCol);
        // replace number by characters
        // newArr[colIdx] = getCyrcleNumber(idx, alphabet.length);

        newArr[colIdx] = idx;

        // fill the two index before the main index
        for(let i = idx - 1; i >= idx -2; i--){

            if(i >= 0){
                const colIdx = getCyrcleNumber(i,numberOfCol);
                // newArr[colIdx] = getCyrcleNumber(i, alphabet.length);
                newArr[colIdx] = i;
            }
        }  
        return [ v[0], newArr]
    });

    return result;
}


export const replaceNumberByChar = (input: Array<number | undefined>): Array<string | undefined> => {
    const arrayOfChar = input.map(v => {
        if(Number.isInteger(v)) {
            return alphabet[v as number]
        }
        return;  
    })
    return arrayOfChar;
}


 
export const countDirections = (input: PositionsArray): CounterDirections => {

    const counterDirections: CounterDirections = {
          forward: 0, down: 0 , up: 0
    };

    for (let i = 0; i < input.length; i++){
        switch (input[i][0]) {
            case Direction.Forward:
                counterDirections.forward = counterDirections.forward + input[i][1]
                break;
            case Direction.Down:
                counterDirections.down = counterDirections.down + input[i][1]
                break;
            case Direction.Up:
                counterDirections.up = counterDirections.up + input[i][1]
                break;
            default:
                console.log("Sorry, this is not a right direction");
        }
    }
    
    return counterDirections
}

export const countDirectionsAddAim = (input: PositionsArray): AxesPositionObj => {

    const counterDirections: AxesPositionObj = {
          x: 0, y: 0,
    };
    let aim = 0;

    for (let i = 0; i < input.length; i++){
        switch (input[i][0]) {
            case Direction.Forward:
                // increase horizontal
                counterDirections.x = counterDirections.x + input[i][1];
                // increase depth multiply aim
                counterDirections.y = counterDirections.y + (aim * input[i][1])
                break;
            case Direction.Down:
                aim = aim + input[i][1];
                break;
            case Direction.Up:
                aim = aim - input[i][1]
                break;
            default:
                console.log("Sorry, this is not a right direction");
        }
    }
    
    return counterDirections
}

export const getAxesPosition = (input: CounterDirections): AxesPosition => {
    const x = input.forward;
    const y = input.down - input.up
    return [x, y]
}

export const getAxesPositionFromObj = (input: AxesPositionObj): AxesPosition => {
    return [input.x, input.y]
}

export const getCounterPosition = (input: AxesPosition): number => {
    return input[0] * input[1]
}

export const getPosition = (input: PositionsArray): number => {
    const directions = countDirections(input);
    const axes = getAxesPosition(directions);
    const result = getCounterPosition(axes);
    return result
}

export const getPositionAddAim = (input: PositionsArray): number => {
    const directions = countDirectionsAddAim(input);
    const axes = getAxesPositionFromObj(directions);
    const result = getCounterPosition(axes);
    return result
}
