import BookCard from "./BookCard"
import React from 'react'

interface Props {
    title: string;
    books: Book[];
    containerClassName?:string
}

const BookList = ({ title, books, containerClassName }: Props) => {
  return (
    <section className={containerClassName}>
        <h2 className='font-bebas-neue text-4xl text-light-100'>
            {title}

            <ul className='book-list'>
                {books.map((book) => (
                    <BookCard key={book.title} {...book} />
                ))}
            </ul>
        </h2>
    </section>
  )
}

export default BookList