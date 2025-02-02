import {Square} from './Square';
import {calculateStatusString, calculateTurnsLeft, calculateWinner} from '@/helpers';
import {SquareValue} from "@/types";

interface Props {
 nextPlayer: 'X' | 'O';
 squares: SquareValue[];
  onSquaresChange: (newSquares: SquareValue[]) => void;
}

export default function Board({ nextPlayer, squares, onSquaresChange }: Props) {
  const winner = calculateWinner(squares);
  const turnsLeft = calculateTurnsLeft(squares);
  const statusString = calculateStatusString(winner, turnsLeft, nextPlayer);

  function handleClick(i: number) {
    if (squares[i] || winner) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = nextPlayer;
    onSquaresChange(nextSquares);
  }

  return (
    <>
      <div style={{marginBottom: '0.5rem'}}>{statusString}</div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
          width: 'calc(3 * 2.5rem)',
          height: 'calc(3 * 2.5rem)',
          border: '1px solid #999',
        }}
      >
        {squares.map((square, squareIndex) => (
          <Square
            key={squareIndex}
            value={square}
            onSquareClick={() => handleClick(squareIndex)}
          />
        ))}
      </div>
    </>
  );
}
