import { useState } from 'react'

export default function useLocalStorage(itemName, initialValue) {
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

  const [item, setItem] = useState(parceItems)

  // Save todos Localstorage
  const saveItem = (listItem) => {
    let stringifyItem = JSON.stringify(listItem)
    localStorage.setItem(itemName, stringifyItem)

    setItem(listItem)
  }

  return [item, saveItem]
}
