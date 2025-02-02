import {SquareValue} from "./types";

export function calculateWinner(squares: SquareValue[]): SquareValue {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i] as number[]
    if (squares[a!] && squares[a!] === squares[b!] && squares[a!] === squares[c!]) {
      return squares[a!] as SquareValue;
    }
  }

  return null
}

export function calculateTurns(squares: SquareValue[]): number {
  return squares.filter((square) => !square).length
}

export function calculateStatus(winner: SquareValue, turns: number, player: SquareValue) {
  if (!winner && !turns) return 'Draw'
  if (winner) return `Winner ${winner}`
  return `Next player: ${player}`
}
