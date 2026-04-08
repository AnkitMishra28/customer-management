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

This repository is configured to deploy as one Vercel project with the frontend and backend served from the same domain.

1. Import the repository into Vercel.
2. Keep the root `vercel.json` in place so Vercel routes API requests to `crm-server/index.js` and serves the React app from `crm-client`.
3. Set the environment variables listed below in the Vercel project settings.
4. Deploy the main branch.

### Environment Variables for Production

Set these environment variables in your Vercel dashboard. These names must match the code:

- `MONGODB_URI`: MongoDB connection string
- `JWT_Secret`: JWT signing secret used by the backend
- `PAYMENT_KEY`: Stripe secret key
- `DB_USER`: Optional fallback MongoDB username
- `DB_PASSWORD`: Optional fallback MongoDB password
- `DNS_SERVER`: Optional DNS server override if your network blocks MongoDB SRV lookups

Important: the backend currently reads `JWT_Secret` with a capital `S`, not `JWT_SECRET`.

### What Works After Deployment

- Executive users can add leads, follow-ups, and tickets.
- Admin users can manage status changes, task assignment, ticket assignment, and analytics.
- The same admin credentials work on the deployed site because Firebase Auth and MongoDB role checks are preserved.

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