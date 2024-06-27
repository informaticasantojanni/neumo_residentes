import SpeakerCarouselCase1 from "../components/speakerCard/SpeakerCarouselCase1"
import SpeakerCarouselCase2 from "../components/speakerCard/SpeakerCarouselCase2"
import SpeakerCarouselCase3 from "../components/speakerCard/SpeakerCarouselCase3"


const SpeakerView = () => {
  return (
    <div>
      <div className="w-full mx-auto mb-40 flex flex-col bg-Blue group desktop:hover:bg-Green rounded-xl shadow-md md:h-[730px]">
        <div className="w-full text-center p-5">
          <h2 className='font-montserrat font-Bold text-4xl mb-5 text-White desktop:group-hover:text-Blue desktop:text-5xl'>CASO 1</h2>
          <h3 className='font-montserrat font-Bold text-2xl mb-10 text-White desktop:group-hover:text-Blue desktop:text-5xl'>DISERTANTES</h3>
        </div>
        <SpeakerCarouselCase1 />
      </div>

      <div className="w-full mx-auto mb-40 flex flex-col bg-Blue group desktop:hover:bg-Green rounded-xl shadow-md md:h-[730px]">
        <div className="w-full text-center p-5">
        <h2 className='font-montserrat font-Bold text-4xl mb-5 text-White desktop:group-hover:text-Blue desktop:text-5xl'>CASO 2</h2>
          <h3 className='font-montserrat font-Bold text-2xl mb-10 text-White desktop:group-hover:text-Blue desktop:text-5xl'>DISERTANTES</h3>
        </div>
        <SpeakerCarouselCase2 />
      </div>

      <div className="w-full mx-auto mb-40 flex flex-col bg-Blue group desktop:hover:bg-Green rounded-xl shadow-md md:h-[730px]">
        <div className="w-full text-center p-5">
        <h2 className='font-montserrat font-Bold text-4xl mb-5 text-White desktop:group-hover:text-Blue desktop:text-5xl'>CASO 3</h2>
          <h3 className='font-montserrat font-Bold text-2xl mb-10 text-White desktop:group-hover:text-Blue desktop:text-5xl'>DISERTANTES</h3>
        </div>
        <SpeakerCarouselCase3 />
      </div>


    </div>

  )
}

export default SpeakerView