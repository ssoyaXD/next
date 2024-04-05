'use client'
 
import { useEffect } from 'react'

type Props = {
    error: Error & { digest?: string }
    reset: () => void
};

export default function ProductsError({error, reset}: Props) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>문제가 발생했습니다.</h2>
      <button
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}