import { Direction } from "../enums";

export type ArrayOfNumbers = Array<number>;
export type ArrayOfStrings = Array<string>;
export type WindowsTable<T> = Array<[number, Array<T>]>;
export type ObjectCharKeyNumber = { [key: string]: number };
export type DirectionType = "forward" | "down" | "up";
export type Position = [DirectionType, number];
export type PositionsArray = Array<Position>;
export type CounterDirections = {
  [key in Direction]: number;
};
export type AxesPosition = [number, number];
export type AxesPositionObj = { x: number; y: number };
export type TwoDimensionArrayOfNumbers = Array<number[]>;
