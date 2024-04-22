import React from 'react'

const Button = ({name}) => {
  return (
    <button className='p-3 flex items-center m-3 h-10 rounded-md bg-slate-200'>{name}</button>
  )
}

export default Button