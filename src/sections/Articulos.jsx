import React, { useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import imagesCasosExito from '../assets/articulosrojo.png';
import './Articulos.css';

const pages = [
  {
    title: "Valoración artículo 217.4 LEC",
    description: (
      <>
        Análisis detallado del artículo 217.4 de la LEC <br />
        y su impacto en la competencia desleal.
      </>
    ),
    path: "/articulo1",
    boxClass: "box1"
  },
  {
    title: "Artículo 2",
    description: (
      <>
        Análisis detallado del artículo 217.4 de la LEC <br />
        y su impacto en la competencia desleal.
      </>
    ),
    path: "/articulo2",
    boxClass: "box2"
  },
  {
    title: "Artículo 3",
    description: (
      <>
        Análisis detallado del artículo 217.4 de la LEC <br />
        y su impacto en la competencia desleal.
      </>
    ),
    path: "/articulo3",
    boxClass: "box3"
  },
];

const Articulos = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundImage = `url(${imagesCasosExito})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';

    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundAttachment = '';
    };
  }, []);

  const handlePageClick = (path) => {
    navigate(path);
  };

  return (
    <Container className="cases-container" maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Box className="titles-container">
        {pages.map((page, index) => (
          <Box
            key={index}
            className={`title-box ${page.boxClass}`} // Aplicar clases específicas al contenedor Box
            onClick={() => handlePageClick(page.path)} // Redirige a la ruta específica
            sx={{ cursor: 'pointer', marginBottom: '20px' }} // Añade propiedades de estilo específicas si es necesario
          >
            <Typography variant="h6" component="h1">
              <strong>{page.title}</strong>
            </Typography>
            <Typography variant="body2">
              {page.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Articulos;
