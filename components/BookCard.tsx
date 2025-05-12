import Link from 'next/link'
import React from 'react'
import BookCover from './BookCover'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from './ui/button'

const BookCard = ({
  id,
  title,
  genre,
  color,
  cover,
  isLoanedBook = false
}: Book) => {
  return (
    <li className={cn(isLoanedBook && "xs:w-52 w-full")}>
      <Link
        href={`/books/${id}`}
        className={cn(isLoanedBook && "w-full flex flex-col items-center")}
      >
        <BookCover variant="regular" coverColor={color} coverImage={cover} />
        <div className={cn('mt-4', !isLoanedBook && 'xs:max-w-40 max-w-28')}>
          <p className='book-title'>{title}</p>
          <p className='book-genre'>{genre}</p>
        </div>

        {isLoanedBook && (
          <div className='mt-3 w-full'>
            <div className='book-loaned flex items-center gap-2 w-full justify-center'>
              <Image
                src="/icons/calendar.svg"
                alt="Calendar"
                width={18}
                height={18}
                className='object-contain'
              />
              <p className='text-light-100 text-sm mr-4'>11 Days left to return</p>
            </div>
            <Button className='book-btn bg-dark-600'>Download receipt</Button>
          </div>
        )}
      </Link>
    </li>
  )
}

export default BookCard