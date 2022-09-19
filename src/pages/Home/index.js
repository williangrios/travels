import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import api from '../../services/api';
import {toast} from 'react-toastify'
import {MdFlightTakeoff} from 'react-icons/md'
import './style.css'
import { addReserveRequest} from '../../store/modules/reservas/actions'

function Home() {
  const dispatch = useDispatch();

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    
    async function loadTrips(){
      await api.get('/trips')
      .then((response) => {
        setTrips(response.data);
        toast.success('Escolha seu próximo destino')
      } )
      .catch((e) => {
        toast.error(e)
      })
    }

    loadTrips();

  }, [])

  function handleAdd(id){
    dispatch(addReserveRequest(id))
  }

  return (
    <div>
      <div className='box'>
        {trips.map((trip) => (
          <li key={String(trip.id)}>
            <img src={trip.image} alt={trip.title} />
            <strong>{trip.title}</strong>
            <span>Status: {trip.status ? 'Disponível' : 'Não disponível'}</span>
            <button type='button' onClick={() => {handleAdd(trip.id)}}>
              <div><MdFlightTakeoff size={16} color='#fff'/></div>
              
              <span>Solicitar reserva</span>
            </button>
          </li>
        ))}
      </div>
      
    </div>
  )
}

export default Home