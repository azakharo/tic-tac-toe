import {SquareValue} from "@/types";

interface Props {
  value: SquareValue;
  onSquareClick: () => void
}

export function Square({ value, onSquareClick }: Props) {
  return (
    <button
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        backgroundColor: '#fff',
        border: '1px solid #999',
        outline: 0,
        borderRadius: 0,
        fontSize: '1rem',
        fontWeight: 'bold',
        // Solved issue with double borders
        margin: '-1px 0 0 -1px',
      }}
      onClick={() => onSquareClick()}
    >
      {value}
    </button>
  )
}
