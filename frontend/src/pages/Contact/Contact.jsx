import React,{useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Contact.css';
import '../Animation.css'

// Definiowanie niestandardowej ikony
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/252/252025.png', // URL do obrazu ikony
  iconSize: [40, 40], // Rozmiar ikony [szerokość, wysokość]
  iconAnchor: [20, 40], // Punkt zakotwiczenia (środek ikony na mapie)
  popupAnchor: [0, -40], // Punkt zakotwiczenia dla popup
});

const Contact = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Imię i nazwisko jest wymagane';
        if (!formData.email.trim()) newErrors.email = 'Email jest wymagany';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Nieprawidłowy adres email';
        if (!formData.message.trim()) newErrors.message = 'Wiadomość jest wymagana';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert('Wiadomość została wysłana!');
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
        }
    };


    return(
        <div className="contact-container">
            <h1 className="title_h1">Kontakt</h1>
            <div className='line'></div>

            <div className='section-contact-form'>
                <h2 className='title-contact'>Formularz kontaktowy</h2>

                <form onSubmit={handleSubmit}>
                    <div className="contact-form-up">
                        {/* Pole na imię */}
                        <div className={`input-container-namesurname ${errors.name ? 'error' : formData.name.trim() ? 'success' : ''}`}>
                            <input
                                className="first-text"
                                type="text"
                                name="name"
                                placeholder={errors.name || 'Imię i nazwisko'}
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        {/* Pole na email */}
                        <div className={`input-container-email ${errors.email ? 'error' : formData.email.trim() && /\S+@\S+\.\S+/.test(formData.email) ? 'success' : ''}`}>
                            <input
                                className="twice-email"
                                type="email"
                                name="email"
                                placeholder={errors.email || 'Email'}
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Pole na wiadomość */}
                    <div className="contact-form-down">
                        <div className={`input-container-message ${errors.message ? 'error' : formData.message.trim() ? 'success' : ''}`}>
                            <textarea
                                className="message"
                                name="message"
                                placeholder={errors.message || 'Wiadomość'}
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button className="send-message" type="submit">
                            Wyślij wiadomość
                        </button>
                    </div>
                </form>
                </div>


            <div className='section-map'>
                <MapContainer center={[50.020179, 21.982613]} zoom={15} style={{ height: '500px', width: '100%' }  }>
                    <TileLayer
            url="https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.carto.com/">Carto</a>, <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[50.020179, 21.982613]} icon={customIcon}>
                        
                        <Popup>
                            Akademicka 3, 35-084 Rzeszów
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );

}

export default Contact;