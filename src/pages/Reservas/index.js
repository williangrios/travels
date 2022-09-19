import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './style.css'
import {MdDelete, MdAddCircle, MdRemoveCircle} from 'react-icons/md'
import {removeReserve, updateAmountReserve} from '../../store/modules/reservas/actions'

function Reservas() {

  const reserves = useSelector(state => state.reserve)
  const dispatch = useDispatch();

  function handleRemove(id){
    dispatch(removeReserve(id));
  }

  function incrementAmount(trip){
    dispatch(updateAmountReserve(trip.id, trip.amount +1 ))
  }

  function decrementAmount(trip){
    dispatch(updateAmountReserve(trip.id, trip.amount -1 ))
  }

  return (
    <div>
      <h1 className='title'>Você solicitou {reserves.length} reserva</h1>
      {reserves.map((res) => (
        <div className='reservas' key={res.id}>
          <img src={res.image} alt={res.title} />
          <strong>{res.title}</strong>
          <div id='amount'>
            <button type='button' onClick={() => decrementAmount(res)}>
              <MdRemoveCircle size={25} />
            </button>
            <span>{res.amount}</span>
            <button type='button' onClick={() => incrementAmount(res)}>
              <MdAddCircle size={25} />
            </button>
          </div>
          <button type='button' onClick={() => {
              handleRemove(res.id)
          }}><MdDelete size={25} color='#191919'/></button>
        </div>

      ))}
      
      <footer>
        <button type='button'>
          Solicitar Reservas
        </button>
      </footer>
    </div>
  )
}

export default Reservas