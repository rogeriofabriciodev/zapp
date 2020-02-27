import { useState, useEffect } from 'react'
import firebase from '../config/FirebaseConfig'

const SORT_OPTIONS = {
  'NAME_ASC': { column: 'productName', direction: 'asc'}
}
console.log("teste de consumo de dados PRODUCT CONSULT 0")

function ProductConsult(sortBy = 'NAME_ASC') {
  console.log("teste de consumo de dados PRODUCT CONSULT 1")

  const [ productNames, setProductNames ] = useState([])

  useEffect(() => {
    console.log("teste de consumo de dados PRODUCT CONSULT 2")
    const unsubscribe = firebase
                        .db
                        .collection('products')
                        .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
                        .onSnapshot((snapshot) => {
                          const newProduct = snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                          }))
                          console.log("teste de consumo de dados PRODUCT CONSULT 3")
                          setProductNames(newProduct)

                        })
                        console.log("teste de consumo de dados PRODUCT CONSULT 4")
                        return() => unsubscribe()
  }, [sortBy])
  console.log("teste de consumo de dados PRODUCT CONSULT 5")

  return productNames

}
console.log("teste de consumo de dados PRODUCT CONSULT 6")
export default ProductConsult
