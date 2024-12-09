import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Context } from '../..';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { createDevice } from '../../http/deviceApi';
const DeviceModal = ({show,onHide}) => {

    const {device} = useContext(Context)
    const [info, setInfo] = useState([])
    const addInfo = ()=>{
        setInfo([...info, {title: '', description : '', number : Date.now()}])
    }
    const changeInfo = (key, value, number)=>{
        setInfo(info.map(i=> i.number === number ? {...i, [key] : value} : i))
    }
    const removeInfo = (number)=>{
        setInfo(info.filter(item=>item.number !== number))
    }

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [brandName, setBrandName] = useState('')
    const [typeName, setTypeName] = useState('')

    const selectFile = e =>{
        console.log(e.target.files[0])
        setFile(e.target.files[0])
    }

    const addDevice = ()=>{
        const formData = new FormData()
        console.log(info)
        formData.append('name', name)
        formData.append('price', String(price))
        formData.append('brandId', 1)
        formData.append('typeId', 1)
        formData.append('info', JSON.stringify(info))
        formData.append('img', file)


        createDevice(formData).then(data=>onHide())
    }
  return (
    <Modal
    show={show}
    onHide={onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Add Device
            </Modal.Title>
        </Modal.Header>

        <Modal.Body className='d-flex flex-column row-gap-3' >
            <Dropdown  >
                <Dropdown.Toggle>{typeName? typeName : 'Choose type'}</Dropdown.Toggle>
                <Dropdown.Menu  >
                    {
                        device.types.map(type=>
                            <Dropdown.Item 
                            onClick={()=>setTypeName(type.name)} 
                            key={type.id}
                        >{type.name}</Dropdown.Item>
                        )
                    }
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
                <Dropdown.Toggle>{brandName? brandName : 'Choose brand'}</Dropdown.Toggle>
                    <Dropdown.Menu >
                        {
                            device.brand.map(brand=>
                                <Dropdown.Item 
                                onClick={()=>setBrandName(brand.name)} 
                                key={brand.id}
                            >{brand.name}</Dropdown.Item>
                            )
                        }
                    </Dropdown.Menu>
            </Dropdown>

            <Form.Control value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter device name'/> 
            <Form.Control value={price} onChange={(e)=>setPrice(Number(e.target.value))} type='number' placeholder='Enter device price'/> 
            <Form.Control  onChange={(e)=>selectFile(e)} type='file'/> 
            <hr />
            <Button onClick={addInfo} variant='outline-dark'>
                Add new device 
            </Button>
            {
                info.map((item, i)=>
                    <Row key={i}>
                        <Col md={4}>
                            <Form.Control 
                                value={item.title}
                                onChange={(e)=>changeInfo('title', e.target.value, item.number)}
                                placeholder='Enter name utilities'/>
                        </Col>
                        <Col md={4}>
                            <Form.Control
                                value={item.description}
                                onChange={(e)=>changeInfo('description', e.target.value, item.number)}
                            
                                placeholder='Enter description utilities'/>
                        </Col>
                        <Col md={4}>
                            <Button onClick={()=>removeInfo(item.number)} >Delete</Button>
                        </Col>

                    </Row>
                )
            }
        </Modal.Body>

        <Modal.Footer>
            <Button variant='success' onClick={onHide}>Close</Button>
            <Button variant='success' onClick={addDevice}>Add Device</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default DeviceModal
