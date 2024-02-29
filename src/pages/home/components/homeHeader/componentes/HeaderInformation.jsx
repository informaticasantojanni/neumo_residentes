import React from 'react'

const HeaderInformation = ({ textInfo: label, iconInfo: InformationIcon }) => {
    return (
        <li className='flex gap-2 justify-center items-center w-full py-1'>
            <span>
                <InformationIcon
                    color='#0E58A8'
                    width='25px'
                    height='25px'
                />
            </span>
            <span className='w-[250px] font-montserratAlternate text-Blue font-bold text-lg md:w-[200px] lg:w-[250px]'>{label}</span>
        </li>

    )
}

export default HeaderInformation