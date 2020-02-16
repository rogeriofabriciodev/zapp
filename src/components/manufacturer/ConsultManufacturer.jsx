import { useState, useEffect } from 'react'
import firebase from '../config/FirebaseConfig'

const SORT_OPTIONS = {
  'NAME_ASC': { column: 'manufacturer', direction: 'asc'}
}

function ManufacturerConsult(sortBy = 'NAME_ASC') {
  const [ manufacturerNames, setManufacturerNames ] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
                        .firestore()
                        .collection('manufacturer')
                        .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
                        .onSnapshot((snapshot) => {
                          const newManufacturer = snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                          }))

                          setManufacturerNames(newManufacturer)

                        })

                        return() => unsubscribe()
  }, [sortBy])

  return manufacturerNames

}

export default ManufacturerConsult
