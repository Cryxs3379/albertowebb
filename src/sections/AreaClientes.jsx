import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';
import './AreaClientes.css';
import imageservicios from '../assets/clientes.png';

const AreaClientes = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí se podría agregar la lógica de autenticación real
    if (email === 'cliente@example.com' && password === 'password123') {
      navigate('/dashboard'); // Redirigir a la página del dashboard o área de clientes
    } else {
      setError('Credenciales incorrectas. Por favor, intenta nuevamente.');
    }
  };

  useEffect(() => {
    // Cambiar el fondo del body cuando el componente se monte
    document.body.style.backgroundImage = `url(${imageservicios})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'repeat';
    document.body.style.backgroundAttachment = 'fixed';

    // Activar la animación
    setAnimate(true);

    // Restaurar el fondo original cuando el componente se desmonte
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundAttachment = '';
    };
  }, []);

  return (
    <Container className={`login-container ${animate ? 'fade-in' : ''}`} maxWidth="sm">
      <Box component="form" onSubmit={handleLogin} sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Iniciar Sesión
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Correo Electrónico"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Contraseña"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Iniciar Sesión
        </Button>
      </Box>
    </Container>
  );
};

export default AreaClientes;
