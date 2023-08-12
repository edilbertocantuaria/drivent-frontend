import api from './api';

export async function signIn(email, password) {
  const response = await api.post('/auth/sign-in', { email, password });
  return response.data;
}

export async function githubLogin() {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  console.log(code);
  const response = api.post('/auth/sign-in-github', { code });
  const { token } = response.data;
  console.log(`token: ${token}`);
  localStorage.setItem('token', token);
}

