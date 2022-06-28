import React from 'react'

export default function ItemCount({stock, count, setCount, onAdd}) {
    const increase = () => {
        setCount( count + 1)
    }

    const decrease = () => {
       setCount(count - 1)
    }

  return (
    <div className='counter'>
      <div className="counter-button">
        <button disabled={count <= 1} onClick={decrease}>-</button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={increase}>+</button>
      </div>
      <div className='counter-button-goCart'>
        <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
       </div>
    </div>
  )
}
 