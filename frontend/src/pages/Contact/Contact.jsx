import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Helmet } from 'react-helmet-async';
import 'leaflet/dist/leaflet.css';
import './Contact.css';
import '../Animation.css';

// Definiowanie niestandardowej ikony
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/252/252025.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${apiUrl}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSubmitted(true); // Formularz wysłany pomyślnie

                // Reset formularza
                setFormData({ name: '', email: '', message: '' });

                // Zniknięcie komunikatu po 3 sekundach
                setTimeout(() => {
                    setIsSubmitted(false);
                });
                
                alert('Wiadomość została wysłana!');
                
            } else {
                setIsSubmitted(false);
                alert('Wystąpił błąd. Spróbuj ponownie.');
            }
        } catch (error) {
            console.error('Błąd przy wysyłaniu wiadomości:', error);
            alert('Wystąpił błąd. Spróbuj ponownie.');
        }
    };

    return (
        <>
            <Helmet>
                <html lang="pl" />
                <title>Kontakt - Portfolio Web Developera</title>
                <meta 
                    name="description" 
                    content="Skontaktuj się ze mną za pomocą formularza lub znajdź mnie na mapie. Frontend Developer, specjalizuję się w React.js, Node.js i Tailwind CSS." 
                />
                <meta name="keywords" content="resume, web developer, portfolio, React, Node.js, C#, front-end, back-end, JavaScript, HTML, CSS, PostgreSQL" />
                <meta property="og:title" content="Kontakt - Portfolio Frontend Developera" />
                <meta property="og:description" content="Napisz do mnie wiadomość lub odwiedź mnie w biurze w Rzeszowie." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://mikolajmelnyk.com.pl/Contact" />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <div className="contact-container">
                
                <h1 className="title_h1">Kontakt</h1>
                <div className="line"></div>

                <div className="section-contact-form">
                    
                    <h2 className="title-contact">Formularz kontaktowy</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="contact-form-up">
                            <div className="input-container-namesurname">
                                <input
                                    className="first-text"
                                    type="text"
                                    name="name"
                                    placeholder="Imię i nazwisko"
                                    value={formData.name}
                                    onChange={handleChange}
                                    autoComplete="name" 
                                    required
                                />
                            </div>

                            <div className="input-container-email">
                                <input
                                    className="twice-email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="email" 
                                    required
                                />
                            </div>
                        </div>

                        <div className="contact-form-down">
                            <div className="input-container-message">
                                <textarea
                                    className="message"
                                    name="message"
                                    placeholder="Wiadomość"
                                    value={formData.message}
                                    onChange={handleChange}
                                    autoComplete="off"
                                ></textarea>
                            </div>

                            <button className="send-message" type="submit">
                                <p>Wyślij wiadomość</p>
                            </button>
                            {isSubmitted}
                        </div>
                    </form>


                </div>

                <div className="section-map">
                    <MapContainer center={[50.020179, 21.982613]} zoom={15} style={{ height: '500px', width: '100%' }}>
                        <TileLayer
                            url="https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/{z}/{x}/{y}{r}.png"
                            attribution='&copy; <a href="https://www.carto.com/">Carto</a>, <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[50.020179, 21.982613]} icon={customIcon}>
                            <Popup>
                                <p>Akademicka 3, 35-084 Rzeszów</p>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    );
};

export default Contact;
