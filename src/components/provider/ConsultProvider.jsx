import { useState, useEffect } from 'react'
import firebase from '../config/FirebaseConfig'

const SORT_OPTIONS = {
  'NAME_ASC': { column: 'provider', direction: 'asc'}
}

function ProviderConsult(sortBy = 'NAME_ASC') {
  const [ providerNames, setProviderNames ] = useState([])

  console.log("teste de consumo de dados PROVIDER CONSULT 0")

  useEffect(() => {
    const unsubscribe = firebase
                        .firestore()
                        .collection('providers')
                        .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
                        .onSnapshot((snapshot) => {
                          const newProvider = snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                          }))

                          setProviderNames(newProvider)

                        })

                        console.log("teste de consumo de dados PROVIDER CONSULT  1")

                        return() => unsubscribe()
  }, [sortBy])

  console.log("teste de consumo de dados PROVIDER CONSULT  2")

  return providerNames

}

export default ProviderConsult
