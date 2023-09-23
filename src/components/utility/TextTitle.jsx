import React from 'react'

function TextTitle(text) {
  return (
    <div className='mb-4'>
     <h2 className="home-title text-center">{text.title}</h2>
              <p className='w-full lg:w-3/4 mx-auto text-center'>
                {text.detail}
              </p>
    </div>
  )
}

export default TextTitle