
import FormInscription from "../components/Form/FormInscription";
import useFormInscription from "../components/Form/useFormInscription";
import FormInformation from "../components/Form/FormInformation";
import { useState } from "react";
import { FormModal } from "../components/Form/FormModal";



const HomeFormView = () => {

  const [showModalForm, setShowModalForm] = useState(false);

  const openModal = () => {
    setShowModalForm(true);
  }

  const closeModal = () => {
    setShowModalForm(false);
  }

  const {
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
    titleModal,
    contentModal
  } = useFormInscription({openModal});


  return (
    <div className='mb-40 px-2 laptop:flex'>
      <FormInformation
        isToggled={isToggled}
      />
      <FormInscription
        name={name}
        setName={setName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        hospital={hospital}
        setHospital={setHospital}
        isToggled={isToggled}
        btnSubmitText={btnSubmitText}
        handleSubmit={handleSubmit}
        onToggle={onToggle}
      />
      {
        showModalForm && (
          <FormModal
           closeModal={closeModal}
          //  titleModal='Tu Inscripción ha sido registrada'
           titleModal={titleModal}
          //  contentModal= 'Gracias por inscribirte al Consorcio de Asma de hospitales públicos de CABA. Por favor revisa tu correo que te enviamos la confirmación de tu inscripción.'
           contentModal=  {contentModal}
          >
          </FormModal>
        )
      }
    </div>
  )
}

export default HomeFormView