import Board from "./Board";
import {useGameStore} from "@/hooks/useGameStore";

export default function Game() {
  const history = useGameStore((state) => state.history)
  const setHistory = useGameStore((state) => state.setHistory)
  const xIsNext = useGameStore((state) => state.xIsNext)
  const setXIsNext = useGameStore((state) => state.setXIsNext)
  const currentSquares = history[history.length - 1] as SquareValue[];

  function handlePlay(nextSquares: SquareValue[]) {
    // @ts-ignore
    setHistory(history.concat([nextSquares]));
    setXIsNext(!xIsNext)
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
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div style={{ marginLeft: '1rem' }}>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}
