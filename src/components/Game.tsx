import Board from "./Board";
import {useGameStore} from "@/hooks/useGameStore";
import {SquareValue} from "@/types";

export default function Game() {
  const history = useGameStore(state => state.history);
  const addToHistory = useGameStore(state => state.addToHistory)
  const currentMoveIndex = useGameStore(state => state.currentMoveIndex)
  const setCurrentMoveIndex = useGameStore(state => state.setCurrentMoveIndex)
  const currentSquares = history[currentMoveIndex]!;
  const nextPlayer = currentMoveIndex % 2 === 0 ? 'X' : 'O';

  function handleSquaresChange(newSquares: SquareValue[]) {
    addToHistory(newSquares);
  }

  function jumpTo(moveIndex: number) {
    setCurrentMoveIndex(moveIndex)
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
        <Board nextPlayer={nextPlayer} squares={currentSquares} onSquaresChange={handleSquaresChange}/>
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
