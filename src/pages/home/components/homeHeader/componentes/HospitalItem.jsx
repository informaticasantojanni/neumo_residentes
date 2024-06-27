
const HospitalItem = ({ hospitalName: hospitalName, icon: HospitalIcon }) => {
  return (
    <li className='flex gap-1 justify-start items-center w-full py-1 lg:justify-start lg:w-[200px] laptop:w-[300px]'>
      <span>
        <HospitalIcon
          color='#8BB6A3'
          width='25px'
          height='25px'
        />
      </span>
      <span className='w-[175px] font-montserratAlternate font-Regular text-sm laptop:text-base laptop:w-[200px]'>| {hospitalName}</span>
    </li>
  )
}

export default HospitalItem