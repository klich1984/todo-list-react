import { useEffect, useState } from 'react'

export default function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      try {
        // Localstorage
        const localStorageItem = localStorage.getItem(itemName) || null
        let parceItems = []

        if (localStorageItem.length === 0) {
          // No hay datos
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parceItems = initialValue
        } else {
          // Si hay datos
          parceItems = JSON.parse(localStorageItem)
        }

        setItem(parceItems)
      } catch (err) {
        // En caso de un error lo guardamos en el estado
        setError(`Ha ocurrido el siguiente error: ${err}`)
      } finally {
        setLoading(false)
      }
    }, 3000)
  })

  // Save todos Localstorage
  const saveItem = (newItem) => {
    try {
      let stringifyItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifyItem)
    } catch (err) {
      setError(`Ha ocurrido el siguiente error: ${err}`)
    }

    setItem(newItem)
  }

  return { item, saveItem, loading, error }
}
