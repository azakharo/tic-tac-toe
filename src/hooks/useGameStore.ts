import {combine} from "zustand/middleware";
import {create} from "zustand/react";

type NextSquareFunc = (squares: SquareValue[]) => SquareValue[];

export const useGameStore = create(
  combine({ squares: Array(9).fill(null) }, (set) => {
    return {
      setSquares: (nextSquares: SquareValue[] | NextSquareFunc) => {
        set((state) => ({
          squares:
            typeof nextSquares === 'function'
              ? nextSquares(state.squares)
              : nextSquares,
        }))
      },
    }
  }),
);
