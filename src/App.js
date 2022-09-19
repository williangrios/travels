import React from 'react'
import Routes from './routes'
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import {Provider} from 'react-redux';
import store from './store';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

function App() {
  return ( 
    <div>
      <Provider store={store}>
        
        <BrowserRouter>
          <ToastContainer autoClose={3000}/>
          <Header/>
          <Routes/>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
