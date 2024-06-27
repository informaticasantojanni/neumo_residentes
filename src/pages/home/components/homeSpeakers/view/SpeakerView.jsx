import SpeakerCarouselCase1 from "../components/speakerCard/SpeakerCarouselCase1"
import SpeakerCarouselCase2 from "../components/speakerCard/SpeakerCarouselCase2"
import SpeakerCarouselCase3 from "../components/speakerCard/SpeakerCarouselCase3"


const SpeakerView = () => {
  return (
    <div>
      <h3 className='font-montserrat font-Bold text-4xl text-center mb-10 text-Navy-blue desktop:group-hover:text-Navy-blue desktop:text-5xl'>DISERTANTES</h3>
      <div className="w-full mx-auto mb-40 flex flex-col bg-Navy-blue group desktop:hover:bg-Mint-green rounded-xl shadow-md md:h-[730px]">
        <div className="w-full text-center p-1">
          <h6 className='font-montserrat font-Regular text-base mb-5 text-Soft-red desktop:group-hover:text-Navy-blue desktop:text-xl'>CASO CLINICO 1</h6>
          <p className="font-montserrat font-Semibold text-lg mb-5 text-White desktop:group-hover:text-Navy-blue desktop:text-2xl">ASMA: LO QUE NO DICEN LAS GUÍAS</p>
        </div>
        <SpeakerCarouselCase1 />
      </div>

      <div className="w-full mx-auto mb-40 flex flex-col bg-Navy-blue group desktop:hover:bg-Mint-green rounded-xl shadow-md md:h-[730px]">
        <div className="w-full text-center p-1">
        <h6 className='font-montserrat font-Regular text-base mb-5 text-Soft-red desktop:group-hover:text-Navy-blue desktop:text-xl'>CASO CLINICO 2</h6>
        <p className="font-montserrat font-Semibold text-lg mb-5 text-White desktop:group-hover:text-Navy-blue desktop:text-2xl">HIPERTENSIÓN PULMONAR: CUANDO LA HP. PUEDE TENER VARIAS CAUSAS</p>
        </div>
        <SpeakerCarouselCase2 />
      </div>

      <div className="w-full mx-auto mb-40 flex flex-col bg-Navy-blue group desktop:hover:bg-Mint-green rounded-xl shadow-md md:h-[730px]">
        <div className="w-full text-center p-1">
        <h6 className='font-montserrat font-Regular text-base mb-5 text-Soft-red desktop:group-hover:text-Navy-blue desktop:text-xl'>CASO CLINICO 3</h6>
        <p className="font-montserrat font-Semibold text-lg mb-5 text-White desktop:group-hover:text-Navy-blue desktop:text-2xl">ENFERMEDAD INTERSTICIAL: RECORRIDO DEL DIAGNOSTICO AL TRASPLANTE</p>
        </div>
        <SpeakerCarouselCase3 />
      </div>


    </div>

  )
}

export default SpeakerView