import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Book } from './Book'
import type { BookType } from './types/book'

export const App = () => {


  const BookData: Array<BookType> = [
    {
      id: 1,
      title: 'こころ',
      price: 600
    },
    {
      id: 2,
      title: '三四郎',
      price: 500
    },
    {
      id: 3,
      title: 'それから',
      price: 500
    },
  ]

  return (
    <>
    <p>初めてのTypeScript</p>
    {BookData.map((book) => <Book id={book.id} title={book.title} price={book.price} />)}
    </>
  )
} 