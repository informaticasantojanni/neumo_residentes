import React from 'react'

const FormInscription = ({
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
    hospital,
    setHospital,
    isToggled,
    btnSubmitText,
    handleSubmit,
    onToggle,
}) => {

    return (
        <div className={`max-w-2xl mx-auto px-2 py-5 mb-10 rounded-xl ${isToggled ? 'bg-Navy-blue text-White' : 'bg-Mint-green text-Navy-blue'} laptop:w-1/2 laptop:order-first`}>
            <div className="w-full text-left md:text-center">
                <h2 className='font-montserrat font-Bold text-4xl mb-10'>INSCRIPCION</h2>
            </div>
            <form className="max-w-sm mx-auto" id="inscriptionForm" onSubmit={handleSubmit}>
                <div>
                    <label className="block mb-4 text-xl font-montserratAlternate font-Semibold">Seleccionar Modalidad</label>
                    <label className="block mb-4 text-lg font-montserratAlternate font-Regular">{isToggled ? 'Presencial' : 'Virtual'}</label>
                    <label htmlFor="check" className={`w-20 h-10 rounded-full relative ${isToggled ? 'bg-Mint-green' : 'bg-Navy-blue'}`}>
                        <input
                            type="checkbox"
                            id="check"
                            className="sr-only peer"
                            checked={isToggled}
                            onChange={onToggle}
                        />
                        <div className={`relative w-14 h-7 bg-Navy-blue peer-focus:outline-none rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-White after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-Mint-green mb-4 
          `}></div>
                    </label>
                </div>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-4 text-xl font-montserratAlternate font-Semibold">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        className="bg-White border border-White text-Blue font-montserratAlternate font-Regular text-lg rounded-xl block mx-auto w-full p-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                </div>
                <div className="mb-5">
                    <label htmlFor="lastName" className="block mb-4 text-xl font-montserratAlternate font-Semibold">Apellido</label>
                    <input
                        type="text"
                        id="lastName"
                        className="bg-White border border-White text-Blue font-montserratAlternate font-Regular text-lg rounded-xl block mx-auto w-full p-3"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-4 text-xl font-montserratAlternate font-Semibold">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="bg-White border border-White text-Blue font-montserratAlternate font-Regular text-lg rounded-xl block mx-auto w-full p-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </div>
                <div className="mb-5">
                    <label htmlFor="hospital" className="block mb-4 text-xl font-montserratAlternate font-Semibold">Hospital</label>
                    <input
                        type="text"
                        id="hospital"
                        className="bg-White border border-White text-Blue font-montserratAlternate font-Regular text-lg rounded-xl block mx-auto w-full p-3"
                        value={hospital}
                        onChange={(e) => setHospital(e.target.value)}
                        required />
                </div>
                <div className="w-full flex flex-col md:items-center md:justify-center my-10">
                    <button
                        type="submit"
                        className={`font-montserrat font-Semibold  text-2xl  border-solid border-2  hover:bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-Mint-green rounded-lg w-full  px-5 py-2.5 text-center
          ${isToggled ? 'border-White text-White hover:from-Mint-green to-Navy-blue' : 'border-Navy-blue text-Navy-blue hover:from-Navy-blue to-Mint-green hover:text-White'}`}
                        value={btnSubmitText}>{btnSubmitText}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormInscription