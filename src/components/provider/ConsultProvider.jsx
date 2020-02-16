import { useState, useEffect } from 'react'
import firebase from '../config/FirebaseConfig'

const SORT_OPTIONS = {
  'NAME_ASC': { column: 'provider', direction: 'asc'}
}

function ProviderConsult(sortBy = 'NAME_ASC') {
  const [ providerNames, setProviderNames ] = useState([])

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

                        return() => unsubscribe()
  }, [sortBy])

  return providerNames

}

export default ProviderConsult
