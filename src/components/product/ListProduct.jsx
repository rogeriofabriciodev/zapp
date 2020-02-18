import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import ConsultProduct from '../product/ConsultProduct'

const ListProduct = () => {
  const [sortBy] = useState('NAME_ASC')
  const products = ConsultProduct(sortBy)

  return (
    <div className="container mt-5">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {/* <td>Item</td> */}
            <th>Produto</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product => 
            <tr>
              {/* <td>{manufacturers.keys.}</td> */}
              <td key={product.id}>{product.productName}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ListProduct