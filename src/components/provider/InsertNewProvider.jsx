import React, { useState } from 'react'
import firebase from '../config/FirebaseConfig'

const InsertNewProvider = () => {

  console.log("teste de consumo de dados PROVIDER INSERT 0")

  const [provider, setProvider] = useState('')


  function submitData(e) {
    e.preventDefault()

    firebase
    .db
    .collection('providers')
    .add({
      provider
    })
    .then(() => {
      setProvider('')
    }) 

    console.log("teste de consumo de dados PROVIDER INSERT 1")

  }
    
    return (
      <div className="container">
        <div className="form-row border border-dark p-5 mt-5">
          <div className="col-12 justify-content-center px-5">

            <h1>Cadastrar Fornecedor</h1>

            <form onSubmit={ submitData }>

              <div className="form-group mt-5">
                <input className="form-control" type="text" 
                  value={ provider } 
                  onChange={e => setProvider(e.currentTarget.value)} 
                  placeholder="Digite Fornecedor" id="validationDefault01" 
                  required />
              </div>

              <button className="btn btn-info my-3">Adicionar Fornecedor</button>

            </form>

          </div>
        </div>
      </div>
    )
  }
  console.log("teste de consumo de dados PROVIDER INSERT 2")
  export default InsertNewProvider