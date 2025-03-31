const endpoint = 'https://mama-gpt-api.vercel.app/api/chat';

async function sendMessage(messages) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  });

  const data = await response.json();
  return data;
}
