import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, CardMedia, TextField, Button, Box } from '@mui/material';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import emailjs from 'emailjs-com';
import image1 from '../assets/recienlicenciado.png';
import image2 from '../assets/profesional.png';
import image3 from '../assets/experiencia.png';
import imageservicios from '../assets/firma.png';
import './LaFirma.css';

const sections = [
  {
    title: "Programa de prácticas para estudiantes de derecho",
    description: "Descripción de Sobre Nosotros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: image1,
  },
  {
    title: "Recién licenciados o abogados con menos de un año de experiencia",
    description: "Descripción de Nuestra trayectoria. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: image2,
  },
  {
    title: "Abogados con experiencia",
    description: "Descripción de Visión y valores. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: image3,
  },
];

const Talento = () => {
  const [selectedSection, setSelectedSection] = useState(sections[0]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cv: null,
  });

  useEffect(() => {
    document.body.style.backgroundImage = `url(${imageservicios})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'repeat';
    document.body.style.backgroundAttachment = 'fixed';

    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundAttachment = '';
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configura los parámetros para EmailJS
    const serviceID = 'service_edi48wi';
    const templateID = 'template_ecfmq6t';
    const userID = '9evJrOim0CnSi3xAZ';

    // Crea un objeto FormData para enviar los datos
    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('cv', formData.cv);

    // Envía el formulario usando emailjs
    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        console.log(result.text);
        alert('Formulario enviado con éxito!');
      }, (error) => {
        console.log(error.text);
        alert('Hubo un error al enviar el formulario. Inténtalo de nuevo.');
      });
  };

  return (
    <Container className="lafirma-container" maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom className="lafirma-title">
        {/* Título principal */}
      </Typography>
      <div className="lafirma-nav-container">
        <nav className="lafirma-nav">
          {sections.map((section, index) => (
            <button
              key={index}
              className={`lafirma-nav-button ${selectedSection.title === section.title ? 'active' : ''}`}
              onClick={() => setSelectedSection(section)}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>
      <TransitionGroup className="lafirma-content">
        <CSSTransition
          key={selectedSection.title}
          timeout={500}
          classNames="curtain"
        >
          <div className="lafirma-content-inner">
            <Grid container spacing={4} className="lafirma-section">
              <Grid item xs={12} md={4} className="lafirma-image-container">
                <CardMedia
                  component="img"
                  alt={selectedSection.title}
                  image={selectedSection.image}
                  title={selectedSection.title}
                  className="lafirma-image"
                />
              </Grid>
              <Grid item xs={12} md={8} className="lafirma-text-container">
                <Typography variant="body1" component="p" gutterBottom>
                  {selectedSection.description}
                </Typography>
                
                {/* Formulario */}
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Nombre completo"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    required
                  />
                  <TextField
                    label="Correo electrónico"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    required
                  />
                  <Button
                    variant="contained"
                    component="label"
                    fullWidth
                    sx={{ marginTop: '16px', marginBottom: '16px' }}
                  >
                    Adjuntar CV
                    <input
                      type="file"
                      name="cv"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      hidden
                      required
                    />
                  </Button>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Enviar
                  </Button>
                </form>
                
              </Grid>
            </Grid>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Container>
  );
};

export default Talento;

