import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import Row from 'react-bootstrap/esm/Row'
import Card from 'react-bootstrap/Card';
import { toJS } from 'mobx';
import ListGroup from 'react-bootstrap/ListGroup';



const BrandBar = observer( () => {
    const {device} = useContext(Context)
  return (
    <div key={1} >
        <ListGroup className='d-flex gap-1 flex-row'>

        {
            device.brand.map((brand, i)=>{
                return (
                        <ListGroup.Item
                            key={brand.id}
                            style={{flexShrink: 1}}
                            onClick={()=>device.setSelectedBrand(brand)}
                            action

                            className='p-3 '
                            variant='success'
                        >
                            {brand.name}
                        </ListGroup.Item>

                   
                )
            })
        }
        </ListGroup>

    </div>
  )
})

export default BrandBar
