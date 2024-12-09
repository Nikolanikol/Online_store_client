import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import Row from 'react-bootstrap/esm/Row'
import DeviceItem from './DeviceItem'

const DeviceList = observer( () => {
    const {device} = useContext(Context)
  return (
    <Row className='d-flex row-gap-4 pt-5'>
      {
        device._devices.map(device=>{
            return (
                <DeviceItem key={device.id} device={device}/>
            )
        })
      }
    </Row>
  )
})

export default DeviceList
