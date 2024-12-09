import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/esm/Image'
import Row from 'react-bootstrap/esm/Row'
import Card from 'react-bootstrap/esm/Card'
import bigStar from '../components/star.png'
import Button from 'react-bootstrap/esm/Button'
import { useParams } from 'react-router-dom'
import { fetchDeviceById } from '../http/deviceApi'


const DevicePage = () => {
    const [device, setDevice] = useState({info : []})
    const {id} = useParams()

    useEffect(()=>{
        fetchDeviceById(id)
        .then(data=>setDevice(data))
    }, [])

  return (
    <Container className='pt-5'>
        <Row>
            <Col md={4} >
                <Image width={200} height={300} src={process.env.REACT_APP_API_URL +   device.img}/>
            </Col>
            <Col md={4} >
                <div className='d-flex flex-column align-items-center'>
                    <h2>{device.name}</h2>
                    <div 
                        style={{background: `url(${bigStar}) no-repeat center center `, width: 240, height: 240, backgroundSize: 'cover', fontSize: 40}}
                        className='d-flex align-items-center justify-content-center'>
                        {device.rating}
                    </div>
                </div>
    
            </Col>
            <Col md={4} >
                <Card className='d-flex flex-column align-items-center justify-content-around' 
                    style={{width: 300, height: 300, fontSize: 32, border : '4px solid teal', borderRadius: 10}}
                >
                    <h3>From: {device.price} dollar</h3>
                    <Button variant='success'>
                        Add cart
                    </Button>
                </Card>
            </Col>
        </Row>
        <Row>
            <h1>Parametries</h1>

            {
                device.info.map((info,i)=>
                    <Row 
                    style={{background: i%2===0? 'lightgray' : 'transparent'}}
                    className='d-flex flex-column m-2' 
                    key={info.id}>
                        <div>
                            <span style={{ fontWeight: 700, display: 'inline-block'}}>{info.title}</span>: {info.description}
                        </div>
                        
                    </Row>
                )
            }
        </Row>
    </Container>
  )
}

export default DevicePage
