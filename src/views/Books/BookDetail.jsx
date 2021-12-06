import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Book from '../../components/book/Book'
import { getBookById } from '../../services/books'

function BookDetail() {
  const id = useParams()
  const [book, setBook] = useState(null)

  useEffect(() => {
    getBookById(id).then(({ data }) => setBook(data))
  }, [id])

  if (!book) return <h3>Loading book details...</h3>

  return <Book book={book} showDetail />
}

export default BookDetail
