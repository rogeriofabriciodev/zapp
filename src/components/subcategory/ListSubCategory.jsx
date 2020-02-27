import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import SubCategoryConsult from '../subcategory/ConsultSubCategory'

const ListSubCategory = () => {
  console.log("teste de consumo de dados SUBCATEGORY LIST 0")

  const [sortBy] = useState('NAME_ASC')
  const subcategories = SubCategoryConsult(sortBy)

  return (
    <div className="container mt-5">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="text-center">Sub-Categoria</th>
            <th className="text-center">Categoria</th>
          </tr>
        </thead>
        <tbody>
          {subcategories.map((subcategory => 
            <tr>
              <td key={subcategory.id}>{subcategory.subCategory}</td>
              <td className="text-center">{subcategory.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
console.log("teste de consumo de dados SUBCATEGORY LIST 1")
export default ListSubCategory