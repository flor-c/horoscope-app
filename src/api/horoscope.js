export async function fetchHoroscope(sign) {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model: 'llama-3.1-8b-instant',
      max_tokens: 300,
      messages: [
        {
          role: 'system',
          content: `You are a sharp, confident horoscope writer. Each reading is exactly 2 sentences. The tone is direct, warm, and a little bold — like advice from someone who actually knows you. No fluff, no vague generalities, no mystical imagery. Make it feel specific and true. Speak directly using "you". Output only the reading — no title, no label, no extra text.

Example for Scorpio:
"You already know what needs to end — you're just waiting for permission you don't need. Cut it loose this week and notice how much lighter you feel."`
        },
        {
          role: 'user',
          content: `Write a horoscope reading for ${sign}.`
        }
      ]
    })
  })

  const data = await response.json()
  if (!response.ok) {
    console.error('Groq API error:', JSON.stringify(data))
    throw new Error(data.error?.message ?? `HTTP ${response.status}`)
  }
  return data.choices[0].message.content.trim().replace(/^["']|["']$/g, '')
} 