import React, { useState } from 'react'

const DirectoresCard = ({ name: name, cargo: cargo, image: image }) => {
    return (
        <div className='w-[90%] md:w-[60%] laptop:w-[80%] mx-auto mb-5 flex flex-col items-center justify-center'>
            <h3 className="text-xl p-5 font-montserrat font-Bold text-Mint-green md:text-2xl">{cargo}</h3>
            <img src={image} className="object-cover rounded-full w-52 h-52" alt="Speaker Image" />
            <h5 className="text-base font-montserrat font-Semibold mb-3 text-Mint-green pt-5 desktop: md:text-xl">{name}</h5>
        </div>
    )
}

export default DirectoresCard