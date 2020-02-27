import { useState, useEffect } from 'react'
import firebase from '../config/FirebaseConfig'

const SORT_OPTIONS = {
  'NAME_ASC': { column: 'category', direction: 'asc'}
}
console.log("teste de consumo de dados CATEGORY CONSULT 0")


function CategoryConsult(sortBy = 'NAME_ASC') {
  console.log("teste de consumo de dados CATEGORY CONSULT 1")

  const [ categoryNames, setCategoryNames ] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
                        .db
                        .collection('categories')
                        .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
                        .onSnapshot((snapshot) => {
                          const newCategory = snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                          }))

                          setCategoryNames(newCategory)

                        })

                        return() => unsubscribe()
  }, [sortBy])
  console.log("teste de consumo de dados CATEGORY CONSULT 2")
  return categoryNames

}
console.log("teste de consumo de dados CATEGORY CONSULT 3")
export default CategoryConsult
