import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import styled from '@mui/system/styled';
import React, { useState } from 'react';

const FormTitle = styled(Typography)({
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '20px',
  textAlign: 'center',
});

const CustomButton = styled(Button)({
  backgroundColor: '#00bcd4', // Cor azul similar da imagem
  color: 'white',
  '&:hover': {
    backgroundColor: '#0097a7',
  },
  width: '100%',
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    comments: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Inicia o loading
    setError(null); // Reseta qualquer erro anterior
    setSuccess(null); // Reseta qualquer mensagem de sucesso anterior

    if (
      formData.email === '' ||
      formData.phone === '' ||
      formData.name === '' ||
      formData.address === '' ||
      formData.comments === ''
    ) {
      setError('Please fill out all required fields.');
      setLoading(false); // Finaliza o loading
      return;
    }

    try {
      // Primeiro, obtemos o token da rota /get-token
      const endpointToken =
        'https://backend-josue-production.up.railway.app/get-token'; // endpoint para o backend
      // const endpointToken = 'http://localhost:5000/get-token'; // Alterando a URL de teste para o local

      const tokenResponse = await fetch(endpointToken, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!tokenResponse.ok) {
        throw new Error('Erro ao obter o token');
      }

      const tokenData = await tokenResponse.json();
      const token = tokenData.token;

      const endpoint =
        'https://backend-josue-production.up.railway.app/send-elite'; // endpoint para o backend
      // const endpoint = 'http://localhost:5000/send-elite'; // Alterando a URL de teste para o local

      const formResponse = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // token aqui
        },
        body: JSON.stringify(formData), // Dados do formulário
      });

      if (!formResponse.ok) {
        throw new Error('Erro ao enviar o formulário');
      }

      const result = await formResponse.json();
      console.log('Formulário enviado com sucesso:', result);
      setLoading(false);
      setSuccess('Form successfully submitted!');
      window.dataLayer.push({
        event: 'contact_form',
        email: formData.email,
        name: formData.name,
        subject: formData.phone,
        message: formData.comments,
        address: formData.address,
      });
    } catch (err) {
      console.error('Erro no envio:', err);
      setError('Error for sending email.');
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        sx={{ display: success ? 'none' : 'block', mt: 4 }}
        component="form"
        onSubmit={handleSubmit}
      >
        <FormTitle variant="h4">Contact Us</FormTitle>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Endereço"
              name="address"
              value={formData.address}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Número de telefone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Comentários"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <CustomButton type="submit" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar'}
            </CustomButton>
            {error && (
              <Typography mt={2} textAlign={'center'} color="error">
                {error}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Box>
      {success && (
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <CheckCircleIcon sx={{ fontSize: '64px', color: '#00bbd3' }} />
          <Typography variant="h5" sx={{ mt: 1 }}>
            {success}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default ContactForm;
