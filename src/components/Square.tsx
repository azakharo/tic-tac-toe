

export function Square({ value, onSquareClick }: {value: SquareValue; onSquareClick: (index: number) => void}) {
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
      }}
      onClick={() => onSquareClick}
    >
      {value}
    </button>
  )
}
