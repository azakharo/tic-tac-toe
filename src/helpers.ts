import {SquareValue} from './types';

// Returns X, O or null if there is no winner
export function calculateWinner(squares: SquareValue[]): SquareValue {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winCombinations.length; i++) {
    const [a, b, c] = winCombinations[i] as number[];
    if (
      squares[a!] &&
      squares[a!] === squares[b!] &&
      squares[a!] === squares[c!]
    ) {
      return squares[a!] as SquareValue;
    }
  }

  return null;
}

export function calculateTurnsLeft(squares: SquareValue[]): number {
  return squares.filter(square => !square).length;
}

export function calculateStatusString(
  winner: SquareValue,
  turns: number,
  nextPlayer: 'X' | 'O',
): string {
  if (winner) {
    return `Winner: ${winner}`;
  }

  if (!turns) {
    return 'Draw';
  }

  return `Next player: ${nextPlayer}`;
}
