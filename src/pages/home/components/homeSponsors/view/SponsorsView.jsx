import useData from '../../../useData'
import Logos from '../components/Logos'

const SponsorsView = () => {


    const { logos } = useData();

    const sponsors = [...logos, ...logos, ...logos, ...logos];

    return (
        <div className='mb-40'>
            <div className="w-full text-center">
                <h2 className='font-montserrat p-5 laptop:p-10 rounded-xl leading-relaxed font-Bold text-4xl mb-10 text-White bg-Blue'>APOYAN EL CONSORCIO DE ASMA 2024</h2>
            </div>
            <div className='my-5'>
                <div className='w-full md:w-[70%] laptop:w-[50%] mx-auto overflow-hidden'>
                    <div className='flex animate-scroll'>
                        {
                            sponsors.map((sponsor, index) => (
                                <Logos
                                    key={index}
                                    {...sponsor}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SponsorsView
