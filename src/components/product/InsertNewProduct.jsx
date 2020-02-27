import React, { useState, useEffect } from 'react'
import firebase from '../config/FirebaseConfig'
import ManufacturerConsult from '../manufacturer/ConsultManufacturer'
import ProviderConsult from '../provider/ConsultProvider'
import CategoryConsult from '../category/ConsultCategory'
import SubCategoryConsult from '../subcategory/ConsultSubCategory'


const InsertNewProduct = () => {
  console.log("teste de consumo de dados PRODUCT INSERT 0")

  const manufacturers = ManufacturerConsult()
  const providers = ProviderConsult()
  const categories = CategoryConsult()
  const subcategories = SubCategoryConsult()

  const [ productName, setProductName ] = useState('')
  const [ productModel, setProductModel ] = useState('')
  const [ productBrandName, setProductBrandName ] = useState('')
  const [ productProviderName, setProductProviderName ] = useState('')
  const [ productSerialNumber, setProductSerialNumber ] = useState('')
  const [ productDescription, setProductDescription ] = useState('')
  const [ productProfitMargin, setProductProfitMargin ] = useState('')
  const [ productCategory, setProductCategory ] = useState('')
  const [ productSubcategory, setProductSubcategory ] = useState('')
  const [ productCode, setProductCode ] = useState('')


  function submitData(e) {
    e.preventDefault()
    console.log("teste de consumo de dados PRODUCT INSERT 1")
    firebase
    .firestore()
    .collection('products')
    .add({
      productName,
      productModel,
      productBrandName,
      productProviderName,
      productSerialNumber,
      productDescription,
      productProfitMargin,
      productCategory,
      productSubcategory,
      productCode
    }).then(() => {
      setProductName('')
      setProductModel('')
      setProductBrandName('')
      setProductProviderName('')
      setProductSerialNumber('')
      setProductDescription('')
      setProductProfitMargin('')
      setProductCategory('')
      setProductSubcategory('')
      setProductCode('')
    })
  }


  return (
    <div className="container">
        <div className="form-row border border-dark p-5 mt-5">
          <div className="col-12 justify-content-center px-5">

            <h1>Cadastrar Produtos</h1>

            <form onSubmit={ submitData }>
              
              <div className="form-group mt-5">
                <input className="form-control" type="text" 
                  value={ productName } 
                  onChange={e => setProductName(e.currentTarget.value)} 
                  placeholder="Produto" id="validationDefault01" 
                  required />
              </div>

              <div className="form-group">
                <input className="form-control" type="text" 
                  value={ productModel } 
                  onChange={e => setProductModel(e.currentTarget.value)} 
                  placeholder="Digite o modelo" id="validationDefault02" 
                  required />
              </div>

              <div className="form-group">
                <input className="form-control" type="text" 
                  value={ productSerialNumber } 
                  onChange={e => setProductSerialNumber(e.currentTarget.value)} 
                  placeholder="Digite o número do serial" id="validationDefault03" 
                  required />
              </div>

              <div className="form-group">
                <input className="form-control" type="number" 
                  value={ productProfitMargin } 
                  onChange={e => setProductProfitMargin(e.currentTarget.value)} 
                  placeholder="Digite a margem de lucro que deverá ser aplicada" id="validationDefault04" 
                  required />
              </div>

              <div className="form-group">
                <input className="form-control" type="text" 
                  value={ productCode } 
                  onChange={e => setProductCode(e.currentTarget.value)} 
                  placeholder="Digite o código interno para o produto" id="validationDefault05" 
                  required />
              </div>

              <div className="form-group">
                <select className="form-control" 
                  value={ productBrandName } 
                  onChange={e => setProductBrandName(e.currentTarget.value)} 
                  id="validationDefault06" 
                  required>
                  <option selected disabled value="">Fabricantes</option>
                  { manufacturers.map((manufacturer =>
                    <option key={manufacturer.id} value={manufacturer.manufacturer}>{ manufacturer.manufacturer }</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <select className="form-control" 
                  value={ productProviderName } 
                  onChange={e => setProductProviderName(e.currentTarget.value)} 
                  id="validationDefault07" 
                  required>
                  <option selected disabled value="">Fornecedores</option>
                  { providers.map((provider =>
                    <option key={provider.id} value={provider.provider}>{ provider.provider }</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <select className="form-control" 
                  value={ productCategory } 
                  onChange={e => setProductCategory(e.currentTarget.value)} 
                  id="validationDefault08" 
                  required>
                  <option selected disabled value="">Categorias</option>
                  { categories.map((category =>
                    <option key={category.id} value={category.category}>{ category.category}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <select className="form-control" 
                  value={ productSubcategory } 
                  onChange={e => setProductSubcategory(e.currentTarget.value)} 
                  id="validationDefault09" 
                  required>
                  <option selected disabled value="">Sub-Categorias</option>
                  { subcategories.map((subcategory =>
                    <option key={subcategory.id} value={subcategory.subCategory}>{ subcategory.category } - { subcategory.subCategory }</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <textarea className="form-control" rows="3"
                  value={ productDescription } 
                  onChange={e => setProductDescription(e.currentTarget.value)} 
                  id="validationDefault10" 
                  placeholder="Digite uma descrição do produto"
                  required>
                </textarea>
              </div>

              <button className="btn btn-info my-3">Adicionar Produto</button>

            </form>

          </div>
        </div>
      </div>
  )
}
console.log("teste de consumo de dados PRODUCT INSERT 2")
export default InsertNewProduct