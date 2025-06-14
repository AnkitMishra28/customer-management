# Customer Management System

A comprehensive Customer Relationship Management (CRM) system built with React frontend and Node.js backend.

## 🚀 Features

- **Customer Management**: Add, edit, delete, and view customer information
- **User Authentication**: Secure login and registration system
- **Dashboard**: Analytics and overview of customer data
- **Responsive Design**: Modern UI with Tailwind CSS
- **Real-time Updates**: Live data synchronization
- **Payment Integration**: Stripe payment processing
- **Email Notifications**: Automated email alerts
- **Data Export**: PDF and CSV export functionality

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Chart.js
- Framer Motion
- React Query
- Stripe Integration

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcryptjs
- Nodemailer
- Stripe API

## 📁 Project Structure

```
Crm_Project/
├── crm-client/          # React frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── crm-server/          # Node.js backend
│   ├── index.js
│   ├── package.json
│   └── vercel.json
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AnkitMishra28/customer-management.git
   cd customer-management
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd crm-client
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../crm-server
   npm install
   ```

4. **Environment Setup**
   
   Create `.env` file in `crm-server/` directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   EMAIL_USER=your_email
   EMAIL_PASS=your_email_password
   ```

5. **Run Development Servers**

   **Backend:**
   ```bash
   cd crm-server
   npm start
   ```

   **Frontend:**
   ```bash
   cd crm-client
   npm run dev
   ```

## 🌐 Deployment

### Vercel Deployment

This project is configured for easy deployment on Vercel:

1. **Frontend**: The React app will be automatically deployed when pushed to GitHub
2. **Backend**: The Node.js API is configured with `vercel.json` for serverless deployment

### Environment Variables for Production

Set these environment variables in your Vercel dashboard:

- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `STRIPE_SECRET_KEY`: Your Stripe secret key
- `EMAIL_USER`: Email for notifications
- `EMAIL_PASS`: Email password

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Customers
- `GET /api/customers` - Get all customers
- `POST /api/customers` - Create new customer
- `PUT /api/customers/:id` - Update customer
- `DELETE /api/customers/:id` - Delete customer

### Payments
- `POST /api/payments/create-payment-intent` - Create Stripe payment intent
- `POST /api/payments/confirm` - Confirm payment

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ankit Mishra**
- GitHub: [@AnkitMishra28](https://github.com/AnkitMishra28)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vercel for seamless deployment
- Stripe for payment processing
- MongoDB for database services 