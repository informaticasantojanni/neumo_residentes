import React, { useEffect, useState } from "react"
import Calendar from "../../components/svg/Calendar"
import MedicalCard from "../../components/svg/MedicalCard"
import Time from "../../components/svg/Time"
import Location from "../../components/svg/Location"
import Connection from "../../components/svg/Connection"
import Dr_Daniel_Pancasky_PS from "../../assets/speakers/Dr_Daniel_Pancasky_PS.jpg"
import Dr_Diego_Litewka_PS from "../../assets/speakers/Dr_Diego_Litewka_PS.jpg"
import Dr_Jose_Malet_PS from "../../assets/speakers/Dr_Jose_Malet_PS.jpg"
import Dr_Marcos_Hernandez_PS from "../../assets/speakers/Dr_Marcos_Hernandez_PS.jpg"
import Dr_Martin_Sívori_PS from "../../assets/speakers/Dr_Martin_Sívori_PS.jpg"
import Dr_Ricardo_del_Olmo_PS from "../../assets/speakers/Dr_Ricardo_del_Olmo_PS.jpg"
import Dra_Laura_Orazi_PS from "../../assets/speakers/Dra_Laura_Orazi_PS.jpg"
import Dr_Fernando_Saldarini_PS from "../../assets/speakers/Dr_Fernando_Saldarini_PS.jpg"
import Dra_Alejandra_Celenza_PS from "../../assets/speakers/Dra_Alejandra_Celenza_PS.jpg"
import Dra_Veronica_Geronazzo from "../../assets/speakers/Dra_Veronica_Geronazzo.png"
import Dr_Juan_Ignacio_Zaballa from "../../assets/speakers/Dr_Juan_Ignacio_Zaballa.png"
import Dra_Florencia_Trullas from "../../assets/speakers/Dra_Florencia_Trullas.png"
import Dr_Alejandro_Salvado from "../../assets/speakers/Dr_Alejandro_Salvado.png"
import Dra_Maria_Eugenia_Franchi from "../../assets/speakers/Dra_Maria_Eugenia_Franchi.png"
import Dr_Juan_Pinzon_Rodriguez from "../../assets/speakers/Dr_Juan_Pinzon_Rodriguez.png"
import Dra_Camila_Fernandez from "../../assets/speakers/Dra_Camila_Fernandez.png"
import Dr_Martin_Bosio from "../../assets/speakers/Dr_Martin_Bosio.png"
import Dr_Jorge_Osvaldo_Caneva from "../../assets/speakers/Dr_Jorge_Osvaldo_Caneva.png"
import Dra_Graciela_Svelitza from "../../assets/speakers/Dra_Graciela_Svelitza.png"
import Dr_Nicolas_Caruso from "../../assets/speakers/Dr_Nicolas_Caruso.png"
import Dra_Katerina_Ivanoska_Ortuono from "../../assets/speakers/Dra_Katerina_Ivanoska_Ortuono.png"
import Dra_Silvia_Quadrelli from "../../assets/speakers/Dra_Silvia_Quadrelli.png"
import Dra_Pamela_Rossi from "../../assets/speakers/Dra_Pamela_Rossi.png"
import Dra_Brenda_Varela from "../../assets/speakers/Dra_Brenda_Varela.png"
import Dra_Gabriela_Tabaj from "../../assets/speakers/Dra_Gabriela_Tabaj.png"

import elea from "../../assets/logos/logo_elea.png"
import cassara from "../../assets/logos/logo_cassara.png"
import casasco from "../../assets/logos/logo_casasco.png"

