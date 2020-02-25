import React, {useState} from 'react'
import {Table, Row, Col} from 'react-bootstrap'
import myData  from '../bank/myData'


const ListProd = () => {
  const [brandName, setBrandName] = useState('')

  const manufacturerID = myData.manufacturer.id
  const manufacturerName = myData.manufacturer.manufacturer

  const prodID = myData.product.id
  const prodName = myData.product.product
  const brandID = myData.product.brandID

  //setBrandName(manufacturerName)

  return(

    <>
      <Table>
        <Row>
          <Col>{manufacturerID} - {manufacturerName}</Col>
        </Row>
        <Row>
          <Col>{prodID} - {prodName} - {brandName}</Col>
        </Row>
      </Table>
    </>

  )
}

export default ListProd