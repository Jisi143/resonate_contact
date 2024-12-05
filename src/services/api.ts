const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function getContacts() {
  const response = await fetch(`${API_BASE_URL}/users`);
  if (!response.ok) {
    throw new Error('Failed to fetch contacts');
  }
  return response.json();
}