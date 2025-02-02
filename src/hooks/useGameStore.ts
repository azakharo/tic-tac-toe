import {create} from 'zustand/react';
import {SquareValue} from '@/types';

interface State {
  history: SquareValue[][];
  currentMoveIndex: number;
}

interface Actions {
  setHistory: (newHistory: SquareValue[][]) => void;
  setCurrentMoveIndex: (index: number) => void;
}

export const useGameStore = create<State & Actions>()(set => ({
  history: [Array(9).fill(null)],
  currentMoveIndex: 0,
  setHistory: nextHistory => {
    set(() => ({
      history: nextHistory,
    }));
  },
  setCurrentMoveIndex: nextCurrentMove => {
    set(() => ({
      currentMoveIndex: nextCurrentMove,
    }));
  },
}));
