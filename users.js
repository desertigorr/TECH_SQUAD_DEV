// /api/users.js

export default async function handler(req, res) {
  const apiUrl = process.env.API_BASE_URL + '/users';

  try {
    const response = await fetch(apiUrl, {
      method: req.method,
      headers: req.headers,
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: "Ошибка при обращении к API" });
  }
}
