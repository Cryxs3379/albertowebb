import React, { useEffect } from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import image1 from '../assets/s1.png';
import image2 from '../assets/s2.png';
import image3 from '../assets/s3.png';
import imageservicios from '../assets/servicios.png';
import './Servicios.css';

const services = [
  {
    title: "Litigios en materia de Competencia Desleal",
    image: image1
  },
  {
    title: "Litigios de Marcas, Patentes, Propiedad Intelectual y Propiedad Industrial",
    image: image2
  },
  {
    title: "Manual de Secretos Empresariales",
    image: image3
  },
  // Añadir más servicios según sea necesario
];

const Servicios = () => {
  useEffect(() => {
    // Cambiar el fondo del body a una imagen cuando el componente se monte
    document.body.style.backgroundImage = `url(${imageservicios})`;
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

  return (
    <Container className="services-container" maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom className="services-title">
        {/* Nuestros Servicios  aqui si quiero pongo texto*/}
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className="service-card">
              <CardMedia
                component="img"
                alt={service.title}
                height="140"
                image={service.image}
                title={service.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Servicios;



