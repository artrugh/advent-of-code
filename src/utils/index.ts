import { ArrayOfNumbers, ObjectCharKeyNumber, WindowsTable } from "../../types";
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