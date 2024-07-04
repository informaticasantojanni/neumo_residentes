import HeaderButton from "../../../homeHeader/componentes/HeaderButton";
import InfoItem from "./InfoItem";

const URL_PROGRAMA = 'https://drive.google.com/file/d/18SgyjNYJ7KzS-86OCdZR1PGKdu9od8nD/view?usp=sharing';


const InfoCard = ({ title, subTitle, paragraph, itemsInformation, case_1, case_2, case_3, ...connection }) => {

    return (
        <div>
            <h2 className="text-3xl font-montserrat font-Bold mb-1 text-White desktop:text-3xl">{title}</h2>
            <h3 className="text-4xl font-montserrat font-Bold mb-1 text-Soft-red desktop:text-4xl">{subTitle}</h3>
            <div className=" py-4 mb-4">
                <p className="font-montserratAlternate font-Regular text-base desktop:text-lg text-White text-justify mb-2">{paragraph}</p>
                <p className="font-montserratAlternate font-Regular text-base desktop:text-lg text-White text-justify mb-1">{case_1}</p>
                <p className="font-montserratAlternate font-Regular text-base desktop:text-lg text-White text-justify mb-1">{case_2}</p>
                <p className="font-montserratAlternate font-Regular text-base desktop:text-lg text-White text-justify mb-1">{case_3}</p>
            </div>
            <ul className="flex flex-col justify-center items-start " >
                {
                    itemsInformation.map((item, index) => (
                        <InfoItem
                            key={index}
                            {...item}
                        />
                    ))
                }
                {
                    <li className="flex items-start gap-2 mb-3">
                        <connection.iconInfo
                            color='#FE958F'
                            width='25px'
                            height='25px'
                        />

                        <div className='flex flex-col items-start justify-start text-White font-montserratAlternate font-Regular text-sm desktop:text-base'>
                            <p>{connection.textInfo}</p>
                            <p><span className='font-Semibold'>{`${connection.type.presencial.title}:`}</span> {`${connection.type.presencial.text}`}</p>
                            <p><span className='font-Semibold'>{`${connection.type.virtual.title}:`}</span> {`${connection.type.virtual.text}`}</p>
                        </div>
                    </li>
                }

            </ul>
            <div className="flex justify-center items-center py-5">
                <a href={URL_PROGRAMA} target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-2 text-Navy-blue bg-Soft-red border-solid border-2 border-White hover:bg-Mint-green rounded-2xl font-montserrat text-lg font-Semibold desktop:p-3 desktop:text-2xl">Ver Programa</button>
                </a>
            </div>
        </div>
    )
}

export default InfoCard