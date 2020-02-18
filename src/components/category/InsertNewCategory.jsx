import React, { useState } from 'react'
import firebase from '../config/FirebaseConfig'

const InsertNewCategory = () => {

  const [category, setCategory] = useState('')

  function submitData(e) {
    e.preventDefault()

    firebase
    .firestore()
    .collection('categories')
    .add({
      category
    })
    .then(() => {
      setCategory('')
    }) 

  }
    
    return (
      <div className="container">
        <div className="form-row border border-dark p-5 mt-5">
          <div className="col-12 justify-content-center px-5">

            <h1>Cadastrar Categoria</h1>

            <form onSubmit={ submitData }>

              <div className="form-group mt-5">
                <input className="form-control" type="text" 
                  value={ category } 
                  onChange={e => setCategory(e.currentTarget.value)} 
                  placeholder="Digite a Categoria" id="validationDefault01" 
                  required />
              </div>

              <button className="btn btn-info my-3">Adicionar Categoria</button>

            </form>

          </div>
        </div>
      </div>
    )
  }
  
  export default InsertNewCategory