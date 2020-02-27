import { useState, useEffect } from 'react'
import firebase from '../config/FirebaseConfig'

const SORT_OPTIONS = {
  'NAME_ASC': { column: 'manufacturer', direction: 'asc'}
}
console.log("teste de consumo de dados MANUFACTURER CONSULT 0")

function ManufacturerConsult(sortBy = 'NAME_ASC') {

  console.log("teste de consumo de dados MANUFACTURER CONSULT 1")


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
console.log("teste de consumo de dados MANUFACTURER CONSULT 2")

  return manufacturerNames
}
console.log("teste de consumo de dados MANUFACTURER CONSULT 3")

export default ManufacturerConsult
