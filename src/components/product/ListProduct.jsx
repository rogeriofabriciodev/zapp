import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import ConsultProduct from '../product/ConsultProduct'

const ListProduct = () => {
  console.log("teste de consumo de dados PRODUCT LIST 0")
  const [sortBy] = useState('NAME_ASC')
  const products = ConsultProduct(sortBy)

  return (
    <div className="container mt-5 mb-5">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Cod.</th>
            <th>Produto</th>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product => 
            <tr>
              <td width="15%" key={product.id}>{product.productCode}</td>
              <td width="15%">{product.productName}</td>
              <td width="15%">{product.productModel}</td>
              <td width="15%">{product.productBrandName}</td>
              <td width="40%" className="text-left">{product.productDescription}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
console.log("teste de consumo de dados PRODUCT LIST 1")
export default ListProduct