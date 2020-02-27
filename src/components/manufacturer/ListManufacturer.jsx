import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import ConsultManufacturer from '../manufacturer/ConsultManufacturer'

const ListManufacturer = () => {
  console.log("teste de consumo de dados MANUFACTURER LIST 0")

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
console.log("teste de consumo de dados MANUFACTURER LIST 1")

export default ListManufacturer