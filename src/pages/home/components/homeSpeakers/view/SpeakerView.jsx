import SpeakerCarouselCase1 from "../components/speakerCard/SpeakerCarouselCase1"


const SpeakerView = () => {
  return (
    <div className="w-full mx-auto mb-40 flex flex-col bg-Blue group desktop:hover:bg-Green rounded-xl shadow-md md:h-[730px]">
      <div className="w-full text-center p-5">
        <h2 className='font-montserrat font-Bold text-4xl mb-10 text-White desktop:group-hover:text-Blue desktop:text-5xl'>DISERTANTES</h2>
      </div>
      <SpeakerCarouselCase1 />
    </div>
  )
}

export default SpeakerView