const useData = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        // Attach the event listener to update screenWidth on resize
        window.addEventListener('resize', handleResize);

        // Remove the event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures that useEffect runs only once

    const itemsInformation = [
        {
            textInfo: 'Jueves 15 de agosto',
            iconInfo: Calendar,
        },
        {
            textInfo: 'De 09:30 a 13:00hs',
            iconInfo: Time,
        },
        {
            textInfo: 'Hospital Santojanni, Pilar 950 - 4to Piso, CABA',
            iconInfo: Location,
        },
        {
            textInfo: 'Modalidad',
            iconInfo: Connection,
            type: {
                virtual: {
                    title: 'Virtual',
                    text: 'Transmisión en vivo a través de Zoom'
                },
                presencial: {
                    title: 'Presencial',
                    text: 'Aula 4to piso, Hospital Santojanni'
                },
            },
        },
    ]

    const itemsHospitals = [
        {
            hospitalName: 'Hospital Santojanni',
            icon: MedicalCard,
        },
        {
            hospitalName: 'Hospital Ramos Mejía',
            icon: MedicalCard,
        },
        {
            hospitalName: 'Hospital Fernandez',
            icon: MedicalCard,
        },
    ]
    const directores = [
        {
            name: "Dr. Fernando Saldarini",
            cargo: "Director",
            image: Dr_Fernando_Saldarini_PS
        },
        {
            name: "Dr. Juan Ignacio Zabala",
            cargo: "Director",
            image: Dr_Juan_Ignacio_Zaballa
        },
        {
            cargo: "Director",
            name: "Dra. Verónica Geronazzo",
            image: Dra_Veronica_Geronazzo
        },
        {
            name: "Dra. Alejandra Celenza",
            cargo: "Secretaria",
            image: Dra_Alejandra_Celenza_PS
        },
        {
            name: "Dr.Martín Sívori",
            cargo: "Secretario",
            image: Dr_Martin_Sívori_PS
        },
        {
            name: "Dr. Diego Litewka",
            cargo: "Secretario",
            image: Dr_Diego_Litewka_PS
        },
        {
            name: "Dr. Daniel Pascansky",
            cargo: "Secretario",
            image: Dr_Daniel_Pancasky_PS
        },
    ]

    const speakersCase1 = [
        {
            name: "Dr. Daniel Pascansky",
            speciality: "",
            review: ["Médico de planta de neumotisiologia Hospital Ramos Mejia",
                "Subdirector de la Carrera de Especialista UBA "],
            image: Dr_Daniel_Pancasky_PS,
        },
        {
            name: "Dra. Florencia Trullias",
            speciality: "",
            review: ["Jefa de residentes de neumotisiología del Hospital Ramos Mejia Bs. As"],
            image: Dra_Florencia_Trullas,
        },
        {
            name: "Dr. Alejandro Salvado",
            speciality: "Médico Cirujano",
            image: Dr_Alejandro_Salvado,
            review: ["Especialista en Clínica Médica, Neumonología y Medicina de Familia, Jefe del Servicio de Neumonología del Hospital Británico de Buenos Aires. "]
        },
        {
            name: "Dra. Eugenia Franchi",
            speciality: "",
            image: Dra_Maria_Eugenia_Franchi,
            review: ["Médica de Staff en Servicio de Neumonología y Coordinadora de la Clínica de Asma Grave, Hospital Universitario Austral, Pilar. Coordinadora consultorio asma grave Hospital Austral."]
        },
        {
            name: "Dr. Marcos Hernandez",
            speciality: "",
            review: ["Médico de planta Sanatorio Güemes",
                "Coordinador consultorio de asma grave Sanatorio Güemes"],
            image: Dr_Marcos_Hernandez_PS,
        },
        {
            name: "Dr. Ricardo del Olmo",
            speciality: "",
            review: ["Jefe de Servicio de Diagnóstico y Tratamiento Hospital María Ferrer & Investigador IDIM"],
            image: Dr_Ricardo_del_Olmo_PS,
        },
    ]
    const speakersCase2 = [
        {
            name: "Dr. Juan Pinzon Rodriguez",
            speciality: "",
            review: ["Medico residente neumonología Hospital Fernandez"],
            image: Dr_Juan_Pinzon_Rodriguez,
        },
        {
            name: "Dra. Camila Fernandez",
            speciality: "",
            review: ["Jefa de Residentes de Neumología Hospital Fernandez"],
            image: Dra_Camila_Fernandez,
        },
        {
            name: "Dr. Sabino Deleo",
            speciality: "Especialista jerarquizado en clínica médica y especialista en Neumonología. ",
            review: ["Magister internacional en Hipertensión Pulmonar por la Universidad Francisco de Vitoria de Madrid y la Sociedad Española de Cardiología. Jefe de sala de Neumonología y Consultorio Interdisciplinario de Hipertensión Pulmonar del Hospital Interzonal General de Agudos San Martín de La Plata. Director del curso Universitario de Hipertensión Pulmonar UNLP."],
            image: Dra_Camila_Fernandez,
        },
        {
            name: "Dr. Martín Bosio",
            speciality: "Médico Neumonólogo Hospital Britanico.",
            review: ["Coordinador del Departamento de Hipertensión Pulmonar y Tromboembolismo de Pulmón Hospital Británico de Buenos Aires. Jefe de Sala y Consultorios Externos."],
            image: Dr_Martin_Bosio,
        },
        {
            name: "Dr. Jorge Osvaldo Caneva",
            speciality: "Jefe del Servicio de Neumonología",
            review: ["Profesor Titular. Departamento de Medicina. Director del Programa de Fellow en Hipertensión Pulmonar. Hospital Universitario Fundación Favaloro."],
            image: Dr_Jorge_Osvaldo_Caneva,
        },
        {
            name: "Dra. Ayelen Fernandez",
            speciality: "??",
            review: ["??"],
            image: Dra_Graciela_Svelitza,
        },
        {
            name: "Dra. Graciela Svelitza",
            speciality: "??",
            review: ["??"],
            image: Dra_Graciela_Svelitza,
        },
        {
            name: "Dr. Nicolas Caruso",
            speciality: "Director del Consejo de IC e HTP de la SAC",
            review: ["Coordinador de UCO y servicio de IC, HTP y Trasplante del Sanatorio Trinidad Mitre"],
            image: Dr_Nicolas_Caruso,
        },

    ]

    const speakersCase3 = [
        {
            name: "Dra. Katerina Ivanoska Ortuoño",
            speciality: "Residente de primer año de neumología Hospital Santojanni",
            image: Dra_Katerina_Ivanoska_Ortuono,
            review: [""]
        },
        {
            name: "Dr. Juan Ignacio  Zaballa",
            speciality: "Especialista en clínica médica y neumonologia",
            review: ["Jefe Residentes Hospital Santojanni"],
            image: Dr_Juan_Ignacio_Zaballa,
        },
        {
            name: "Dra. Silvia Quadrelli",
            speciality: "Dra. en Medicina - Jefa de Neumonología del Sanatorio Güemes de Buenos Aires",
            review: ["Directora de la Carrera de Especialista de Neumonología de la UBA - Miembro del Executive Board de la World Association for Bronchology - Presidenta de la Fundación para el Estudio de la Enfermedades fibrosantes del pulmón."],
            image: Dra_Silvia_Quadrelli,
        },
        {
            name: "Dra. Pamela Rossi",
            speciality: "Medica neumonologa de planta Hospital Santojanni",
            review: ["Coordinadora consultorio de enfermedades intersticiales Hospital Santojanni."],
            image: Dra_Pamela_Rossi,
        },
        {
            name: "Dr. Matias Castro",
            speciality: "Médico de Planta Hospital Italiano de Buenos Aires.",
            review: ["Ex coordinador de la sección trasplante pulmonar de la AAMR"],
            image: Dr_Diego_Litewka_PS,
        },
        {
            name: "Dr. Esteban Waisntein",
            speciality: "",
            review: ["Jefe de Unidad Investigación Clínica y Experimental Hospital de Rehabilitación Respiratoria María Ferrer"],
            image: Dr_Jose_Malet_PS,
        },
        {
            name: "Dra. Brenda Varela",
            speciality: "Medica Clinica. Médica Neumonologa.",
            review: ["Coordinadora del consultorio de EPID e HP en el Hospital Alemán. Ex coordinadora sección EPID AAMR."],
            image: Dra_Brenda_Varela,
        },

        {
            name: "Dra. Gabriela Tabaj",
            speciality: "Médica neumonóloga universitaria ",
            review: ["Jefa de Sala de Docencia e Investigación Hospital Cetrángolo. Subdirectora de la Carrera de Especialista en Neumonología - UBA"],
            image: Dra_Gabriela_Tabaj,
        }
    ]

    const logos = [
        {
            title: 'Elea',
            image: elea,
        },
        {
            title: 'Cassara',
            image: cassara,
        },
        {
            title: 'Casasco',
            image: casasco
        }
    ]

    return {
        itemsInformation,
        itemsHospitals,
        directores,
        speakersCase1,
        speakersCase2,
        speakersCase3,
        logos,
        screenWidth
    }
}

export default useData;