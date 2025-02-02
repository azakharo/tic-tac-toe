import {create} from 'zustand/react';
import {SquareValue} from '@/types';

interface State {
  history: SquareValue[][];
  currentMoveIndex: number;
}

interface Actions {
  addToHistory: (squares: SquareValue[]) => void;
  setCurrentMoveIndex: (index: number) => void;
}

export const useGameStore = create<State & Actions>()(set => ({
  history: [Array(9).fill(null)],
  currentMoveIndex: 0,
  addToHistory: squares => {
    set(state => {
      const nextHistory = state.history.slice(0, state.currentMoveIndex + 1).concat([squares])

      return {
        history: nextHistory,
        currentMoveIndex: nextHistory.length - 1,
      };
    });
  },
  setCurrentMoveIndex: nextCurrentMove => {
    set(() => ({
      currentMoveIndex: nextCurrentMove,
    }));
  },
}));
