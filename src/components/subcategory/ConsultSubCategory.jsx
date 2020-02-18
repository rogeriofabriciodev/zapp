import { useState, useEffect } from 'react'
import firebase from '../config/FirebaseConfig'

const SORT_OPTIONS = {
  'NAME_ASC': { column: 'subCategory', direction: 'asc'}
}

function SubCategoryConsult(sortBy = 'NAME_ASC') {
  const [ subCategoryNames, setSubCategoryNames ] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
                        .firestore()
                        .collection('subcategories')
                        .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
                        .onSnapshot((snapshot) => {
                          const newSubCategory = snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                          }))

                          setSubCategoryNames(newSubCategory)

                        })

                        return() => unsubscribe()
  }, [sortBy])

  return subCategoryNames

}

export default SubCategoryConsult
