export default async function handler(req, res) {
  try {
    const apiUrl = process.env.BACKEND_API_URL || 'http://localhost:5000/api/products';
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`Backend responded with status ${response.status}`);
    }
    
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
} 