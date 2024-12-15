import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import Pagination from 'react-bootstrap/Pagination';


const Pages = observer(() => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []
    for(let i = 0; i < pageCount; i++){
        pages.push(i+1)
    }
  return (
    <div>
        <Pagination className='mt-4'>

            {
                pages.map(page=>{
                    return      (
                    <Pagination.Item
                        key={page}
                        active= {device.page === page}
                        onClick={()=>device.setPage(page)}
                    >
                    {page}
                </Pagination.Item>
                )})
            
            }
        


        </Pagination>

  </div>
  )
})

export default Pages
