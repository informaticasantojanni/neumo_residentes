import DirectoresCarousel from "../components/DirectoresCarousel"

const HomePresentationView = () => {
  return (
    <div className='mb-40 w-full'>
      <div className='max-w-2xl laptop:max-w-full mx-auto desktop:mx-0 p-4 sm:p-6 lg:p-8 bg-Navy-blue rounded-xl'>
        <DirectoresCarousel />
      </div>

    </div>
  )
}

export default HomePresentationView