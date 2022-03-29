import React from 'react'
import Image from 'next/image'

const MoviesPage = () => {
  return (
    <>
        <h1 className='m-3'> Movies: </h1>
        <div>
            <div className='d-flex p-3'>
                <div className='m-2'>
                    <Image 
                        src={'/../public/static/batman2022.jpeg'} 
                        width='100'
                        height='150'
                        alt='batman image'
                    />
                </div>
                <h3> Movie1 </h3>
                <div>
                    <Image 
                        src={'/../public/static/batman2022.jpeg'} 
                        width='100'
                        height='150'
                        alt='batman image'
                    />
                </div>
                <h3> Movie2 </h3>
            </div>
        </div>
    </>
  )
}

export default MoviesPage
