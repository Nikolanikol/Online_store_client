import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { authRoutes, publickRoutes } from '../routes'
import Shop from '../pages/Shop'
import { Context } from '..'

const AppRouter = () => {
    const {user} = useContext(Context)

  return (
    <Routes>
        {
            user.isAuth ?
            authRoutes.map(({path, component})=>{
                return <Route key={path} path={path} element={component} ></Route>
            })
            :
            publickRoutes.map(({path, component})=>{
                return <Route key={path} path={path} element={component} ></Route>
            })
        }
        <Route path='*' element={<Shop/>}/>
    </Routes>
  )
}

export default AppRouter
