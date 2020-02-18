import React, { useState } from 'react'
import firebase from '../config/FirebaseConfig'
import CategoryConsult from '../category/ConsultCategory'

const InsertNewSubCategory = () => {
  const categoriesID = CategoryConsult()

  const [ subCategory, setSubCategory ] = useState('')
  const [ categoryID, setCategoryID ] = useState('')

  function submitData(e) {
    e.preventDefault()

    firebase
    .firestore()
    .collection('subcategories')
    .add({
      subCategory,
      categoryID
    })
    .then(() => {
      setSubCategory('')
      setCategoryID('')
    }) 

  }
    
    return (
      <div className="container">
        <div className="form-row border border-dark p-5 mt-5">
          <div className="col-12 justify-content-center px-5">

            <h1>Cadastrar Sub-Categoria</h1>

            <form onSubmit={ submitData }>

              <div className="form-group mt-5">
                <input className="form-control" type="text" 
                  value={ subCategory } 
                  onChange={e => setSubCategory(e.currentTarget.value)} 
                  placeholder="Digite a Sub-Categoria" id="validationDefault01" 
                  required />
              </div>
              
              <div className="form-group">
                <select className="form-control" 
                  value={ categoryID } 
                  onChange={e => setCategoryID(e.currentTarget.value)} 
                  id="validationDefault09" 
                  required>
                  <option selected disabled value="">Categoria</option>
                  { categoriesID.map((category =>
                    <option key={category.id} value={category.id}>{ category.category }</option>
                  ))}
                </select>
              </div>

              <button className="btn btn-info my-3">Adicionar Sub-Categoria</button>

            </form>

          </div>
        </div>
      </div>
    )
  }
  
  export default InsertNewSubCategory