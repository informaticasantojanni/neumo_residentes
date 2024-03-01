import { useState } from "react"
import HeaderButton from "../../../homeHeader/componentes/HeaderButton"

const SpeakerCard = ({ name: name, speciality: speciality, review: review, image: image }) => {

  const [showFullReview, setShowFullReview] = useState(false);

  const toggleReview = () => {
    setShowFullReview(!showFullReview);
  }

  return (
    <div className="w-[90%] md:w-[60%] laptop:w-[80%] h-[550px] mx-auto mb-5 flex flex-col items-center justify-top bg-Blue border-solid border-4 border-White rounded-xl">
      <div
        className="w-full h-64 pt-1 flex items-center justify-center"
      >
        <img src={image} className="object-cover rounded-full w-52 h-52" alt="Speaker Image" />
      </div>
      <div className="w-full mb-5 p-5 flex flex-col justify-center items-center rounded-xl md:px-2 md:py-5">
        <h3 className="text-xl p-2 font-montserrat font-Bold text-White md:text-2xl">{name}</h3>
        <h5 className="text-base font-montserrat font-Semibold mb-3 text-White desktop: md:text-xl">{speciality}</h5>
<<<<<<< HEAD
        {/* {showFullReview ? review : `${review.slice(0, 150)}...`} */}
        {/* <p className="font-montserratAlternate font-Regular text-sm text-start leading-relaxed md:text-xl text-White">
            {review} </p> */}
        {review.map((item, index) => (
          <p key={index} className="font-montserratAlternate font-Regular text-sm text-center leading-relaxed md:text-xl text-White">
            {item}
          </p>
        ))}

=======
        <p
          className="font-montserratAlternate font-Regular text-sm text-start  md:text-lg text-White">
            {/* {showFullReview ? review : `${review.slice(0, 150)}...`} */}
            {review}
        </p>
>>>>>>> dfbdb913e9da1b0c63780fb8abb96a9777a4e0e6
        <div>
          {/* <div className="w-full flex justify-start">
            <HeaderButton
              className='py-2 text-White font-montserratAlternate font-Semibold text-base'
              onClick={toggleReview}
              type='button'
              label={showFullReview ? 'Ver menos' : 'Ver más'}
            />
          </div> */}
        </div>


      </div>

    </div>
  )
}

export default SpeakerCard