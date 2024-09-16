import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Box, CardMedia } from '@mui/material';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import image1 from '../assets/aboutus.png';
import image2 from '../assets/trayectoria.png';
import imageservicios from '../assets/firma.png';
import './LaFirma.css';

const sections = [
  {
    title: "Sobre Nosotros",
    description: "",
    content: (
      <Box className="lafirma-sobrenosotros-content">
        <Typography variant="h5" gutterBottom color='#56070c'>
          <strong>ALNEKO ABOGADOS</strong>
        </Typography>
        <Typography variant="body1" gutterBottom color='#000000'>
          ALNEKO ABOGADOS es un despacho experto en procedimientos judiciales relacionados con actuaciones de competencia desleal realizadas por mercantiles con el fin de irrumpir en el sector económico en perjuicio de sus competidores.
        </Typography>
        <Typography variant="body1" gutterBottom>
          La Firma se ha especializado en el análisis y estudio de la Ley 3/1991, de 10 de enero, de Competencia Desleal y de la Ley 1/2019, de 20 de febrero, de Secretos Empresariales, así como en demás leyes relacionadas con este tema.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Asimismo, por su estrecha vinculación con lo anterior, la Firma se ha convertido en un referente jurídico en el ámbito del Derecho de Marcas y Patentes, así como en el Derecho de Propiedad Intelectual e Industrial.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Ante la necesidad de cada vez más empresas de contar con una defensa letrada experta en estas materias para que puedan hacer valer su Derecho en sede judicial, ha nacido la presente Firma.
        </Typography>
        <Typography variant="body1" gutterBottom>
          El objetivo de ALNEKO ABOGADOS es claro: ofrecer al cliente asesoramiento jurídico y asistencia letrada en procedimientos judiciales complejos sobre una materia de especial calado para las mercantiles.
        </Typography>
      </Box>
    ),
    
    image: image1
  },
  {
    title: "Nuestra trayectoria",
    description: "",
    content: (
      <Box className="lafirma-trayectoria-content">
        
        <Typography variant="h6" gutterBottom>
        <strong><className >ALNEKO ABOGADOS</className></strong> nace de la unión de abogados altamente especializados en la materia de competencia desleal y secreto empresarial, así como en materia de Marcas, Patentes y Derecho de la Propiedad Intelectual e Industrial.
        </Typography>
        <Typography variant="body1" gutterBottom>
          La Firma destaca porque sus profesionales han trabajado en la sección especializada de competencia desleal en despachos ampliamente reconocidos a nivel nacional e internacional.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Asimismo, ALNEKO ABOGADOS, desde su inicio, ha contado con un departamento de litigación conformado por expertos en la defensa letrada en procedimientos judiciales.
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom>
          Esta unión de fuerza ha permitido a la Firma crecer en dos aspectos fundamentales:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              <strong>Asesoramiento jurídico:</strong> Blindando a las mercantiles para que sus competidoras no puedan realizar actuaciones de competencia desleal, además de guiar a las sociedades en cada paso estratégico que dan para que dichas decisiones no infrinjan precepto legal alguno.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Defensa letrada en procedimientos judiciales:</strong> Dirigiendo la estrategia procesal del procedimiento judicial que dimane de las actuaciones de competencia desleal cometidas por competidores, con el fin de buscar que los infractores no vuelvan a cometer dichos actos desleales y resarzan el daño ocasionado a nuestro cliente.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1" gutterBottom>
          ALNEKO ABOGADOS, tras el paso del tiempo, se ha convertido en una firma referente en el ámbito de la competencia desleal y en la dirección de procedimientos complejos sobre esta materia.
        </Typography>
      </Box>
    ),
    image: image2
  },
];

const LaFirma = () => {
  const [selectedSection, setSelectedSection] = useState(sections[0]);

  useEffect(() => {
    // Cambiar el fondo del body cuando el componente se monte
    document.body.style.backgroundImage = `url(${imageservicios})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'repeat';
    document.body.style.backgroundAttachment = 'fixed';

    // Restaurar el fondo original cuando el componente se desmonte
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundAttachment = '';
    };
  }, []);

  return (
    <Container className="lafirma-container" maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom className="lafirma-title">
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
              <Grid item xs={12} md={4}> {/* Reducir a 4 columnas */}
                <CardMedia
                  component="img"
                  alt={selectedSection.title}
                  image={selectedSection.image}
                  title={selectedSection.title}
                  className="lafirma-image"
                />
              </Grid>
              <Grid item xs={12} md={1}>
                <Box className="divider"></Box> {/* Barra divisora */}
              </Grid>
              <Grid item xs={12} md={7} className="lafirma-text"> {/* Aumentar a 7 columnas */}
                {selectedSection.content ? selectedSection.content : (
                  <Typography variant="body1" component="p">
                    {selectedSection.description}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Container>
  );
};

export default LaFirma;



