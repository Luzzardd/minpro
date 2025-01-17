export const register = async (name: string, email: string, password: string, referral: string) => {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password, referral }),
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }

  return await response.json();
}
