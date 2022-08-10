import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = useState(false) 
  const [loading, setLoading] = useState(true) 
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedTodos

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedTodos = initialValue
        } else {
          parsedTodos = JSON.parse(localStorageItem)
        }

        setItem(parsedTodos)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
      
    }, 1000)
  
    return () => {
      
    }
  }, [initialValue, itemName])
  

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  }

  return {
    item, 
    saveItem, 
    loading,
    error
  }
}

export { useLocalStorage } 