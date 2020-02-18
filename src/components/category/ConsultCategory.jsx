import { useState, useEffect } from 'react'
import firebase from '../config/FirebaseConfig'

const SORT_OPTIONS = {
  'NAME_ASC': { column: 'category', direction: 'asc'}
}

function CategoryConsult(sortBy = 'NAME_ASC') {
  const [ categoryNames, setCategoryNames ] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
                        .firestore()
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

  return categoryNames

}

export default CategoryConsult
