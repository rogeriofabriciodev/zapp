import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import ConsultManufacturer from '../manufacturer/ConsultManufacturer'

const ListManufacturer = () => {
  const [sortBy] = useState('NAME_ASC')
  const manufacturers = ConsultManufacturer(sortBy)

  return (
    <div className="container mt-5">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {/* <td>Item</td> */}
            <th>Fabricante</th>
          </tr>
        </thead>
        <tbody>
          {manufacturers.map((manufacturer => 
            <tr>
              {/* <td>{manufacturers.keys.}</td> */}
              <td key={manufacturer.id}>{manufacturer.manufacturer}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ListManufacturer