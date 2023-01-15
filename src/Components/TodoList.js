import { render } from '@testing-library/react'
import React from 'react'

export const TodoList = ({
  error,
  loading,
  todosFiltrados,
  onError,
  onLoading,
  onEmptyTodos,
  render,
  onEmptySearchResults,
  totalTodos,
  children
}) => {






  return (
    <>
      {error && onError()}

      {loading && onLoading()}

      {(!loading && todosFiltrados && !todosFiltrados.length && !totalTodos) && onEmptyTodos()}

      {( (totalTodos > 0 && todosFiltrados?.length == 0) || loading) ?
        onEmptySearchResults()
        :
        render ?
          todosFiltrados.map((todo) => render(todo))
          : children
      }
    </>

  )
}
