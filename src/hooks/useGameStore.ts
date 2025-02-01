import {combine} from "zustand/middleware";
import {create} from "zustand/react";

type NextHistoryFunc = (squares: SquareValue[]) => SquareValue[];
type NextXIsNextFunc = (isXNext: boolean) => boolean;

export const useGameStore = create(
  combine({ history: [Array(9).fill(null)], xIsNext: true }, (set) => {
    return {
      setHistory: (nextHistory: SquareValue[]) => {
        set((state) => ({
          history:
            typeof nextHistory === 'function'
              // @ts-ignore
              ? nextHistory(state.history)
              : nextHistory,
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
