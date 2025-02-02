import {combine} from "zustand/middleware";
import {create} from "zustand/react";

export const useGameStore = create(
  combine({ history: [Array(9).fill(null)], currentMove: 0, }, (set) => {
    return {
      setHistory: (nextHistory: SquareValue[]) => {
        set(state => ({
          history:
            typeof nextHistory === 'function'
              ? // @ts-ignore
                nextHistory(state.history)
              : nextHistory,
        }));
      },
      setCurrentMove: (
        nextCurrentMove:
          | number
          | ((arg0: number) => number | undefined)
          | undefined,
      ) => {
        set(state => ({
          currentMove:
            typeof nextCurrentMove === 'function'
              ? nextCurrentMove(state.currentMove)
              : nextCurrentMove,
        }));
      },
    };
  }),
);
