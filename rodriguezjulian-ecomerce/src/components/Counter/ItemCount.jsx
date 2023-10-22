import { useCounter } from "../hooks/useCounter"


const ItemCount = ({initial, stock, onAdd}) => {
    const {count, handleAdd, handleSubstract} = useCounter(initial, stock)


    return (
        <center>
            <button onClick={handleSubstract} className='btn-count'> - 1 </button>
            <label className="count">
                <strong>{ count }</strong>
            </label>
            <button onClick={handleAdd} className='btn-count'> + 1 </button>
            <br />
            <button onClick={()=> onAdd(count)} className='btn-count_add'> Agregar al carrito</button>
        </center>
    )
}

export default ItemCount