import React from 'react'
import './PostDate.scss'

export const PostDate = ({
  isoDate, ...restProps
}) => {
  const date = new Date(isoDate)

  return (
    <div className='Post-Date'>
      <span className='fa-solid fa-calendar-days' />
      {' '}
      {date.toLocaleDateString('pl-PL', { // you can use undefined as first argument
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })}
    </div>
  )
}

PostDate.defaultProps = {
  isoDate: null,
}
