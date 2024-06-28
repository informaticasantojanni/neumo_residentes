import { useEffect, useState } from "react";


const COUNTDOWN_TARGET = new Date("2024-08-15T08:00:00");

const getTimeLeft = () => {
    const totalTimeLeft = COUNTDOWN_TARGET - new Date();
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((totalTimeLeft / 1000) % 60);
    return {
        days,
        hours,
        minutes,
        seconds,
    };
};



const Countdown = () => {

    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

    const getRenamedLabel = (originalLabel) => {
        switch (originalLabel) {
            case 'days':
                return 'Días';
            case 'hours':
                return 'Horas';
            case 'minutes':
                return 'Min';
            case 'seconds':
                return 'Seg';
            default:
                return originalLabel;
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className='flex justify-center mx-auto py-5 my-5 w-[350px] h-[150px] md:w-[450px] bg-Navy-blue rounded-xl'>

            <div className='flex justify-center items-center gap-5 md:gap-10'>
                {Object.entries(timeLeft).map(([key, value]) => {
                    const renamedlabel = getRenamedLabel(key);
                    return (
                        <div className='flex flex-col justify-center items-center gap-2' key={renamedlabel}>
                            <div>
                                <span className=' font-montserrat font-Semibold text-Soft-red text-3xl'> {renamedlabel} </span>
                            </div>
                            <span className=' font-montserratAlternate font-Regular text-Soft-red text-2xl'>{value}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Countdown