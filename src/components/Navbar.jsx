import React, { useContext } from 'react'
import { Context } from '..'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Shop from '../pages/Shop';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import Button from 'react-bootstrap/Button';
import {observer} from 'mobx-react-lite'


const AppNavbar = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const handleLogout = ()=>{
        navigate(LOGIN_ROUTE)
        user.setIsAuth(false)
        user.setUser({})
    }
  return (
    <div>
      <>
      <Navbar className='p-5' bg="dark" data-bs-theme="dark">
        <Container>
            <Link style={{color: 'white', fontWeight : 700, fontSize : 20}} to={SHOP_ROUTE}> Buy device</Link>

            {
                user.isAuth?
                <Nav className="ml-auto gap-5  " style={{color : 'white'}}>
                    <Button onClick={()=>navigate(ADMIN_ROUTE)} variant='outline-light'>Admin panel</Button>
                    <Button onClick={()=>handleLogout()} variant='outline-light' >Log out</Button>
                </Nav>
                :
                <Nav className="ml-auto" style={{color : 'white'}}>
                    <Button onClick={()=>navigate(LOGIN_ROUTE)} variant='outline-light'>Authorthation</Button>
                </Nav>
            }

        </Container>
      </Navbar>
     
    </>
    </div>
  )
})

export default AppNavbar
