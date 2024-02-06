import {useDispatch} from 'react-redux';
import { useState, useEffect } from 'react'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Header, Footer } from './components';
import {Outlet} from 'react-router-dom';

function App() {


  const [loading, setLoading] = useState(true); //we are creating this usestate to show a loading screen
  const dispatch = useDispatch()


  //ab jaise hi loading ho then ek use effect lo and ask it to whether login or not.

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else{
        dispatch((logout()))
      }
    })
    .finally(() => setLoading(false))
  }, [])




  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400' >
      <div className='w-full block'>
        <Header/>
        <main>
          {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
