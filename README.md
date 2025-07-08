# 🐾 Pet Retail Hub - Inventory Management System

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14.1.0-000000?logo=nextdotjs)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?logo=nodedotjs)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?logo=mongodb)](https://www.mongodb.com/)

Professional inventory management solution for pet retailers with real-time tracking and analytics.

![Pet Retail Hub Screenshot](https://via.placeholder.com/800x500?text=Pet+Retail+Hub+Screenshot)

## Features

- **Real-time inventory tracking** with stock alerts
- **Product categorization** by pet type and category
- **Stock status indicators** (In Stock, Low Stock, Out Soon)
- **Responsive dashboard** for all device sizes
- **RESTful API** for inventory management

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Deployment**: Vercel (Frontend), Render (Backend)
- **Database**: MongoDB Atlas

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account or local MongoDB instance
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pet-retail-hub.git
cd pet-retail-hub
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Create `.env` files:
- `backend/.env` with your MongoDB connection string
- `frontend/.env.local` with `BACKEND_API_URL=http://localhost:5000`

### Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. Start the frontend development server:
```bash
cd ../frontend
npm run dev
```

3. Access the application at: [http://localhost:3000](http://localhost:3000)

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/products | Get all products |
| GET    | /api/products/:id | Get single product |
| POST   | /api/products | Create new product |

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Arpit Shah - [@yourtwitter](https://twitter.com/yourtwitter) - arpit@domain.com

Project Link: [https://github.com/yourusername/pet-retail-hub](https://github.com/yourusername/pet-retail-hub) 