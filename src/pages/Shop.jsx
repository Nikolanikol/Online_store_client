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
import Pages from '../components/Pages'

const Shop = observer(  () => {
    const {device} = useContext(Context)
    useEffect(()=>{
        fetchTypes()
            .then(data=>device.setType(data))
        fetchBrand()
            .then(data=>device.setBrand(data))
        fetchDevice(null, null, 1, 2)
            .then(data=>{
                device.setDevice(data.rows)
                device.setTotalCount(data.count)
    })
   }, [])

   useEffect(()=>{
    fetchDevice(device.selectedType.id, device.selectedBrand.id, device.page, device.limit)
    .then(data=>{
        device.setDevice(data.rows)
        device.setTotalCount(data.count)
} )
    
},[device.page,device.selectedType.id, device.selectedBrand.id])
  return (
    <Container>
        <Row className='mt-4'>
            <Col md={3}>
                <TypeBar/>
            </Col>

            <Col md={9} >
                <BrandBar/>
                <DeviceList/>
                <Pages/>
            </Col>
        </Row>
    </Container>
  )
})

export default Shop
