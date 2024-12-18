import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Star from './Star';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
  return (
    <Col md={3} style={{ display: 'flex', justifyContent: 'center'}}>
        <Card 
            style={{ cursor : 'pointer', padding: 5,}}
            onClick={()=>navigate(DEVICE_ROUTE + '/' + device.id)}
        >
            <Image style={{padding: 15}} src={process.env.REACT_APP_API_URL+'/'+ device.img} ></Image>
            <div>
                <div className='text-black-50' style={{textAlign : 'center'}}> BrandName</div>

                <div  className='d-flex justify-content-between align-center' >
                    <div>{device.rating}</div>
                    <div style={{ alignItems: 'center', display : 'flex'}} >
                        <Star rating={device.rating}/>

                    </div>

                </div>
                <div>{device.name}</div>
            </div>
        </Card>
    </Col>
  )
}

export default DeviceItem
