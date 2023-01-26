import React from 'react'

export const TodoEmptySearchResults = ({busqueda}) => {
  return (
    <div  style={{ textAlign: 'center'}} >
    <h2>No hay resultados que coincidan con la búsqueda: '{busqueda}'</h2>
    </div>
  )
}
