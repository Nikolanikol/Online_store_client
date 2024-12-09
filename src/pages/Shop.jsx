import React, { useContext, useEffect } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { fetchBrand, fetchDevice, fetchDevices, fetchTypes } from '../http/deviceApi'

const Shop = observer(  () => {
    const {device} = useContext(Context)
    useEffect(()=>{
        fetchTypes()
        .then(data=>device.setType(data))
        fetchBrand()
        .then(data=>device.setBrand(data))
        fetchDevice()
        .then(data=>device.setDevice(data.rows))
        console.log(device)
    },[])
  return (
    <Container>
        <Row className='mt-4'>
            <Col md={3}>
                <TypeBar/>
            </Col>

            <Col md={9} >
                <BrandBar/>
                <DeviceList/>
            </Col>
        </Row>
    </Container>
  )
})

export default Shop
