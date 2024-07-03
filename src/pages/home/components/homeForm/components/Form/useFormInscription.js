import { useState } from "react"


const useFormInscription = ({ openModal }) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [hospital, setHospital] = useState('');
    const [modalidad, setModalidad] = useState('');
    const [isToggled, setIsToggled] = useState(true);
    const [btnSubmitText, setBtnSubmitText] = useState('Inscribirse');
    const [titleModal, setTitleModal] = useState('');
    const [contentModal, setContentModal] = useState('');

    //Spreacsheet con API en informatica.santojanni https://docs.google.com/spreadsheets/d/1-aXFa1DX7qi829rd_Z6gFmaEtwk5igFPre71mJxWoEw/edit#gid=1328272183
    const urlFetchAPI = "https://script.google.com/macros/s/AKfycbxFG-NxwLmVcCIej4alsevTh22_CLR3Hioho7nTLFUzETjna53HBdEDdAnhsQ0h23F9pQ/exec" //con API en consorciohpcaba@gmail.com
    //Link spreadsheet consorciohpcaba@gmail.com
    //https://docs.google.com/spreadsheets/d/1BfWdpNcOQnbqaXxD47hM1BuSI_R3tsJj4aroFXbrodI/edit?gid=0#gid=0

    const handleSubmit = async (e) => {

        e.preventDefault();
        setBtnSubmitText('Enviando...')
        console.log(isToggled)

        const formData = {
            name: name,
            lastName: lastName,
            email: email,
            hospital: hospital,
            modalidad: isToggled ? 'Presencial' : 'Virtual',
        }

        console.log(formData)

        try {
            // Fetch Gmail to send email
            const response = await fetch(urlFetchAPI, {
                method: 'POST',
                redirect: "follow",
                dataType: 'json',
                accepts: 'application/json',
                body: JSON.stringify(formData)
            });

            // Handle the response from the Google Apps Script endpoint
            const responseObject = await response.json();
            console.log("Response status: ", responseObject);

            //Lets check status
            if (responseObject.status) {
                setTimeout(() => {
                    setBtnSubmitText('Inscribirse');
                    setTitleModal('Tu Inscripción ha sido registrada');
                    setContentModal(`${responseObject.data.name} ${responseObject.data.lastName}, gracias por inscribirte al Consorcio hospitales públicos de CABA. Te enviamos un correo electrónico a ${responseObject.data.email} con la confirmación y el evento para que agregues a tu calendario.`);
                    openModal();
                }, 1000);
            } else {
                setTimeout(() => {
                    setBtnSubmitText('Inscribirse');
                    setTitleModal('ATENCION!');
                    setContentModal(responseObject.error);
                    openModal();
                }, 1000);
            }



            // Reset form fields
            setName('');
            setLastName('');
            setEmail('');
            setHospital('');
            setModalidad('')
        } catch (error) {
            console.error('Error:', error);
        }
    }


    //MANEJO DE TOOGLE
    const onToggle = () => {
        setIsToggled(previsToggled => !previsToggled);
        setModalidad(currentIsToggled => (currentIsToggled ? 'Presencial' : 'Virtual'));
    }

    return {
        name,
        setName,
        lastName,
        setLastName,
        email,
        setEmail,
        hospital,
        setHospital,
        modalidad,
        setModalidad,
        isToggled,
        setIsToggled,
        btnSubmitText,
        setBtnSubmitText,
        handleSubmit,
        onToggle,
        titleModal,
        setTitleModal,
        contentModal,
        setContentModal
    }
}

export default useFormInscription;


