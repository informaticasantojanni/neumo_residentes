import React, { useState } from 'react'

const DirectoresCard = ({ name: name, cargo: cargo, image: image }) => {
    return (
        <div className='w-[90%] md:w-[60%] laptop:w-[80%] mx-auto mb-5 flex flex-col items-center justify-center'>
            <p>{cargo}</p>
            <img src={image} className="object-cover rounded-full w-52 h-52" alt="Speaker Image" />
            <p>{name}</p>
        </div>
    )
}

export default DirectoresCard