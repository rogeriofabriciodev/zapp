import { useState, useEffect } from 'react'
import firebase from '../config/FirebaseConfig'

const SORT_OPTIONS = {
  'NAME_ASC': { column: 'subCategory', direction: 'asc'}
}

function SubCategoryConsultByCategory(sortBy = 'NAME_ASC') {
  const [ subCategoryNames, setSubCategoryNames ] = useState([])

  useEffect(() => {
    const ref = firebase
      .firestore().collection('subcategories')
      .where('category', '==', 'Vídeo')
    const unsubscribe = ref
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

export default SubCategoryConsultByCategory
