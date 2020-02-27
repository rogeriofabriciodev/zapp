import React, { useState } from 'react'
import firebase from '../config/FirebaseConfig'

const InsertNewManufacturer = () => {

  console.log("teste de consumo de dados MANUFACTURER INSERT 0")

  const [manufacturer, setManufacturer] = useState('')

  function submitData(e) {
    e.preventDefault()

    firebase
    .db
    .collection('manufacturer')
    .add({
      manufacturer
    })
    .then(() => {
      setManufacturer('')
    }) 
    console.log("teste de consumo de dados MANUFACTURER INSERT 1")
  }
    
    return (
      <div className="container">
        <div className="form-row border border-dark p-5 mt-5">
          <div className="col-12 justify-content-center px-5">

            <h1>Cadastrar Fabricante</h1>

            <form onSubmit={ submitData }>

              <div className="form-group mt-5">
                <input className="form-control" type="text" 
                  value={ manufacturer } 
                  onChange={e => setManufacturer(e.currentTarget.value)} 
                  placeholder="Digite fabricante" id="validationDefault01" 
                  required />
              </div>

              <button className="btn btn-info my-3">Adicionar Fabricante</button>

            </form>

          </div>
        </div>
      </div>
    )
  }
  console.log("teste de consumo de dados MANUFACTURER INSERT 2")
  export default InsertNewManufacturer