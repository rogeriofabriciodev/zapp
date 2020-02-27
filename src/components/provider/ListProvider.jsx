import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import ConsultProvider from '../provider/ConsultProvider'

const ListProvider = () => {
  console.log("teste de consumo de dados PROVIDER LIST 0")

  const [sortBy] = useState('NAME_ASC')
  const providers = ConsultProvider(sortBy)

  return (
    <div className="container mt-5">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {/* <td>Item</td> */}
            <th>Fornecedores</th>
          </tr>
        </thead>
        <tbody>
          {providers.map((provider => 
            <tr>
              {/* <td>{manufacturers.keys.}</td> */}
              <td key={provider.id}>{provider.provider}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
console.log("teste de consumo de dados PROVIDER LIST 1")

export default ListProvider