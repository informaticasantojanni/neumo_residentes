import React from 'react'
import Countdown from '../components/countdown/Countdown'
import InfoCard from '../components/infoCard/InfoCard'
import useData from '../../../useData'

const HomeInfoView = () => {

    const { itemsInformation } = useData();

    const lastIndex = itemsInformation.length - 1;
    const connection = itemsInformation[lastIndex];

    const newItemsInformation = itemsInformation.slice(0, lastIndex);

    return (
        <div className='mb-40 px-2 laptop:flex laptop:gap-4 laptop:justify-center laptop:items-center'>
            <div className='mb-40 laptop:mb-0 laptop:w-1/2 laptop:flex laptop:items-center laptop:p-4 laptop:h-[537px] laptop:bg-Soft-red laptop:rounded-r-full'>
                <Countdown />
            </div>
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 bg-Navy-blue shadow-md rounded-xl laptop:w-1/2">
                <InfoCard
                    title='CONSORCIO HOSPITALES PUBLICOS DE CABA'
                    subTitle='EL RESIDENTE DESAFIANDO AL EXPERTO'
                    paragraph="Unite a nosotros en esta jornada educativa donde residentes de neumonología y expertos se reunirán para discutir y compartir conocimientos sobre tres importantes temáticas:  "
                    case_1= "ASMA: lo que no dicen las guías"
                    case_2= "HIPERTENSIÓN PULMONAR: cuando la hipertensión pulmonar puede tener varios grupos"
                    case_3= "ENFERMEDAD INTERSTICIAL: recorrido del diagnóstico al transplante"
                    itemsInformation={newItemsInformation}
                    {...connection}
                />
            </div>
        </div>
    )
}

export default HomeInfoView