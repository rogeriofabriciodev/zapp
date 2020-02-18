import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import ConsultCategory from '../category/ConsultCategory'

const ListCategory = () => {
  const [sortBy] = useState('NAME_ASC')
  const categories = ConsultCategory(sortBy)

  return (
    <div className="container mt-5">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {/* <td>Item</td> */}
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category => 
            <tr>
              {/* <td>{manufacturers.keys.}</td> */}
              <td key={category.id}>{category.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ListCategory