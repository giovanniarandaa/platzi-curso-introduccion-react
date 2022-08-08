import React from 'react'
import './TodoSearch.css'

export const TodoSearch = () => {

  const onSearchValueChange = () => {

  }

  return (
    <input className='TodoSearch' placeholder="Cebolla" onChange={onSearchValueChange}/>
  )
}
