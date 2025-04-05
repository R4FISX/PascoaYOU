require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

// Middlewares básicos
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

// Importação das rotas
const templateRoutes = require('./routes/templates');
const cardRoutes = require('./routes/cards');
const paymentRoutes = require('./routes/payment');

// Uso das rotas
app.use('/api/templates', templateRoutes);
app.use('/api/cards', cardRoutes);
app.use('/api/payment', paymentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});