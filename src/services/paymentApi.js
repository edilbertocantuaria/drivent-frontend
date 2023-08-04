import { toast } from 'react-toastify';
import api from './api';

export async function getTicketTypes(token) {
  const response = await api.get('/tickets/types', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}   

export async function reserveTicket(token, ticketTypeId) {
  try { 
    await api.post('/tickets', { ticketTypeId }, { 
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    alert('Deve ir para pagamento');
    toast('Ingresso reservado com sucesso!');
  } catch (error) {
    toast('Erro ao fazer a reserva do ingresso');
    console.error('Erro ao fazer a reserva do ingresso:', error);
  }
}
