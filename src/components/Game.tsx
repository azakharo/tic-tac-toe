import Board from "./Board";
import {useGameStore} from "@/hooks/useGameStore";
import {SquareValue} from "@/types";

export default function Game() {
  const history = useGameStore((state) => state.history)
  const setHistory = useGameStore((state) => state.setHistory)
  const currentMove = useGameStore((state) => state.currentMoveIndex)
  const setCurrentMove = useGameStore((state) => state.setCurrentMoveIndex)
  const currentSquares = history[currentMove] as SquareValue[];
  const nextPlayer = currentMove % 2 === 0 ? 'X' : 'O';

  function handlePlay(nextSquares: SquareValue[]) {
    const nextHistory = history.slice(0, currentMove + 1).concat([nextSquares])
    // @ts-ignore
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        fontFamily: 'monospace',
      }}
    >
      <div>
        <Board nextPlayer={nextPlayer} squares={currentSquares} onSquaresChange={handlePlay}/>
      </div>

      <ol style={{marginLeft: '5rem'}}>
        {history.map((_, historyIndex) => {
          const description =
            historyIndex > 0
              ? `Go to move #${historyIndex}`
              : 'Go to game start'

          return (
            <li key={historyIndex}>
              <button onClick={() => jumpTo(historyIndex)}>
                {description}
              </button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
