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
            <th>ID</th>
            <th>Fabricante</th>
          </tr>
        </thead>
        <tbody>
          {manufacturers.map((manufacturer => 
            <tr>
              <td width="30%" key={manufacturer.id}>{manufacturer.id}</td>
              <td >{manufacturer.manufacturer}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ListManufacturer