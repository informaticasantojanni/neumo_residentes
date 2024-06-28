import User from "../../../../../../components/svg/User";
import Computer from "../../../../../../components/svg/Computer";


const FormInformation = ({ isToggled }) => {



    return (
        <div className="max-w-2xl mx-auto mb-10 laptop:w-1/2 laptop:flex laptop:flex-col laptop:justify-center laptop:items-center">
            <div className={`${isToggled ? 'bg-Soft-red' : 'bg-Navy-blue'} rounded-lg p-4 sm:p-6 lg:p-8 laptop:rounded-full laptop:w-[500px] laptop:h-[500px] laptop:flex laptop:flex-col laptop:justify-center laptop:items-center`} >
                <h2 className={`${isToggled ? ' text-Navy-blue' : 'text-Soft-red'} text-4xl font-montserratSubrayada font-Bold mb-4 text-center laptop:text-5xl`}>Importante</h2>
                <div className="flex gap-3 mb-4 justify-start w-full desktop:justify-center">
                    <span><User
                        color={`${isToggled ? '#122F51' : '#FE958F'}`}
                        width='25px'
                        heigh='25px'
                    /></span>
                    <p className={`${isToggled ? 'text-Navy-blue' : 'text-Soft-red'} font-montserrat font-Semibold text-base`}>El evento presencial tiene un cupo de 80 personas.</p>
                </div>
                <div className="flex gap-3 mb-4 justify-start w-full laptop:justify-center">
                    <span>
                        <Computer
                            color={`${isToggled ? '#122F51' : '#FE958F'}`}
                            width='25px'
                            heigh='25px'
                        />
                    </span>
                    <p className={`${isToggled ? 'text-Navy-blue' : 'text-Soft-red'} font-montserrat font-Semibold text-base`}>La modalidad virtual no presenta límite de cupo.</p>
                </div>
            </div>
        </div>
    )
}

export default FormInformation