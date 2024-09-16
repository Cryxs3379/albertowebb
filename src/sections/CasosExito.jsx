import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';
import imagesCasosExito from '../assets/1.png';
import './CasosExito.css';

const pages = [
  {
    title: "Caso de Éxito 1",
    contentLeft: "Descripción detallada del lado izquierdo del caso de éxito 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    contentRight: "Descripción detallada del lado derecho del caso de éxito 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    titleClass: "title1" // Clase específica para el título
  },
  {
    title: "Caso de Éxito 2",
    contentLeft: "Descripción detallada del lado izquierdo del caso de éxito 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    contentRight: "Descripción detallada del lado derecho del caso de éxito 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    titleClass: "title2" // Clase específica para el título
  },
  {
    title: "Caso de Éxito 3",
    contentLeft: "Descripción detallada del lado izquierdo del caso de éxito 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    contentRight: "Descripción detallada del lado derecho del caso de éxito 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    titleClass: "title3" // Clase específica para el título
  },
  // Añadir más casos de éxito según sea necesario
];

const CasosExito = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [showTitles, setShowTitles] = useState(true);

  useEffect(() => {
    // Cambiar el fondo del body a una imagen cuando el componente se monte
    document.body.style.backgroundImage = `url(${imagesCasosExito})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';

    // Restaurar el fondo original cuando el componente se desmonte
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundAttachment = '';
    };
  }, []);

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
    setShowTitles(false);
  };

  const handleBackClick = () => {
    setShowTitles(true);
  };

  return (
    <Container className="cases-container" maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      {showTitles ? (
        <Box className="titles-container">
          {pages.map((page, index) => (
            <Typography key={index} variant="h4" component="h1" gutterBottom className={`title ${page.titleClass}`} onClick={() => handlePageClick(index)}>
              {page.title}
            </Typography>
          ))}
        </Box>
      ) : (
        <>
          <Box className={`page-container ${animate ? 'animate' : ''}`} sx={{ transition: 'width 0.5s, height 0.5s', position: 'relative', overflow: 'hidden', borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.0)' }}>
            <Box className={`page-half ${!animate ? 'fade-in' : ''}`}>
              <Typography variant="h4" component="h1" gutterBottom>
                {pages[currentPage].title}
              </Typography>
              <Typography variant="body1" component="p">
                {pages[currentPage].contentLeft}
              </Typography>
            </Box>
            <Box className={`page-half ${!animate ? 'fade-in' : ''}`}>
              <Typography variant="body1" component="p">
                {pages[currentPage].contentRight}
              </Typography>
            </Box>
          </Box>
          <Box className="navigation-buttons" sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 4 }}>
            <Button onClick={handleBackClick} startIcon={<ArrowBackIos />} className="nav-button back-button">
              Atrás
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default CasosExito;
