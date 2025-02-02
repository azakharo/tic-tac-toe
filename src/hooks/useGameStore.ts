import {create} from 'zustand/react';
import {SquareValue} from '../types';

interface State {
  history: SquareValue[][];
  currentMove: number;
}

interface Actions {
  setHistory: (newHistory: SquareValue[][]) => void;
  setCurrentMove: (index: number) => void;
}

export const useGameStore = create<State & Actions>()(set => ({
  history: [Array(9).fill(null)],
  currentMove: 0,
  setHistory: nextHistory => {
    set(() => ({
      history: nextHistory,
    }));
  },
  setCurrentMove: nextCurrentMove => {
    set(() => ({
      currentMove: nextCurrentMove,
    }));
  },
}));
