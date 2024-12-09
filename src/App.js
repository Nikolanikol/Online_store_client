import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter';

import AppNavbar from './components/Navbar';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from '.';
import { check } from './http/userApi';
import Spinner from 'react-bootstrap/Spinner';


const App = observer  (() =>{
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        check()
            .then(data=>{
                user.setUser(true)
                user.setIsAuth(true)

            })
            .finally(()=>setLoading(false))

    }, [])
    if(loading){
        return <Spinner className='p-3' animation="border" variant="success" ></Spinner>
    }
  return (
    <BrowserRouter className="App">
        <AppNavbar/>
        <AppRouter/>
    </BrowserRouter>
  );
})

export default App;
