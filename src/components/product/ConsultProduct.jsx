import { useState, useEffect } from 'react'
import firebase from '../config/FirebaseConfig'

const SORT_OPTIONS = {
  'NAME_ASC': { column: 'productName', direction: 'asc'}
}

function ProductConsult(sortBy = 'NAME_ASC') {
  const [ productNames, setProductNames ] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
                        .firestore()
                        .collection('products')
                        .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
                        .onSnapshot((snapshot) => {
                          const newProduct = snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                          }))

                          setProductNames(newProduct)

                        })

                        return() => unsubscribe()
  }, [sortBy])

  return productNames

}

export default ProductConsult
