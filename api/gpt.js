export default async function handler(req, res) {
  const { messages, model = "gpt-4" } = req.body;

  const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model,
      messages
    })
  });

  const data = await openaiRes.json();
  res.status(200).json(data);
}
