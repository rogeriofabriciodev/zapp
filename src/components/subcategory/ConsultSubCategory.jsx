import { useState, useEffect } from 'react'
import firebase from '../config/FirebaseConfig'

const SORT_OPTIONS = {
  'NAME_ASC': { column: 'category', direction: 'asc'}
}

console.log("teste de consumo de dados SUBCATEGORY CONSULT 0")

function SubCategoryConsult(sortBy = 'NAME_ASC') {
  console.log("teste de consumo de dados SUBCATEGORY CONSULT 1")

  const [ subCategoryNames, setSubCategoryNames ] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
                        .firestore()
                        .collection('subcategories')
                        // .where('category', '==', 'Audio')
                        .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
                        .orderBy('subCategory', 'asc')
                        .onSnapshot((snapshot) => {
                          const newSubCategory = snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                          }))

                          setSubCategoryNames(newSubCategory)

                        })

                        return() => unsubscribe()
  }, [sortBy])

  console.log("teste de consumo de dados SUBCATEGORY CONSULT 2")
  return subCategoryNames

}
console.log("teste de consumo de dados SUBCATEGORY CONSULT 3")
export default SubCategoryConsult
