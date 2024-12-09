import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import { createType } from '../../http/deviceApi';

const TypeModal = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addType = ()=>{
        createType({name : value}).then(data=>setValue(''))
        onHide()

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
                Add Type
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>
                <Form.Control value={value} onChange={e=>setValue(e.target.value)} placeholder={'Enter Type name'} />
            </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant='success' onClick={onHide}>Close</Button>
            <Button variant='success' onClick={addType}>Add Type</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default TypeModal
