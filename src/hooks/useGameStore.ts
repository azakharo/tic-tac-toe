import {combine} from "zustand/middleware";
import {create} from "zustand/react";

type NextSquareFunc = (squares: SquareValue[]) => SquareValue[];
type NextXIsNextFunc = (isXNext: boolean) => boolean;

export const useGameStore = create(
  combine({ squares: Array(9).fill(null), xIsNext: true }, (set) => {
    return {
      setSquares: (nextSquares: SquareValue[] | NextSquareFunc) => {
        set((state) => ({
          squares:
            typeof nextSquares === 'function'
              ? nextSquares(state.squares)
              : nextSquares,
        }))
      },
      setXIsNext: (nextXIsNext: boolean | NextXIsNextFunc) => {
        set((state) => ({
          xIsNext:
            typeof nextXIsNext === 'function'
              ? nextXIsNext(state.xIsNext)
              : nextXIsNext,
        }))
      },
    }
  }),
);
