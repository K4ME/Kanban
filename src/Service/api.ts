import axios from 'axios';

interface cardType {
  titulo : string, 
  conteudo: string, 
  lista: string,
  id?: string
}

async function getToken() {
  try {
    const response = await axios.post('http://localhost:5000/login/', 
    { "login":"letscode", "senha":"lets@123"});
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getCards() {
  try {
    const response = await axios.get('http://localhost:5000/cards',
    {headers: {
      'Authorization': `Bearer ${await getToken()}`
    }});
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function createCard(data: cardType) {
  try {
    const response = await axios.post('http://localhost:5000/cards',
    data,
    {headers: {
      'Authorization': `Bearer ${await getToken()}`
    }});
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateCard(data: cardType) {
  try {
    const response = await axios.put(`http://localhost:5000/cards/${data.id}`,
    data,
    {headers: {
      'Authorization': `Bearer ${await getToken()}`
    }});
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteCard(id: string) {
  try {
    const response = await axios.delete(`http://localhost:5000/cards/${id}`,
    {headers: {
      'Authorization': `Bearer ${await getToken()}`
    }});
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}