import React from 'react'
import { useSelector } from 'react-redux'
//conecta o redux com os reducers
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.svg'
import reserve from '../../store/modules/reservas/reducer'
import './style.css'


function Header() {
  const reserveSize = useSelector(state => state.reserve.length)
  return (
    <header className='container'>
        <Link to='/'>
            <img className='logo' src={logo} alt='logo do site'/>
        </Link>
        <Link to='/reservas' className='reserva'>
            <div>
                <strong>Minhas reservas</strong>
                <span>{reserveSize} reservas</span>
            </div>
        </Link>
        
    </header>
  )
}

export default Header