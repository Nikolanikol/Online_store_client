import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import TypeModal from '../components/modals/TypeModal'
import DeviceModal from '../components/modals/DeviceModal'
import BrandModal from '../components/modals/BrandModal'

const AdminPanel = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
  return (
    <Container className='d-flex flex-column'>
        <Button onClick={()=>setTypeVisible(true)} className='m-3  p-4' variant='success' >Add type</Button>
        <Button onClick={()=>setBrandVisible(true)} className='m-3  p-4' variant='success' >Add Brand</Button>
        <Button onClick={()=>setDeviceVisible(true)} className='m-3  p-4' variant='success' >Add device</Button>
        <TypeModal show={typeVisible} onHide={()=>setTypeVisible(false)}/>
        <DeviceModal show={deviceVisible} onHide={()=>setDeviceVisible(false)}/>
        <BrandModal show={brandVisible} onHide={()=>setBrandVisible(false)}/>
    </Container>
  )
}

export default AdminPanel
