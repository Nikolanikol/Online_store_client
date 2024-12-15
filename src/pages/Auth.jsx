import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/Row';
import { NavLink, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userApi';
import { observer } from 'mobx-react-lite';
import { Context } from '..';




const Auth =observer( () => {
    const navigate = useNavigate()

    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async()=>{

            try {
                let data;
                if(isLogin){
                    data = await login(email, password)
        
        
                }else{
                    data = await registration(email, password)
        
                }
                user.setUser(user)
                user.setIsAuth(true)
                navigate(SHOP_ROUTE)
            } catch (error) {
                alert(error.response.data.message)
            }

        
    }

    return (
        <Container 
            style={{height: window.innerHeight - 54}}
            className='d-flex justify-content-center align-items-center'>

                <Card style={{width: 600, padding: 20}}>
                    <h2 className='m-auto '>{isLogin ?  'Authorization' : 'Registration' }</h2>
                    <hr className='mb-4 mt-4'/>
                    <Form className='d-flex row-gap-4 flex-column'>
                        <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} className='' placeholder='Enter email'></Form.Control>
                        <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)}className='' placeholder='Enter password'></Form.Control>
                        <div className='d-flex align-items-center flex-row justify-content-between'>
                            {
                                isLogin?
                                <div  >
                                    Haven`t account? <NavLink to={REGISTRATION_ROUTE} >Registration</NavLink>
                                </div>
                                :
                                <div  >
                                    You have account? <NavLink to={LOGIN_ROUTE} >Login!!!</NavLink>
                                </div>
                            }

                            <Button 
                                variant='outline-success' 
                                className='justify-self-end px-4 align-self-end'
                                onClick={()=>click()}
                            > {isLogin ? 'Login' : 'Registration' } </Button>
                        </div>
                    </Form>
                </Card>

        </Container>
    )
})

export default Auth
