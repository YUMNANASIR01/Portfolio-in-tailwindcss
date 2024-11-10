import React from 'react'

function Button(props: { textName: string} ) {
  return (
    <>
      <button className='bg-[#131b54] p-[.66rem_3rem_.66rem_3rem] rounded-[.5rem] text-[1rem] hover:bg-[#ae9292] '>{props.textName}</button>
    </>
  )
}

export default Button