import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import SubCategoryConsult from '../subcategory/ConsultSubCategory'

const ListSubCategory = () => {
  const [sortBy] = useState('NAME_ASC')
  const subcategories = SubCategoryConsult(sortBy)

  return (
    <div className="container mt-5">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Sub-Categoria</th>
            {/* <th>Categoria</th> */}
          </tr>
        </thead>
        <tbody>
          {subcategories.map((subcategory => 
            <tr>
              <td key={subcategory.id}>{subcategory.subCategory}</td>
              {/* <td key={subcategory.id}>{subcategory.categoryID}</td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ListSubCategory